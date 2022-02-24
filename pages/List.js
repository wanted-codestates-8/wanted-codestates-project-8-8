import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import useSWR from 'swr'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import Modal from '../components/modal/Modal'
import FeedbackModal from '../components/modal/FeebackModal'
import Item from '../components/item/Item'

const Main = styled.main`
  width: 100%;
  height: 100vh;
  /* min-height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`

const Containter = styled.section`
  width: 360px;
  height: 800px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem 2rem;
  position: relative;
  overflow-x: hidden;
`

const PubMapHeader = styled.div`
  width: 100%;
  & a {
    width: 30px;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
      transform: translateX(-1px);
    }
  }
`

const PubMapList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
`

const PubMapItem = styled.li`
  width: 100%;
  height: 100px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  & h2 {
    font-size: 1.5rem;
  }

  & .address {
    font-size: 1.3rem;
  }

  & .tel {
    font-size: 1.3rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray2};
  }
`

const PubModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.black};
  gap: 0.5rem;

  & h2 {
    font-size: 1.8rem;
  }

  & .address,
  .tel {
    font-size: 1.3rem;
  }

  & textarea {
    resize: none;
    height: 100%;
    margin-top: 1rem;
    padding: 1rem;
    font-size: 1.5rem;

    &:focus,
    &.active {
      outline: none;
    }
  }

  & button.save-btn {
    height: 50%;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    margin-top: 1rem;

    transition: all 0.3s ease-in-out;

    &.disabled {
      background-color: ${({ theme }) => theme.colors.gray};
      color: lightgray;
      border: 1px solid ${({ theme }) => theme.colors.black};
    }
  }
`

function Index() {
  const [pubMapList, setPubMapList] = useState([])
  const [modalIdx, setModalIdx] = useState(null)
  const [memo, setMemo] = useState('')
  const [alarm, setAlarm] = useState(false)

  const { data, error } = useSWR(
    '/api/pubMapForest',
    async (url) => await axios.get(url).then((res) => res.data)
  )
  console.log(pubMapList, modalIdx)

  useEffect(async () => {
    if (error) {
      console.log(error)
      return
    }

    const searchResult = data?.data?.map((e) => ({
      id: e.id,
      name: e.fcNm,
      addr: e.fcAddr,
      tel: e.ref1,
      memo: '',
    }))
    setPubMapList(searchResult)
  }, [data, error])

  function onHandleModalOpen(i) {
    setModalIdx(i)
  }

  function onHandlePubSave(data) {
    if (!memo) {
      return
    }

    const pubSaveList = JSON.parse(localStorage.getItem('dataList')) || []
    pubSaveList.push(data)

    localStorage.setItem('dataList', JSON.stringify(pubSaveList))
    setMemo('')
    setModalIdx(null)
    setAlarm(true)

    setTimeout(() => {
      setAlarm(false)
    }, 2000)
  }

  function onHandleModalClose() {
    setModalIdx(null)
  }

  return (
    <Main>
      <Containter>
        <PubMapHeader>
          <Link href="/">
            <a>
              <Image
                src="/back.svg"
                width="8.5px"
                height="17.5px"
                alt="back-btn"
                fill="white"
              />
            </a>
          </Link>
        </PubMapHeader>

        <PubMapList>
          {pubMapList?.map((pub) => (
            <>
              <Item
                key={pub.id}
                data={pub}
                onClick={() => onHandleModalOpen(pub.id)}
              ></Item>

              {modalIdx === pub.id && (
                <Modal onClose={onHandleModalClose}>
                  <PubModalContent>
                    <h2 className="pubname">{pub.name}</h2>
                    <div className="address">{pub.addr}</div>
                    <div className="tel">{pub.tel}</div>
                    <textarea
                      value={memo}
                      onChange={(e) => {
                        setMemo(e.target.value)
                      }}
                    ></textarea>

                    <button
                      className={`save-btn${!memo ? ' disabled' : ''}`}
                      onClick={() =>
                        onHandlePubSave({
                          id: pub.id,
                          name: pub.name,
                          addr: pub.addr,
                          tel: pub.tel,
                          memo,
                        })
                      }
                    >
                      저장하기
                    </button>
                  </PubModalContent>
                </Modal>
              )}
            </>
          ))}
        </PubMapList>

        {/* alram */}
        {alarm && <FeedbackModal text={'저장이 완료되었습니다.'} />}
      </Containter>
    </Main>
  )
}

export default Index
