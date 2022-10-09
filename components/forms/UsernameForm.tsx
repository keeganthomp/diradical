import { useForm } from 'react-hook-form'
import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import useRefresh from 'hooks/useRefresh'
import TextInput from '../ui/Inputs/TextInput'
import Form from './Form'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export function UsernameForm() {
  const refresh = useRefresh()
  const { register, handleSubmit, reset, formState } = useForm({
    mode: 'all',
    defaultValues: {
      username: '',
    },
  })

  const updateUsername = async (data) => {
    const payload = {
      username: data.username,
    }
    await axios.put('/api/user', payload)
    reset()
    refresh()
  }

  return (
    <Container>
      <h2>Create a username</h2>
      <Form onSubmit={handleSubmit(updateUsername)}>
        <TextInput
          {...register('username', {
            required: true,
          })}
          placeholder='Username'
        />
        <button
          disabled={!formState.isValid || formState.isSubmitting}
          type='submit'
        >
          Submit
        </button>
      </Form>
    </Container>
  )
}

export default UsernameForm
