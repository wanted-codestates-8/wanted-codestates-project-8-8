import styled from 'styled-components'
import SearchBar from '../components/SearchBar'
import ItemGroup from '../components/item/ItemGroup'

const Wrapper = styled.div`
  margin: auto;
  width: 360px;
  height: 900px;

  background-color: white;
`

const tempList = [
  {
    id: 1,
    name: '계명산자연휴양림',
    addr: '충청북도 충주시 충주호수로 1170 (종민동)',
    tel: '043-840-7930',
    memo: '역시 계명산!',
  },
  {
    id: 2,
    name: '계명산자연휴양림',
    addr: '충청북도 충주시 충주호수로 1170 (종민동)',
    tel: '043-840-7930',
    memo: '역시 계명산!',
  },
  {
    id: 3,
    name: '2',
    addr: '충청북도 충주시 충주호수로 1170 (종민동)',
    tel: '043-840-7930',
    memo: '역시 계명산!',
  },
  {
    id: 4,
    name: '3',
    addr: '충청북도 충주시 충주호수로 1170 (종민동)',
    tel: '043-840-7930',
    memo: '역시 계명산!',
  },
]

export default function Home() {
  return (
    <Wrapper>
      <SearchBar />
      <ItemGroup itemList={tempList} />
    </Wrapper>
  )
}
