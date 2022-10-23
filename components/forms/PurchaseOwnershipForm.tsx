import { useForm } from 'react-hook-form'
import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Button from 'components/ui/Buttons/Base'
import Form from './Form'
import { Track } from '@prisma/client'
import useContractViews from 'hooks/useCtcViews'
import Loader from 'components/ui/Loader'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const NumberInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px dotted white;
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

const HelpText = styled.p`
  font-size: 12px;
  font-weight: 200;
  color: lightgray;
`

export function PurchaseSharesForm({
  track,
  onSubmit,
}: {
  track: Track
  onSubmit?: () => void
}) {
  const { views, isFetching } = useContractViews(track.contractAddress)
  const { register, handleSubmit, formState, watch } = useForm({
    mode: 'all',
    defaultValues: {
      tokenAmtToPurchase: null as number,
    },
  })

  const purchaseShares = async (data) => {
    await axios.post(`/api/tracks/${track.id}/purchase-shares`, data)
    if (onSubmit) onSubmit()
  }

  const amtToPurchase = watch('tokenAmtToPurchase')
  const totalAvailablePercent =
    views &&
    ((views.tokensAvailable / views.totalTokenAllocation) * 100).toFixed(2)
  const purchasePercent =
    views && ((amtToPurchase / views.tokensAvailable) * 100).toFixed(2)

  // check that there is an amount and is a valid number
  const isValidAmount = Boolean(amtToPurchase && !isNaN(amtToPurchase))

  return (
    <Container>
      <ModalTitle>Purchase Ownership</ModalTitle>
      {isFetching || !views ? (
        <Loader />
      ) : (
        <Form onSubmit={handleSubmit(purchaseShares)}>
          <Field>
            <Label>amount of tokens to purchase</Label>
            <NumberInput
              {...register('tokenAmtToPurchase', {
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
          {isValidAmount && (
            <HelpText>
              ~{purchasePercent}% of {totalAvailablePercent}% available
            </HelpText>
          )}
          <HelpText>Max available: {views.tokensAvailable}</HelpText>
          {formState.errors.tokenAmtToPurchase?.message && (
            <Error>{formState.errors.tokenAmtToPurchase?.message}</Error>
          )}
          <SubmitButton
            disabled={!formState.isValid || formState.isSubmitting}
            type='submit'
          >
            Purchase
          </SubmitButton>
        </Form>
      )}
    </Container>
  )
}

export default PurchaseSharesForm