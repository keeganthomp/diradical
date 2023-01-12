import BaseModal from './Base'
import styled from 'styled-components'
import useModal from 'hooks/useModal'
import { Button } from 'components/ui/Buttons'
import { useRouter } from 'next/router'

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const GoToSeasonButton = styled(Button)`
  width: 12rem;
  margin-top: 1rem;
`

function ErrorModal() {
  const { error, closeModal } = useModal()
  const router = useRouter()
  const hasSeasonExpired = error === 'Start the new Season first!'

  const handleGoToSeason = () => {
    router.push('/season')
    closeModal()
  }

  return (
    <BaseModal>
      <Container>
        <p>{error}</p>
        {hasSeasonExpired && (
          <GoToSeasonButton onClick={handleGoToSeason}>
            Start New Season
          </GoToSeasonButton>
        )}
      </Container>
    </BaseModal>
  )
}

export default ErrorModal
