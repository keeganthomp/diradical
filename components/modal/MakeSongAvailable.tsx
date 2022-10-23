import BaseModal from './Base'
import MakeSongAvailableForm from 'components/forms/MakeSongAvailableForm'
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
      <MakeSongAvailableForm track={track} onSubmit={onClose} />
    </BaseModal>
  )
}

export default MakeSongAvailableModal
