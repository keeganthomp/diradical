import { useForm } from 'react-hook-form'
import useS3 from 'hooks/useS3'
import axios from 'axios'
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
  const { uploadToS3 } = useS3()
  const { register, handleSubmit, reset, formState, getValues } = useForm({
    mode: 'all',
    defaultValues: {
      title: '',
      audioFiles: [] as File[],
      artFiles: [] as File[],
    },
  })

  const hideModal = () => setModal({ type: ModalType.NONE, state: null })

  const uploadTrack = async (data) => {
    try {
      const { title } = getValues()
      const audioFile = data.audioFiles[0]
      const artFile = data.artFiles[0]
      const audioS3Url = await uploadToS3(audioFile, title)
      const artS3Url = await uploadToS3(artFile, title)
      const formData = new FormData()
      formData.append('audioFile', audioFile)
      formData.append('artFile', artFile)
      formData.append('title', title)
      formData.append('source', audioS3Url as string)
      formData.append('coverArt', artS3Url as string)
      console.log('yesp')
      await axios.post('/api/tracks', formData)
      reset()
      if (onUpload) {
        onUpload()
      }
      hideModal()
    } catch (err) {
      console.log('err uploading', err)
    }
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
