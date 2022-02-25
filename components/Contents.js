import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './button/Button'

export default function Contents({ data, onDataChange, onDataDelete }) {
  const [text, setText] = useState(data.memo)
  const memoChange = (e) => {
    setText(e.target.value)
  }

  return (
    <Wrapper>
      <h1>{data.name}</h1>
      <p>{data.addr}</p>
      <p>{data.tel}</p>
      <form>
        <span>메모</span>
        <textarea value={text} onChange={memoChange} />

        <BtnWrap>
          <Button
            bgColor="#6B7B56"
            width="147"
            height="36"
            onClick={() => {
              onDataChange(data.id, text)
            }}
            className={text ? '' : 'disabled'}
          >
            수정
          </Button>
          <Button
            bgColor="#B85656"
            width="142"
            height="36"
            onClick={() => onDataDelete(data.id)}
          >
            삭제
          </Button>
        </BtnWrap>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  font-family: Roboto;
  h1 {
    font-size: 20px;
    line-height: 23px;
    line-height: 100%;
    color: #000000;
    margin-bottom: 8px;
    font-weight: normal;
  }
  p {
    font-size: 12px;
    line-height: 14px;
    line-height: 100%;
    color: #000000;
    margin-bottom: 7px;
  }
  span {
    margin-top: 6px;
    font-size: 12px;
  }
  textarea {
    margin-top: 10px;
    margin-bottom: 10px;

    width: 100%;
    padding: 10px;
    max-width: 100%;
    min-height: 104px;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid white;

    resize: none; /* 사용자 임의 변경 불가 */
  }
`

const BtnWrap = styled.div`
  display: flex;
  width: 100%;
  button {
    /* width: 49%; */
    margin-left: auto;
  }
`
