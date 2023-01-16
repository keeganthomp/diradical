import BaseModal from 'components/ui/Modal/Base'
import styled from 'styled-components'
import useModal from 'hooks/useModal'

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
