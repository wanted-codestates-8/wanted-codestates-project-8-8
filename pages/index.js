import styled from 'styled-components'
import SearchBar from '../components/SearchBar'
import ItemGroup from '../components/item/ItemGroup'
import { useState } from 'react/cjs/react.development'

import Image from 'next/image'
import { useEffect } from 'react'
import PlusButton from '../components/PlusButton'

const Wrapper = styled.div`
  margin: auto;
  width: 360px;
  height: 100vh;
  background-color: white;
`
const ImageWrapper = styled.div`
  margin-left: 20px;
`

const TAG_DATA = ['name', 'addr', 'memo']

export default function Home() {
  const [data, setData] = useState([])
  const [searchResult, setSearchResult] = useState('')
  const [currentTag, setCurrentTag] = useState(0)

  const handleSearchResult = (e) => {
    const tagState = TAG_DATA[currentTag]
    const value = e.target.value
    const lists = JSON.parse(localStorage.getItem('dataList')).filter((list) =>
      list[tagState].includes(value)
    )

    setSearchResult(value)
    setData(lists)
  }

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('dataList')) || [])
  }, [])

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src="/title.png" width={100} height={40} />
      </ImageWrapper>

      <SearchBar
        value={searchResult}
        onChange={handleSearchResult}
        tag={currentTag}
        onTagChange={(idx) => setCurrentTag(idx)}
      />
      <ItemGroup itemList={data} />
      <PlusButton href={'/list'} />
    </Wrapper>
  )
}
