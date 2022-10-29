import BaseModal from './Base'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import modalState from 'atoms/modal'

const Container = styled.div`
  text-align: center;
  color: red;
`

function ErrorModal({ onClose }: { onClose: () => void }) {
  const modal = useRecoilValue(modalState)
  const { error } = modal.state
  console.log('state', modal.state)
  return (
    <BaseModal onClose={onClose}>
      <Container>
        <p>Error: {error}</p>
      </Container>
    </BaseModal>
  )
}

export default ErrorModal
