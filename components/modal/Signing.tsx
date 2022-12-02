import BaseModal from './Base'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`
const Image = styled.img`
  width: 20rem;
`

function SigningModal() {
  return (
    <BaseModal>
      <Container>
        <Image src='/images/signing.svg' />
        <p>You will be prompted for a signing momentarily</p>
      </Container>
    </BaseModal>
  )
}

export default SigningModal
