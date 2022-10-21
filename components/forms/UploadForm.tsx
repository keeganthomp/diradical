import { useForm } from 'react-hook-form'
import useS3 from 'hooks/useS3'
import axios from 'axios'
import { Track } from '@prisma/client'
import React from 'react'
import styled from 'styled-components'
import Button from 'components/ui/Buttons/Base'
import { useSetRecoilState } from 'recoil'
import modalState, { ModalType } from 'atoms/modal'
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

const Label = styled.label`
  font-weight: 100;
  text-transform: lowercase;
`

export function UploadForm({ onUpload }: { onUpload?: () => void }) {
  const setModal = useSetRecoilState(modalState)
  const { uploadFile } = useS3()
  const { register, handleSubmit, reset, formState, getValues } = useForm({
    mode: 'all',
    defaultValues: {
      title: '',
      audioFiles: [] as File[],
      artFiles: [] as File[],
    },
  })

  const hideModal = () => setModal(ModalType.NONE)

  const uploadTrack = async (data) => {
    const { title } = getValues()
    const audioS3Url = await uploadFile(data.audioFiles[0], title)
    const artS3Url = await uploadFile(data.artFiles[0], title)
    const payload: Partial<Track> = {
      title: data.title,
      source: audioS3Url as string,
      coverArt: artS3Url as string,
    }
    await axios.post('/api/tracks', payload)
    reset()
    if (onUpload) {
      onUpload()
    }
    hideModal()
  }

  return (
    <Container>
      <ModalTitle>upload a song</ModalTitle>
      <Form onSubmit={handleSubmit(uploadTrack)}>
        <TextInput
          {...register('title', {
            required: true,
          })}
          placeholder='song title'
        />
        <Label htmlFor='audioFiles'>Choose audio file</Label>
        <input
          name='audioFiles'
          type='file'
          accept='.mp3,.wav'
          {...register('audioFiles', {
            required: true,
          })}
        />
        <Label htmlFor='coverArt'>Choose cover image</Label>
        <input
          name='coverArt'
          type='file'
          accept='image/*'
          {...register('artFiles', {
            required: true,
          })}
        />
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
