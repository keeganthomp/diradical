import { useForm } from 'react-hook-form'
import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Button from 'components/ui/Buttons/Base'
import Form from './Form'
import { Track } from '@prisma/client'
import { BsPercent } from 'react-icons/bs'
import useContractViews from 'hooks/useCtcViews'
import Error from 'components/ui/Error'

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
  border-bottom: 1px solid white;
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
  text-transform: uppercase;
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

export function MakeSongAvailableForm({
  track,
  onSubmit,
}: {
  track: Track
  onSubmit: () => void
}) {
  const [error, setError] = React.useState<string | null>(null)
  const { views, refetch } = useContractViews(track.contractAddress)
  const { register, handleSubmit, formState } = useForm({
    mode: 'all',
    defaultValues: {
      percentToRetain: null as number,
      totalValue: null as number,
    },
  })

  const makeAvailable = async (data) => {
    try {
      const { percentToRetain } = data
      const amtToRetain = (percentToRetain / 100) * views.tokensAvailable
      const payload = {
        totalValue: data.totalValue * 1000000, // to Algo - only accepting whole algo values
        amtToRetain,
      }
      await axios.post(`/api/tracks/${track.id}/make-available`, payload)
      await refetch()
      if (onSubmit) onSubmit()
    } catch (err) {
      setError('Unable to make song available. Try refreshing the page.')
    }
  }

  return (
    <Container>
      <ModalTitle>open to buyers</ModalTitle>
      <Form onSubmit={handleSubmit(makeAvailable)}>
        <Field>
          <Label>Percent To retain</Label>
          <PercentIcon />
          <NumberInput
            {...register('percentToRetain', {
              required: true,
              valueAsNumber: true,
              min: 0,
              max: {
                value: 100,
                message: `Must be less than 100`,
              },
              disabled: formState.isSubmitting,
            })}
            type='number'
            min='0'
            max='100'
            placeholder='0'
          />
        </Field>
        {formState.errors.percentToRetain?.message && (
          <Error>{formState.errors.percentToRetain?.message}</Error>
        )}
        {error && <Error>{error}</Error>}
        <Field>
          <Label>Total Value</Label>
          <AlgoSymbol>Algo</AlgoSymbol>
          <NumberInput
            {...register('totalValue', {
              valueAsNumber: true,
              required: true,
              pattern: {
                value: /^\d{0,10}(\.\d{0,2})?$/,
                message: 'price must be a positive number',
              },
              disabled: formState.isSubmitting,
            })}
            type='number'
            placeholder='0'
          />
        </Field>
        {formState.errors.totalValue?.message && (
          <Error>{formState.errors.totalValue?.message}</Error>
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

export default MakeSongAvailableForm
