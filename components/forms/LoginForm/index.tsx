import { useForm } from 'react-hook-form'
import React from 'react'
import styled from 'styled-components'
import { Button } from 'components/ui/Buttons'
import Loader from 'components/ui/Loader'
import TextInput from 'components/ui/Inputs/TextInput'
import useWallet from 'hooks/useWallet'
import { MdOutlineEmail } from 'react-icons/md'
import GoogleLoginButton from './GoogleLoginButton'
import GithubLoginButton from './GithubLoginButton'
import Form from '../Form'

const SubmitButton = styled(Button)`
  width: 100%;
`
const Container = styled.div``

const LoginWithEmailForm = styled(Form)`
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

const SocialLoginContainer = styled.div`
  padding-top: 1.25rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
  width: 100%;
`
const EmailIcon = styled(MdOutlineEmail)`
  margin-right: 0.5rem;
`

export function UploadForm() {
  const { authenticate, isAuthenticating } = useWallet()
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
    <Container>
      <LoginWithEmailForm onSubmit={handleSubmit(handleAuthentication)}>
        <Field>
          <TextInput
            {...register('email', {
              required: true,
            })}
            placeholder='Email'
            disabled={formState.isSubmitting || isAuthenticating}
          />
        </Field>
        <SubmitButton
          disabled={
            !formState.isValid || formState.isSubmitting || isAuthenticating
          }
          type='submit'
        >
          {formState.isSubmitting ? (
            <Loader size={20} color='#000' />
          ) : (
            <>
              <EmailIcon /> Login with email
            </>
          )}
        </SubmitButton>
      </LoginWithEmailForm>
      <SocialLoginContainer>
        <GoogleLoginButton disabled={isAuthenticating} />
        <GithubLoginButton disabled={isAuthenticating} />
      </SocialLoginContainer>
    </Container>
  )
}

export default UploadForm
