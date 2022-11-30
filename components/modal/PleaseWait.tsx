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
        <Loader />
      </Container>
    </BaseModal>
  )
}

export default PleaseWaitModal
