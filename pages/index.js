import styled from 'styled-components'
import SearchBar from '../components/SearchBar'
import ItemGroup from '../components/item/ItemGroup'
import { useState } from 'react/cjs/react.development'
import { useEffect } from 'react'
import AddButton from '../components/AddButton'

const Wrapper = styled.div`
  margin: auto;
  width: 360px;
  height: 900px;
  background-color: white;
`

const TAG_DATA = ['name', 'addr', 'memo']

export default function Home() {
  const [data, setData] = useState([])
  const [searchResult, setSearchResult] = useState('')
  const [currentTag, setCurrentTag] = useState(0)

  const handleSearchResult = (e) => {
    const tagState = TAG_DATA[currentTag]
    const value = e.target.value
    const lists = data.filter((list) => list[tagState].includes(value))

    setSearchResult(value)
    setData(lists)
  }

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('dataList')) || [])
  }, [])

  return (
    <Wrapper>
      <SearchBar
        value={searchResult}
        onChange={handleSearchResult}
        tag={currentTag}
        onTagChange={(idx) => setCurrentTag(idx)}
      />
      <ItemGroup itemList={data} />
      <AddButton href={'/list'} src="/add.png" width={30} height={30} />
    </Wrapper>
  )
}
