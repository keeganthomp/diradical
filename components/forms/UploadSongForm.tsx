import { useForm } from 'react-hook-form'
import React from 'react'
import styled from 'styled-components'
import Button from 'components/ui/Buttons/Base'
import useUpload from 'hooks/useUpload'
import TextInput from '../ui/Inputs/TextInput'
import Form from './Form'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

const UploadButton = styled(Button)`
  width: 100%;
`

const ModalTitle = styled.h3`
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;
`
const Field = styled.div`
  position: relative;
  margin-bottom: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-weight: 200;
  text-transform: lowercase;
`

const Error = styled.p``

export function UploadForm({ onSubmit }: { onSubmit?: () => void }) {
  const { upload } = useUpload()
  const { register, handleSubmit, reset, formState, getValues } = useForm({
    mode: 'all',
    defaultValues: {
      title: '',
      audioFiles: [] as File[],
      artFiles: [] as File[],
    },
  })

  const uploadTrack = async (data) => {
    const songPayload = {
      title: data.title,
      artFile: data.artFiles[0],
      audioFile: data.audioFiles[0],
    }
    await upload(songPayload)
    reset()
    if (onSubmit) onSubmit()
  }

  return (
    <Container>
      <ModalTitle>upload a song</ModalTitle>
      <Form onSubmit={handleSubmit(uploadTrack)}>
        <Field>
          <Label>song sitle</Label>
          <TextInput
            {...register('title', {
              required: true,
            })}
            placeholder='rad song xxx'
            disabled={formState.isSubmitting}
          />
        </Field>
        <Field>
          <Label>Choose audio file</Label>
          <input
            name='audioFiles'
            type='file'
            accept='.mp3,.wav'
            {...register('audioFiles', {
              required: true,
            })}
            disabled={formState.isSubmitting}
          />
        </Field>
        <Field>
          <Label>Choose cover image</Label>
          <input
            name='coverArt'
            type='file'
            accept='image/*'
            {...register('artFiles', {
              required: true,
            })}
            disabled={formState.isSubmitting}
          />
        </Field>
        <UploadButton
          disabled={!formState.isValid || formState.isSubmitting}
          type='submit'
        >
          Submit
        </UploadButton>
      </Form>
    </Container>
  )
}

export default UploadForm
