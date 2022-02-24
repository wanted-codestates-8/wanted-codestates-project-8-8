import React from 'react'
import styled from 'styled-components'
import Button from './button/Button'
export default function Contents() {
  return (
    <Wrapper>
      <h1>속리산 숲 휴양마을</h1>
      <p>충청북도 어디 어디</p>
      <p>000-0000-0000</p>
      <form>
        <span>메모</span>
        <textarea />

        <BtnWrap>
          <Button bgColor="#B85656" width="147" height="36">
            수정
          </Button>
          <Button bgColor="#6B7B56" width="142" height="36">
            삭제
          </Button>
          {/* <Button fullWidth>저장</Button> */}
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
