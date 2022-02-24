import React from 'react';
import styled, { StyledComponent } from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 360px;
  height: 700px;
  background-color: lightblue;
  border-radius: 10px;
  text-align: center;
  margin: 100px;
  justify-content: flex-end;
`

const SavedToast = styled.div`
  width: 180px;
  height: 50px;
  background-color: green;
  position: relative;
  top: 70px;
  left: 180px;
  color: white;
  border-radius: 5px;
  text-align: left;
  padding-left: 17px;
  padding-top: 12px;

  animation-name: fade;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  @keyframes fade {
    0% {
      opacity: 0;
      transform: translate3d(0%, 0, 0);
    }
    50% {
      opacity: 1;
      transform: translateZ(0);
    }
    100% {
      opacity: 0;
    }
  }
`

const NoMemoToast = styled.div`
  display: none;

  width: 180px;
  height: 50px;
  background-color: red;
  position: relative;
  top: 70px;
  left: 180px;
  color: white;
  border-radius: 5px;
  text-align: left;
  padding-left: 27px;
  padding-top: 12px;

  animation-name: fade;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  @keyframes fade {
    0% {
      opacity: 0;
      transform: translate3d(0%, 0, 0);
    }
    50% {
      opacity: 1;
      transform: translateZ(0);
    }
    100% {
      opacity: 0;
    }
  }
`

const FeedbackModal = () => {
  return (
    <Wrapper>
      <Container>
        <SavedToast>저장이 완료되었습니다.</SavedToast>
        <NoMemoToast>메모를 입력해주세요.</NoMemoToast>
      </Container>
    </Wrapper>
  );
};

export default FeedbackModal;