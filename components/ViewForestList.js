import { useEffect, useRef, useState } from 'react'
import useSWRInfinite from 'swr/infinite'
import axios from 'axios'
import styled from 'styled-components'
// import Item from './Item'

const ListWrapper = styled.article`
  width: 100%;
  height: 100%;
  overflow: scroll;
`

const ListItem = styled.div`
  width: 340px;
  height: 100px;
  margin: 8px auto;
  background-color: white;
`

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Spinner = styled.div`
  width: 25px;
  height: 25px;
  background-color: aliceblue;

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

const ViewForestList = () => {
  // state for showing loading spinner
  const [isLoading, setLoading] = useState(true)

  // fetch data through proxy
  const getKey = (i, d) => (d && !d.length ? null : String(i + 1))
  const fetcher = (n) =>
    axios.get(`/api/pubMapForest?n=${n}`).then((v) => v.data)
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher, {
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
      threshold: 1.0,
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
    if (!data) return
    setLoading(false)
  }, [data])
  useEffect(() => {
    if (isLoading) return
    const wrapper = document.getElementById('list-wrapper')
    observer.current.observe(wrapper.lastChild)
  }, [isLoading])

  // show fetched items' list
  const showList = () => {
    let key = 0
    let list = []

    for (const d of data) {
      for (const v of d) {
        list.push(
          <ListItem key={key}>
            {key + 1}. {v.name}
          </ListItem>
        )
        key += 1
      }
    }

    return list
  }

  if (!data)
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    )
  return (
    <ListWrapper id="list-wrapper">
      {showList()}
      {isLoading && (
        <>
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        </>
      )}
    </ListWrapper>
  )
}

export default ViewForestList
