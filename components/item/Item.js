import styled from 'styled-components'

const Box = styled.section`
  width: 310px;
  padding: 15px;
  background: #f5f5f5;
  border-radius: 10px;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: #e0e0e0;
  }
`

const Container = styled.div``

const Title = styled.p`
  padding-bottom: 5px;
  font-size: 20px;
`

const Detail = styled.p`
  font-size: 15px;
`

const Memo = styled.p`
  background-color: white;
  border-radius: 10px;
  padding: 5px 10px;
  margin-top: 10px;
`

const Item = ({ onClick, data }) => {
  return (
    <Box onClick={onClick}>
      <Container>
        <Title>{data.name}</Title>
        <Detail>{data.addr}</Detail>
        <Detail>{data.tel}</Detail>
        {data.memo && <Memo>{data.memo}</Memo>}
      </Container>
    </Box>
  )
}

export default Item
