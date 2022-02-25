import styled from 'styled-components'
import SearchBar from '../components/SearchBar'
import ItemGroup from '../components/item/ItemGroup'
import { useState, useEffect } from 'react'

import Image from 'next/image'
import PlusButton from '../components/PlusButton'
import Modal from '../components/modal/Modal'
import Contents from '../components/Contents'
import FeedbackModal from '../components/modal/FeebackModal'

const Wrapper = styled.div`
  margin: auto;
  width: 360px;
  height: 100vh;
  background-color: white;
  position: relative;
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
  const [feedbackState, setFeedbackState] = useState(null)

  const handleSearchResult = (e) => {
    const tagState = TAG_DATA[currentTag]
    const value = e.target.value
    const lists = (JSON.parse(localStorage.getItem('dataList')) || []).filter(
      (list) => list[tagState].includes(value)
    )

    setSearchResult(value)
    setData(lists)
  }

  const onTagChange = (idx) => {
    const tagState = TAG_DATA[idx]
    const lists = (JSON.parse(localStorage.getItem('dataList')) || []).filter(
      (list) => list[tagState].includes(searchResult)
    )

    setCurrentTag(idx)
    setData(lists)
  }

  const closeModal = () => {
    setActivedData(null)
  }

  const onDataChange = (id, text) => {
    if (!text) {
      setFeedbackState({
        text: '메모를 입력해주세요',
        className: 'warning',
      })
      return
    }

    closeModal()

    const willUpdateData = data.find((item) => item.id === id)
    willUpdateData.memo = text
    localStorage.setItem('dataList', JSON.stringify(data))

    setFeedbackState({
      text: '수정이 완료되었습니다',
      className: '',
    })
  }

  const onDataDelete = (id) => {
    closeModal()

    let leftData

    if (data.length === 1) {
      localStorage.removeItem('dataList')
      leftData = []
    } else {
      leftData = data.filter((item) => item.id !== id)
      localStorage.setItem('dataList', JSON.stringify(leftData))
    }

    setData(leftData)

    setFeedbackState({
      text: '삭제가 완료되었습니다',
      className: '',
    })
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
          <Contents
            data={activedData}
            onDataChange={onDataChange}
            onDataDelete={onDataDelete}
          />
        </Modal>
      )}
      <PlusButton href={'/list'} />

      {feedbackState && (
        <FeedbackModal
          text={feedbackState.text}
          className={feedbackState.className}
          timeOutFunc={() => setFeedbackState(null)}
        />
      )}
    </Wrapper>
  )
}
