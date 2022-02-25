import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import useSWRInfinite from 'swr/infinite'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import Modal from '../components/modal/Modal'
import FeedbackModal from '../components/modal/FeebackModal'
import Item from '../components/item/Item'

const Main = styled.main`
  margin: auto;
  width: 360px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`

const Containter = styled.section`
  width: 360px;
  height: 100vh;
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
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
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

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Spinner = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.primary};

  animation: 0.8s ease-in-out infinite spin;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

function Index() {
  const [pubMapList, setPubMapList] = useState([])
  const [modalIdx, setModalIdx] = useState(null)
  const [memo, setMemo] = useState('')
  const [alarm, setAlarm] = useState(false)
  const [isLoading, setLoading] = useState(true)

  const closeModal = () => {
    setModalIdx(null)
  }

  // fetch data through proxy
  const getKey = (i, d) => (d && !d.length ? null : String(i + 1))
  const fetcher = (n) =>
    axios.get(`/api/pubMapForest?n=${n}`).then((res) => res.data)
  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher, {
    revalidateFirstPage: false,
  })

  // initialize observer
  const observer = useRef()
  const [target, setTarget] = useState('init')
  const update = (entries) => {
    if (entries[0].intersectionRatio === 0) return
    observer.current.disconnect()
    setTarget(entries[0].target.textContent)
  }
  useEffect(() => {
    observer.current = new IntersectionObserver(update, {
      root: document.getElementById('list-wrapper'),
    })
  }, [])

  // fetch next page when observe target has changed
  useEffect(() => {
    if (target === 'init') return
    setSize(size + 1)
    setLoading(true)
  }, [target])

  // observe last list item when items updated
  useEffect(() => {
    if (isLoading) return
    const wrapper = document.getElementById('pub-map-list')
    observer.current.observe(wrapper.lastChild)
  }, [isLoading])

  useEffect(async () => {
    if (!data) return
    if (error) {
      console.error(error)
      return
    }

    const searchResult = [].concat(...data).map((e) => ({
      id: e.id,
      name: e.name,
      addr: e.addr,
      tel: e.tel,
      memo: '',
    }))
    setPubMapList(searchResult)
    setLoading(false)
  }, [data, error])

  function onHandleModalOpen(i) {
    setModalIdx(i)
  }

  function onHandlePubSave(data) {
    if (!memo) {
      setAlarm({ text: '메모를 입력해주세요', className: 'warning' })
      return
    }

    const pubSaveList = JSON.parse(localStorage.getItem('dataList')) || []
    pubSaveList.push(data)

    localStorage.setItem('dataList', JSON.stringify(pubSaveList))
    setMemo('')
    setModalIdx(null)
    setAlarm({
      text: '저장이 완료되었습니다',
      className: '',
    })
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

        <PubMapList id="pub-map-list">
          {pubMapList?.map((pub) => (
            <React.Fragment key={pub.id}>
              <Item data={pub} onClick={() => onHandleModalOpen(pub.id)}></Item>

              {modalIdx === pub.id && (
                <Modal onClose={closeModal}>
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
                      onClick={() => {
                        onHandlePubSave({
                          id: pub.id,
                          name: pub.name,
                          addr: pub.addr,
                          tel: pub.tel,
                          memo,
                        })
                      }}
                    >
                      저장하기
                    </button>
                  </PubModalContent>
                </Modal>
              )}
            </React.Fragment>
          ))}
          {isLoading && (
            <>
              <SpinnerWrapper>
                <Spinner />
              </SpinnerWrapper>
            </>
          )}
        </PubMapList>

        {/* alram */}
        {alarm && (
          <FeedbackModal
            text={alarm.text}
            className={alarm.className}
            timeOutFunc={() => setAlarm(null)}
          />
        )}
      </Containter>
    </Main>
  )
}

export default Index
