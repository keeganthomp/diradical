import { useForm } from 'react-hook-form'
import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Button from 'components/ui/Buttons/Base'
import Form from './Form'
import { Track } from '@prisma/client'

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
  width: 12rem;
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
`

const Error = styled.p`
  color: red;
  font-size: 14px;
  font-weight: 200;
  margin: 0;
  margin-bottom: 1rem;
`

export function UsernameForm({ track }: { track: Track }) {
  const { register, handleSubmit, reset, formState } = useForm({
    mode: 'all',
    defaultValues: {
      sharesAvailable: null as number,
      pricePerShare: null as number,
    },
  })

  const updateUsername = async (data) => {
    await axios.post(`/api/tracks/${track.id}/make-available`, data)
  }

  return (
    <Container>
      <ModalTitle>open to buyers</ModalTitle>
      <Form onSubmit={handleSubmit(updateUsername)}>
        <NumberInput
          {...register('sharesAvailable', {
            required: true,
            pattern: {
              value: /\b([1-9]|[1-9][0-9]|100)\b/,
              message: 'shares must be between 1 and 100',
            },
          })}
          type='number'
          min='0'
          max='100'
          placeholder='Shares to offer'
        />
        {formState.errors.sharesAvailable?.message && (
          <Error>{formState.errors.sharesAvailable?.message}</Error>
        )}
        <NumberInput
          {...register('pricePerShare', {
            required: true,
            pattern: {
              value: /^\d{0,10}(\.\d{0,2})?$/,
              message: 'price must be a positive number',
            },
          })}
          type='number'
          min='0'
          max='100'
          placeholder='Price per share (mAlgo)'
        />
        {formState.errors.pricePerShare?.message && (
          <Error>{formState.errors.pricePerShare?.message}</Error>
        )}
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

export default UsernameForm
