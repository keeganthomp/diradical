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

const Field = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  text-align: center;
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

const Label = styled.p`
  font-weight: 200;
`

const SubmitButton = styled(Button)`
  width: 100%;
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

const PercentIcon = styled(BsPercent)`
  position: absolute;
  bottom: 5px;
  left: 0;
`
const AlgoSymbol = styled.span`
  position: absolute;
  font-weight: 200;
  bottom: 2px;
  left: 0;
`

export function MakeSongAvailableForm({ track }: { track: Track }) {
  const setModal = useSetRecoilState(modalState)
  const { register, handleSubmit, setValue, formState, getValues } = useForm({
    mode: 'all',
    defaultValues: {
      percentAvailable: null as number,
      pricePerShare: null as number,
    },
  })

  const hideModal = () => setModal({ type: ModalType.NONE, state: null })

  const makeAvailable = async (data) => {
    await axios.post(`/api/tracks/${track.id}/make-available`, data)
    hideModal()
  }

  return (
    <Container>
      <ModalTitle>open to buyers</ModalTitle>
      <Form onSubmit={handleSubmit(makeAvailable)}>
        <Field>
          <Label>Percent to offer</Label>
          <PercentIcon />
          <NumberInput
            {...register('percentAvailable', {
              required: true,
              valueAsNumber: true,
              max: 100,
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
          {formState.errors.percentAvailable?.message && (
            <Error>{formState.errors.percentAvailable?.message}</Error>
          )}
        </Field>
        <Field>
          <Label>Price per %</Label>
          <AlgoSymbol>Algo</AlgoSymbol>
          <NumberInput
            {...register('pricePerShare', {
              valueAsNumber: true,
              required: true,
              pattern: {
                value: /^\d{0,10}(\.\d{0,2})?$/,
                message: 'price must be a positive number',
              },
            })}
            type='number'
            placeholder='0.000000'
          />
          {formState.errors.pricePerShare?.message && (
            <Error>{formState.errors.pricePerShare?.message}</Error>
          )}
        </Field>
        <SubmitButton
          disabled={!formState.isValid || formState.isSubmitting}
          type='submit'
        >
          Submit
        </SubmitButton>
      </Form>
    </Container>
  )
}

export default MakeSongAvailableForm
