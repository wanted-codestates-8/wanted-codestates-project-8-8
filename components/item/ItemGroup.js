import Image from 'next/image'
import { useState } from 'react'
import Modal from '../modal/Modal'
import styled from 'styled-components'
import Item from './Item'

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  height: calc(100vh - 200px);
  // max-height: 740px;
  overflow: auto;
`

const ImageWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
  margin: 20px auto;
  width: fit-content;
  &:hover {
    cursor: pointer;
    opacity: 100%;
  }
  background-color: #6b7b56;
  opacity: 50%;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-size: 30px;
  color: whitesmoke;
  font-weight: 400;
`

const ItemContainer = styled.section`
  & + & {
    margin-top: 15px;
  }
`

export default function ItemList({ itemList }) {
  const [activedData, setActivedData] = useState(null)

  return (
    <>
      <ItemWrapper>
        {itemList && itemList.length > 0 ? (
          itemList.map((data, index) => (
            <ItemContainer key={index}>
              <Item data={data} onClick={() => setActivedData(data)} />
            </ItemContainer>
          ))
        ) : (
          <span>저장된 목록이 없습니다.</span>
        )}
      </ItemWrapper>
      {activedData && <Modal>{activedData.name}</Modal>}
      <ImageWrapper>
        +{/* <Image src="/add.png" width={'40'} height={'40'} /> */}
      </ImageWrapper>
    </>
  )
}
