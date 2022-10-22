import { useForm } from 'react-hook-form'
import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Button from 'components/ui/Buttons/Base'
import Form from './Form'
import { Track } from '@prisma/client'
import modalState, { ModalType } from 'atoms/modal'
import { useSetRecoilState } from 'recoil'
import { BsPercent } from 'react-icons/bs'

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
const PercentIcon = styled(BsPercent)`
  position: absolute;
  bottom: 5px;
  left: 0;
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

export function PurchaseSharesForm({ track }: { track: Track }) {
  const setModal = useSetRecoilState(modalState)
  const { register, handleSubmit, reset, formState } = useForm({
    mode: 'all',
    defaultValues: {
      sharesToPurchase: null as number,
    },
  })

  const hideModal = () => setModal({ type: ModalType.NONE, state: null })

  const purchaseShares = async (data) => {
    await axios.post(`/api/tracks/${track.id}/purchase-shares`, data)
    hideModal()
  }

  return (
    <Container>
      <ModalTitle>purchase ownership</ModalTitle>
      <Form onSubmit={handleSubmit(purchaseShares)}>
        <Field>
          <Label>Percent ownership</Label>
          <PercentIcon />
          <NumberInput
            {...register('sharesToPurchase', {
              required: true,
              pattern: {
                value: /\b([1-9]|[1-9][0-9]|100)\b/,
                message: 'shares must be between 1 and 100',
              },
            })}
            type='number'
            min='0'
            max='100'
            placeholder='0'
          />
          {formState.errors.sharesToPurchase?.message && (
            <Error>{formState.errors.sharesToPurchase?.message}</Error>
          )}
        </Field>
        <SubmitButton
          disabled={!formState.isValid || formState.isSubmitting}
          type='submit'
        >
          Purchase
        </SubmitButton>
      </Form>
    </Container>
  )
}

export default PurchaseSharesForm
