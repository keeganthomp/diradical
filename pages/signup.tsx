import styled from 'styled-components'
import React from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import useApi from 'hooks/useApi'
import TextInput from 'components/ui/Inputs/TextInput'
import { Button } from 'components/ui/Buttons'
import { signIn } from 'next-auth/react'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 2rem;
`

const CredentialForm = styled.form`
  display: grid;
  justify-items: center;
  row-gap: 1.25rem;
  width: 14rem;
`
const SignupSubmitBtn = styled(Button)`
  height: 2rem;
  width: 100%;
`
const SigninText = styled.p`
  font-size: 14px;
  padding-top: 5px;
`
const SigninLink = styled.a`
  color: ${({ theme }) => theme.colors.main};
  &:visited {
    color: ${({ theme }) => theme.colors.main};
  }
`

export default function SignupPage() {
  const { registerUser } = useApi()
  const router = useRouter()
  const { register, handleSubmit, formState } = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
  })
  const signup = async ({ email, username, password }) => {
    try {
      await registerUser(email, username, password)
      const res = await signIn('credentials', {
        redirect: false,
        username,
        password,
        callbackUrl: '/',
      })
      if (res.error) {
        console.log('error', res.error)
      } else {
        router.push('/listen')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Wrapper>
      <Title>Signup</Title>
      <CredentialForm onSubmit={handleSubmit(signup)}>
        <TextInput
          placeholder='Email'
          {...register('email', {
            required: true,
          })}
        />
        <TextInput
          placeholder='Username'
          {...register('username', {
            required: true,
          })}
        />
        <TextInput
          placeholder='Password'
          type='password'
          {...register('password', {
            required: true,
          })}
        />
        <SignupSubmitBtn
          disabled={!formState.isValid || formState.isSubmitting}
          type='submit'
        >
          Signup
        </SignupSubmitBtn>
      </CredentialForm>
      <SigninText>
        Already have an account? <SigninLink href='/signin'>Sign In</SigninLink>
      </SigninText>
    </Wrapper>
  )
}
