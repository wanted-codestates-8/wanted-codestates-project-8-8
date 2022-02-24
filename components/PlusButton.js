import Link from 'next/link'
import styled from 'styled-components'

const ImageWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
  margin: 20px auto;
  width: fit-content;
  &:hover {
    cursor: pointer;
    opacity: 100%;
  }
  background-color: #6b7b56;
  opacity: 50%;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-size: 30px;
  color: whitesmoke;
  font-weight: 400;
`

export default function PlusButton({ href }) {
  return (
    <Link href={href}>
      <a>
        <ImageWrapper>+</ImageWrapper>
      </a>
    </Link>
  )
}
