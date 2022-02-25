import Image from 'next/image'
import { useState } from 'react'
import Modal from '../modal/Modal'
import styled from 'styled-components'
import Item from './Item'
import Link from 'next/link'
import Contents from '../Contents'

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  height: calc(100vh - 200px);
  // max-height: 740px;
  overflow: auto;
`

const ItemContainer = styled.section`
  & + & {
    margin-top: 15px;
  }
`

export default function ItemList({ itemList }) {
  const [activedData, setActivedData] = useState(null)
  const [close, setClose] = useState(true)

  const closeModal = () => {
    setActivedData(null)
  }
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
      {close && activedData && (
        <Modal onClose={closeModal}>
          <Contents
            id={activedData.id}
            name={activedData.name}
            addr={activedData.addr}
            tel={activedData.tel}
            memo={activedData.memo}
          />
        </Modal>
      )}
    </>
  )
}
