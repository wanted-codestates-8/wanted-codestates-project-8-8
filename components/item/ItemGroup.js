import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Item from './Item'
import { SpinnerWrapper, Snipper } from '../../pages/list'

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  height: calc(100vh - 200px);
  overflow: auto;
`

const ItemContainer = styled.section`
  & + & {
    margin-top: 15px;
  }
`

export default function ItemList({ itemList, onClick }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <ItemWrapper>
        {itemList && itemList.length > 0 ? (
          loading ? (
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          ) : (
            itemList.map((data, index) => (
              <ItemContainer key={index}>
                <Item data={data} onClick={() => onClick(data)} />
              </ItemContainer>
            ))
          )
        ) : (
          <span>저장된 목록이 없습니다.</span>
        )}
      </ItemWrapper>
    </>
  )
}
