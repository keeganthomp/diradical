import BaseModal from './Base'
import styled from 'styled-components'
import useModal from 'hooks/useModal'

const Container = styled.div`
  text-align: center;
`

function ErrorModal() {
  const { error } = useModal()
  return (
    <BaseModal>
      <Container>
        <p>{error}</p>
      </Container>
    </BaseModal>
  )
}

export default ErrorModal
