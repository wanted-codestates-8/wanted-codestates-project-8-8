import styled from 'styled-components'
import SearchBar from '../components/SearchBar'
import ItemGroup from '../components/item/ItemGroup'
import { useState } from 'react/cjs/react.development'

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
  {
    id: 5,
    name: '충주 휴양림',
    addr: '가나다',
    memo: '추운날',
    tel: '000',
  },
  {
    id: 6,
    name: '아주 휴양림',
    addr: '라마다',
    memo: '더운날',
    tel: '000',
  },
  {
    id: 7,
    name: '가주 휴양림',
    addr: '우우우',
    memo: '아이가 좋아해요',
    tel: '000',
  },
  {
    id: 8,
    name: '나주 휴양림',
    addr: '오오오',
    memo: '친구가 좋아해요',
    tel: '000',
  },
]

const TAG_DATA = ['name', 'addr', 'memo']

export default function Home() {
  const [data, setData] = useState(tempList)
  const [searchResult, setSearchResult] = useState('')
  const [currentTag, setCurrentTag] = useState(0)

  const handleSearchResult = (e) => {
    const tagState = TAG_DATA[currentTag]
    const value = e.target.value
    const lists = tempList.filter((list) => list[tagState].includes(value))

    setSearchResult(value)
    setData(lists)
  }

  return (
    <Wrapper>
      <SearchBar
        value={searchResult}
        onChange={handleSearchResult}
        tag={currentTag}
        onTagChange={(idx) => setCurrentTag(idx)}
      />
      <ItemGroup itemList={data} />
    </Wrapper>
  )
}

export default Index
