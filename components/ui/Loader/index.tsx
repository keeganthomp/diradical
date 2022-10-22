import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  text-align: center;
`

function Loader() {
  return (
    <Container>
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  )
}

export default Loader
