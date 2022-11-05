import BaseModal from './Base'
import styled from 'styled-components'
import Loader from 'components/ui/Loader'

const Container = styled.div`
  text-align: center;
`

function PleaseWaitModal({ onClose }: { onClose: () => void }) {
  return (
    <BaseModal onClose={onClose}>
      <Container>
        <p>Doing blockchain things right now.</p>
        <p>Please wait while we get this puppy deployed on Algorand</p>
        <Loader />
      </Container>
    </BaseModal>
  )
}

export default PleaseWaitModal
