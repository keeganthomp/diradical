import BaseModal from './Base'
import PurchaseSharesForm from 'components/forms/PurchaseSharesForm'
import { Track } from '@prisma/client'

function MakeSongAvailableModal({
  onClose,
  track,
}: {
  onClose: () => void
  track: Track
}) {
  return (
    <BaseModal onClose={onClose}>
      <PurchaseSharesForm track={track} />
    </BaseModal>
  )
}

export default MakeSongAvailableModal
