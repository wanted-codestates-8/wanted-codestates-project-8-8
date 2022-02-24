import { useState } from 'react'
import styled from 'styled-components'

const SearchBar = ({ value, onChange, tag, onTagChange }) => {
  const searchMethods = ['이름', '주소', '메모']

  return (
    <Section>
      <Form>
        <Input
          placeholder="저장 목록 검색하기"
          onChange={onChange}
          value={value}
        ></Input>
      </Form>
      <TagLists>
        {searchMethods.map((list, index) => (
          <Tag
            key={index}
            onClick={() => onTagChange(index)}
            style={{
              backgroundColor: tag === index ? '#6B7B56' : 'whitesmoke',
              color: tag === index ? 'whitesmoke' : 'black',
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
  margin-left: 20px;
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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
