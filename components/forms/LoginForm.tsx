import { useForm } from 'react-hook-form'
import React from 'react'
import styled from 'styled-components'
import { Button } from 'components/ui/Buttons'
import Loader from 'components/ui/Loader'
import TextInput from 'components/ui/Inputs/TextInput'
import { useRouter } from 'next/router'
import useWallet from 'hooks/useWallet'
import Form from './Form'

const SubmitButton = styled(Button)`
  width: 100%;
`

const LoginForm = styled(Form)`
  width: 14rem;
  height: 100%;
`

const Field = styled.div`
  position: relative;
  margin-bottom: 0.25rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Error = styled.p`
  color: red;
  padding: 0.5rem 0;
`

export function UploadForm() {
  const { authenticate } = useWallet()
  const [loginError, setLoginError] = React.useState('')
  const { register, handleSubmit, formState } = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
    },
  })

  const handleAuthentication = async (data) => {
    setLoginError('')
    try {
      await authenticate({ email: data.email })
    } catch (error) {
      setLoginError(error.message)
    }
  }

  return (
    <LoginForm onSubmit={handleSubmit(handleAuthentication)}>
      <Field>
        <TextInput
          {...register('email', {
            required: true,
          })}
          placeholder='Email'
          disabled={formState.isSubmitting}
        />
      </Field>
      <Field></Field>
      <SubmitButton
        disabled={!formState.isValid || formState.isSubmitting}
        type='submit'
      >
        {formState.isSubmitting ? <Loader size={20} color='#000' /> : 'Login'}
      </SubmitButton>
    </LoginForm>
  )
}

export default UploadForm
