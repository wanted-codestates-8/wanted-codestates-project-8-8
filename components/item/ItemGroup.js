import Image from 'next/image'
import { useState } from 'react'
import Modal from '../modal/Modal'
import styled from 'styled-components'
import Item from './Item'
import Link from 'next/link'

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  max-height: 740px;
  overflow: auto;
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
    </>
  )
}
