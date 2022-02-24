import styled from 'styled-components'
import SearchBar from '../components/SearchBar'
import Item from '../components/Item'
import Image from 'next/image'
import { useState } from 'react'
import LocalStorageComponent from '../components/LocalStorageComponent'

const Wrapper = styled.div`
  margin: auto;
  width: 360px;
  height: 900px;

  background-color: white;
`

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`

const ImageWrapper = styled.div`
  margin: 20px auto;
  width: fit-content;

  &:hover {
    cursor: pointer;
  }
`

const tempList = [
  {
    name: '계명산자연휴양림',
    addr: '충청북도 충주시 충주호수로 1170 (종민동)',
    tel: '043-840-7930',
  },
  {
    name: '계명산자연휴양림',
    addr: '충청북도 충주시 충주호수로 1170 (종민동)',
    tel: '043-840-7930',
  },
  {
    name: '계명산자연휴양림',
    addr: '충청북도 충주시 충주호수로 1170 (종민동)',
    tel: '043-840-7930',
    memo: '역시 계명산!',
  },
  {
    name: '계명산자연휴양림',
    addr: '충청북도 충주시 충주호수로 1170 (종민동)',
    tel: '043-840-7930',
  },
]

export default function Home() {
  const [modal, setModal] = useState(false)

  const onClick = () => {
    console.log('modal open!')
    setModal(true)
  }

  return (
    <>
      <Wrapper>
        <SearchBar></SearchBar>
        <ItemWrapper>
          {tempList.map((data, index) => (
            <Item key={index} data={data} onClick={onClick} />
          ))}
        </ItemWrapper>
        <ImageWrapper>
          <Image src="/add.png" width={'30'} height={'30'} />
        </ImageWrapper>
      </Wrapper>
      <LocalStorageComponent />
    </>
  )
}
