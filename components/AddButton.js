import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const ImageWrapper = styled.div`
  margin: 20px auto;
  width: fit-content;

  &:hover {
    cursor: pointer;
  }
`

export default function AddButton({ href, src, width, height }) {
  return (
    <ImageWrapper>
      <Link href={href}>
        <a>
          <Image src={src} width={width} height={height} />
        </a>
      </Link>
    </ImageWrapper>
  )
}
