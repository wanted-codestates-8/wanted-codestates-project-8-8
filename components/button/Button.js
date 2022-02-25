import React from 'react'
import styled from 'styled-components'

export default function Button({
  fullWidth,
  children,
  bgColor,
  width,
  height,
  onClick,
}) {
  return (
    <Btn
      onClick={onClick}
      type="button"
      fullWidth={fullWidth}
      bgColor={bgColor}
      width={width}
      height={height}
    >
      {children}
    </Btn>
  )
}

const Btn = styled.button`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  ${({ width }) => `width: ${width}px;`}
  ${({ height }) => `height: ${height}px;`}
  ${({ bgColor }) =>
    bgColor ? `background-color: ${bgColor}` : `background-color: white`}
  ${({ fullWidth }) => (fullWidth ? `width : 100%;` : ``)}
`
