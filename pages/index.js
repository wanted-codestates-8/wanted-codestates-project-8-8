import styled from 'styled-components'
import SearchBar from '../components/SearchBar'
import ItemGroup from '../components/item/ItemGroup'
import { useState, useEffect } from 'react'

import Image from 'next/image'

import PlusButton from '../components/PlusButton'
import Modal from '../components/modal/Modal'
import Contents from '../components/Contents'

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
  const [activedData, setActivedData] = useState(null)
  const [close, setClose] = useState(true)

  const handleSearchResult = (e) => {
    const tagState = TAG_DATA[currentTag]
    const value = e.target.value
    const lists = JSON.parse(localStorage.getItem('dataList')).filter((list) =>
      list[tagState].includes(value)
    )

    setSearchResult(value)
    setData(lists)
  }

  const onTagChange = (idx) => {
    const tagState = TAG_DATA[idx]
    const lists = JSON.parse(localStorage.getItem('dataList')).filter((list) =>
      list[tagState].includes(searchResult)
    )

    setCurrentTag(idx)
    setData(lists)
  }

  const closeModal = () => {
    setActivedData(null)
  }

  const onDataChange = (id, text) => {
    closeModal()

    const willUpdateData = data.find((item) => item.id === id)
    willUpdateData.memo = text
    localStorage.setItem('dataList', JSON.stringify(data))
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
        onTagChange={onTagChange}
      />
      <ItemGroup itemList={data} onClick={setActivedData} />
      {close && activedData && (
        <Modal onClose={closeModal}>
          <Contents data={activedData} onDataChange={onDataChange} />
        </Modal>
      )}
      <PlusButton href={'/list'} />
    </Wrapper>
  )
}
