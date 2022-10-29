import { useForm } from 'react-hook-form'
import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Button from 'components/ui/Buttons/Base'
import Form from './Form'
import { TrackWithArtist } from 'types'
import useContractViews from 'hooks/useCtcViews'
import Loader from 'components/ui/Loader'
import stdlib from 'lib/reach'
import useWalletBalance from 'hooks/useWalletBalance'

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

const Label = styled.p`
  font-weight: 200;
  margin: 0;
`

const Field = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  text-align: center;
`

const ModalTitle = styled.h3`
  font-weight: 400;
  margin: 0;
`

const Error = styled.p`
  color: red;
  font-size: 14px;
  font-weight: 200;
  margin: 0;
  margin-bottom: 1rem;
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

const Title = styled.p`
  font-weight: bold;
`
const Artist = styled.p`
  font-weight: 200;
  position: relative;
  bottom: 8px;
`

export function PurchaseSharesForm({
  track,
  onSubmit,
}: {
  track: TrackWithArtist
  onSubmit?: () => void
}) {
  const { isFetching: isFetchingWalletBalance, balance } = useWalletBalance()
  const { views, isFetching: isFetchingViews } = useContractViews(
    track.contractAddress,
  )
  const { register, handleSubmit, formState, watch } = useForm({
    mode: 'all',
    defaultValues: {
      tokenAmtToPurchase: null as number,
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

  const amtToPurchase = watch('tokenAmtToPurchase')
  const totalAvailablePercent =
    views &&
    ((views.tokensAvailable / views.totalTokenAllocation) * 100).toFixed(2)
  const purchasePercent =
    views && ((amtToPurchase / views.totalTokenAllocation) * 100).toFixed(2)

  // check that there is an amount and is a valid number
  const isValidAmount = Boolean(amtToPurchase && !isNaN(amtToPurchase))
  const totalCost = views
    ? Number(stdlib.formatCurrency(stdlib.bigNumberify(views.tokenPrice), 6)) *
      amtToPurchase
    : 0
  const hasEnoughBalance = isValidAmount ? totalCost < balance : true

  return (
    <Container>
      <ModalTitle>Purchase Ownership</ModalTitle>
      {isFetchingViews || isFetchingWalletBalance || !views ? (
        <Loader />
      ) : (
        <>
          <Meta>
            <CoverArt src={track.coverArt} />
            <div>
              <Title>{track.title}</Title>
              <Artist>{track.artist.username || track.artist.email}</Artist>
              <p>
                You will spend{' '}
                {!amtToPurchase
                  ? 0
                  : parseFloat(totalCost.toFixed(6).toString())}{' '}
                Algos
              </p>
            </div>
          </Meta>
          <Form onSubmit={handleSubmit(purchaseShares)}>
            <Field>
              <Label>amount of tokens to purchase</Label>
              <NumberInput
                {...register('tokenAmtToPurchase', {
                  disabled: formState.isSubmitting,
                  required: true,
                  valueAsNumber: true,
                  min: 1,
                  max: {
                    value: views.tokensAvailable,
                    message: `can not purchase more than allocated amount`,
                  },
                })}
                type='number'
                min='0'
                placeholder='0'
              />
            </Field>
            <HelpText>
              {!hasEnoughBalance && <Error>Not Enough Algo</Error>}
              {isValidAmount && (
                <p>
                  {amtToPurchase} Tokens ={' '}
                  {purchasePercent === '0.00' ? '<0.01' : purchasePercent}%
                  ownership
                </p>
              )}
              <p>
                Max available: {views.tokensAvailable} ({totalAvailablePercent}
                %)
              </p>
            </HelpText>
            {formState.errors.tokenAmtToPurchase?.message && (
              <Error>{formState.errors.tokenAmtToPurchase?.message}</Error>
            )}
            <SubmitButton
              disabled={
                !formState.isValid ||
                formState.isSubmitting ||
                !hasEnoughBalance
              }
              type='submit'
            >
              Purchase
            </SubmitButton>
          </Form>
        </>
      )}
    </Container>
  )
}

export default PurchaseSharesForm
