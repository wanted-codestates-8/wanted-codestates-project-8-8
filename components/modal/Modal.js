import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import BackDrop from './BackDrop'

export default function Modal({ children }) {
  return (
    <>
      {typeof window !== 'undefined' &&
        ReactDOM.createPortal(
          <BackDrop />,
          document.getElementById('back-drop')
        )}
      {typeof window !== 'undefined' &&
        ReactDOM.createPortal(
          <Content>{children}</Content>,
          document.getElementById('modal')
        )}
    </>
  )
}

const Content = styled.div`
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px 23px 23px 24px;
  width: 340px;
  height: 298px;
  z-index: 100;
  position: fixed;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
