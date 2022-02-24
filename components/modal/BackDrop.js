import React from 'react'
import styled from 'styled-components'

export default function BackDrop() {
  return <ModalBackDrop />
}

const ModalBackDrop = styled.div`
  background: rgba(0, 0, 0, 0.29);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0.33;
`
