import BaseModal from './Base'
import PurchaseSharesForm from 'components/forms/PurchaseOwnershipForm'
import { TrackWithVotes } from 'types'

function PurchaseOwnership({
  onClose,
  track,
}: {
  onClose: () => void
  track: TrackWithVotes
}) {
  return (
    <BaseModal onClose={onClose}>
      <PurchaseSharesForm track={track} onSubmit={onClose} />
    </BaseModal>
  )
}

export default PurchaseOwnership
