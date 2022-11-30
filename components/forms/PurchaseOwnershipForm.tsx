import { useForm } from 'react-hook-form'
import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Button from 'components/ui/Buttons/Base'
import { TrackWithVotes } from 'types'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Meta = styled.div`
  text-align: center;
  position: relative;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin: 0;
  }
`

const NumberInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid #acacacb8;
  color: #fff;
  text-align: center;
  padding: 3px 6px;
  font-size: 1rem;
  border-radius: 0px;
  width: 12rem;
  outline: none;
  &:focus,
  &:active {
    outline: none;
  }
`

const SubmitButton = styled(Button)`
  width: 100%;
`

const ModalTitle = styled.h3`
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;
`

const HelpText = styled.div`
  font-style: italic;
  font-size: 12px;
  font-weight: 200;
  color: lightgray;
  padding: 10px 0;
  text-align: center;
  p {
    margin: 0;
  }
`

const CoverArt = styled.img`
  max-height: 4rem;
  max-width: 3.5rem;
  border-radius: 5px;
`

export function PurchaseSharesForm({
  track,
  onSubmit,
}: {
  track: TrackWithVotes
  onSubmit?: () => void
}) {
  const { register, handleSubmit, formState, watch } = useForm({
    mode: 'all',
    defaultValues: {
      percentToPurchase: null as number,
    },
  })

  const purchaseShares = async (data) => {
    try {
      await axios.post(`/api/tracks/${track.id}/purchase-shares`, data)
      if (onSubmit) onSubmit()
    } catch (err) {
      console.error('Error purchasing shares', err)
    }
  }

  const amtToPurchase = watch('percentToPurchase')
  // check that there is an amount and is a valid number
  const isValidAmount = Boolean(amtToPurchase && !isNaN(amtToPurchase))

  return (
    <Container>
      <ModalTitle>Purchase Ownership</ModalTitle>
      <CoverArt src={track.coverArt} />
      <SubmitButton
        disabled={!formState.isValid || formState.isSubmitting}
        type='submit'
      >
        Purchase
      </SubmitButton>
    </Container>
  )
}

export default PurchaseSharesForm
