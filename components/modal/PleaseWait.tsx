import BaseModal from './Base'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

function PleaseWaitModal({ onClose }: { onClose: () => void }) {
  return (
    <BaseModal onClose={onClose}>
      <Container>
        <p>Doing blockchain things right now.</p>
        <p>Please wait while we get this puppy deployed on Algorand</p>
      </Container>
    </BaseModal>
  )
}

export default PleaseWaitModal
