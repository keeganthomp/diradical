import BaseModal from './Base'
import PurchaseSharesForm from 'components/forms/PurchaseOwnershipForm'
import { TrackWithArtist } from 'types'

function MakeSongAvailableModal({
  onClose,
  track,
}: {
  onClose: () => void
  track: TrackWithArtist
}) {
  return (
    <BaseModal onClose={onClose}>
      <PurchaseSharesForm track={track} onSubmit={onClose} />
    </BaseModal>
  )
}

export default MakeSongAvailableModal
