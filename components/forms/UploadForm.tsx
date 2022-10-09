import { useForm } from 'react-hook-form'
import useS3 from 'hooks/useS3'
import axios from 'axios'
import { Track } from '@prisma/client'
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

export function UploadForm() {
  const refresh = useRefresh()
  const { uploadFile } = useS3()
  const { register, handleSubmit, reset, formState, getValues } = useForm({
    mode: 'all',
    defaultValues: {
      title: '',
      audioFiles: [] as File[],
      artFiles: [] as File[],
    },
  })

  const uploadTrack = async (data) => {
    const { title } = getValues()
    const audioS3Url = await uploadFile(data.audioFiles[0], title)
    const artS3Url = await uploadFile(data.artFiles[0], title)
    const payload: Partial<Track> = {
      title: data.title,
      source: audioS3Url as string,
      coverArt: artS3Url as string,
    }
    await axios.post('/api/upload', payload)
    reset()
    refresh()
  }

  return (
    <Container>
      <h2>Upload a song</h2>
      <Form onSubmit={handleSubmit(uploadTrack)}>
        <TextInput
          {...register('title', {
            required: true,
          })}
          placeholder='Song Title'
        />
        <label htmlFor='audioSource'>Choose a audio file:</label>
        <input
          name='audioSource'
          type='file'
          accept='audio/*'
          {...register('audioFiles', {
            required: true,
          })}
        />
        <label htmlFor='coverArt'>Choose a cover image:</label>
        <input
          name='coverArt'
          type='file'
          accept='image/*'
          {...register('artFiles', {
            required: true,
          })}
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

export default UploadForm
