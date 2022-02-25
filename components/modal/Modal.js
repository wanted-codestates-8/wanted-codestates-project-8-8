import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Backdrop = (props) => {
  return <ModalBackDrop onClick={props.onClose} />
}

function Modal(props) {
  return (
    <>
      {typeof window !== 'undefined' &&
        ReactDOM.createPortal(
          <Backdrop onClose={props.onClose} />,
          document.getElementById('back-drop')
        )}
      {typeof window !== 'undefined' &&
        ReactDOM.createPortal(
          <Content>{props.children}</Content>,
          document.getElementById('modal')
        )}
    </>
  )
}
export default Modal
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

const ModalBackDrop = styled.div`
  background: rgba(0, 0, 0, 0.29);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`
