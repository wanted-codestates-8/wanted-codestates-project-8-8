import { useState } from 'react'
import styled from 'styled-components'

const data = [
  {
    name: '충주 휴양림',
    address: '가나다',
    memo: '추운날',
  },
  {
    name: '아주 휴양림',
    address: '라마다',
    memo: '더운날',
  },
  {
    name: '가주 휴양림',
    address: '우우우',
    memo: '아이가 좋아해요',
  },
  {
    name: '나주 휴양림',
    address: '오오오',
    memo: '친구가 좋아해요',
  },
]

const SearchBar = () => {
  const searchMethods = ['이름', '주소', '메모']
  const [currentTag, setCurrentTag] = useState(0)
  const [searchInput, setSearchInput] = useState('')

  const handleTag = (index) => {
    setCurrentTag(index)
    setSearchInput(' ')
  }

  const handleSearchResult = (e) => {
    const length = e.target.value.length
    const tagData = ['name', 'address', 'memo']
    const tagState = tagData[currentTag]
    const lists = data.filter(
      (list) =>
        list[tagState].toString().substring(0, length) === e.target.value
    )
    setSearchInput(e.target.value)

    console.log(lists)
  }

  return (
    <Section>
      <Form>
        <Input
          placeholder="저장 목록 검색하기"
          onChange={handleSearchResult}
          value={searchInput}
        ></Input>
      </Form>
      <TagLists>
        {searchMethods.map((list, index) => (
          <Tag
            key={index}
            onClick={() => handleTag(index)}
            style={{
              backgroundColor: currentTag === index ? '#6B7B56' : 'whitesmoke',
              color: currentTag === index ? 'whitesmoke' : 'black',
            }}
          >
            {list}
          </Tag>
        ))}
      </TagLists>
    </Section>
  )
}
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  width: 320px;
  height: 40px;
  padding-left: 20px;
  border-radius: 20px;
  border: solid 1px rgba(0, 0, 0, 0.3);
`
const TagLists = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const Tag = styled.li`
  margin: 10px 5px;
  text-align: center;
  padding: 0 10px 2px 10px;
  border-radius: 20px;
`
export default SearchBar
