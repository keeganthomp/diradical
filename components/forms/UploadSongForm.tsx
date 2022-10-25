import { useForm } from 'react-hook-form'
import useS3 from 'hooks/useS3'
import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import Button from 'components/ui/Buttons/Base'
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
`
const Field = styled.div`
  position: relative;
  margin-bottom: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-weight: 100;
  text-transform: lowercase;
`

export function UploadForm({ onSubmit }: { onSubmit?: () => void }) {
  const { uploadToS3 } = useS3()
  const [error, setError] = React.useState('')
  const { register, handleSubmit, reset, formState, getValues } = useForm({
    mode: 'all',
    defaultValues: {
      title: '',
      audioFiles: [] as File[],
      artFiles: [] as File[],
    },
  })

  const uploadTrack = async (data) => {
    try {
      const { title } = getValues()
      const audioFile = data.audioFiles[0]
      const artFile = data.artFiles[0]
      const audioS3Url = await uploadToS3(audioFile, title)
      const artS3Url = await uploadToS3(artFile, title)
      const payload = {
        title,
        audioS3Url,
        artS3Url,
      }
      await axios.post('/api/tracks', payload)
      reset()
      if (onSubmit) onSubmit()
    } catch (err) {
      const parsedError = err.toJSON()
      setError(parsedError.message)
    }
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
