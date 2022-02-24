import React from 'react'
import styled from 'styled-components'

const Toast = styled.div`
  width: 180px;
  height: 50px;
  background-color: green;
  position: absolute;
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
  transform: translateX(100%);

  @keyframes fade {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(0);
    }
  }

  &.warning {
    background-color: ${({ theme }) => theme.colors.warning};
  }
`

const FeedbackModal = ({ text, className }) => {
  return (
    <>
      <Toast className={className}>{text}</Toast>
    </>
  )
}

export default FeedbackModal
