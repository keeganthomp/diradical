import styled from 'styled-components'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'components/ui/Buttons'
import { IoIosCloseCircle } from 'react-icons/io'
import Loader from 'components/ui/Loader'
import TextInput from 'components/ui/Inputs/TextInput'
import useApi from 'hooks/useApi'
import Error from 'components/ui/Error'

const UploadButton = styled(Button)`
  width: 100%;
`

const UploadForma = styled.form`
  width: 14rem;
`

const Field = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const FilePreview = styled.div`
  position: relative;
`
const RemoveFileButton = styled(IoIosCloseCircle)<{ disabled?: boolean }>`
  width: 16px;
  position: absolute;
  top: 7px;
  right: 0;
  color: ${(p) => (p.disabled ? '#d0d0d0' : 'red')};
  opacity: 0.5;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
    opacity: 1;
  }
`

const SelectFileButton = styled.p`
  background: #e3e3e3b0;
  padding: 2px 0;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`

const Title = styled.h1``

export default function ProfilePage() {
  const [uploadError, setUploadError] = React.useState('')
  const { uploadSong } = useApi()
  const { register, handleSubmit, formState, watch, setValue } = useForm({
    mode: 'all',
    defaultValues: {
      title: '',
      audioFiles: [] as File[],
      artFiles: [] as File[],
    },
  })
  const [selectAudioFiles, selectedArtFiles] = watch(['audioFiles', 'artFiles'])
  const audioFile = selectAudioFiles[0]
  const artFile = selectedArtFiles[0]

  const uploadTrack = async (data) => {
    setUploadError('')
    const { title, audioFiles, artFiles } = data
    const coverArtFile = artFiles[0]
    const audioFile = audioFiles[0]
    try {
      const formData = new FormData()
      formData.set('title', title)
      formData.set('coverArtFile', coverArtFile)
      formData.set('audioFile', audioFile)
      await uploadSong(formData)
    } catch (error) {
      setUploadError(error.message)
    }
  }
  return (
    <Container>
      <Title>Upload Track</Title>
      <UploadForma onSubmit={handleSubmit(uploadTrack)}>
        <Field>
          <TextInput
            {...register('title', {
              required: true,
            })}
            placeholder='Song Title'
            disabled={formState.isSubmitting}
          />
        </Field>
        <Field>
          {audioFile ? (
            <FilePreview>
              <p>{audioFile.name}</p>
              <RemoveFileButton
                disabled={formState.isSubmitting}
                onClick={() =>
                  !formState.isSubmitting && setValue('audioFiles', [])
                }
              />
            </FilePreview>
          ) : (
            <label>
              <input
                style={{ display: 'none' }}
                name='audioFiles'
                accept='.mp3,.wav'
                {...register('audioFiles', {
                  required: true,
                })}
                type='file'
                disabled={formState.isSubmitting}
              />
              <SelectFileButton>Select Audio File</SelectFileButton>
            </label>
          )}
        </Field>
        <Field>
          {artFile ? (
            <FilePreview>
              <p>{artFile.name}</p>
              <RemoveFileButton
                disabled={formState.isSubmitting}
                onClick={() =>
                  !formState.isSubmitting && setValue('artFiles', [])
                }
              />
            </FilePreview>
          ) : (
            <label>
              <input
                name='coverArt'
                style={{ display: 'none' }}
                type='file'
                accept='image/*'
                {...register('artFiles', {
                  required: true,
                })}
                disabled={formState.isSubmitting}
              />
              <SelectFileButton>Select Art File</SelectFileButton>
            </label>
          )}
        </Field>
        <UploadButton
          disabled={!formState.isValid || formState.isSubmitting}
          type='submit'
        >
          {formState.isSubmitting ? (
            <Loader size={20} color='#000' />
          ) : (
            'Upload'
          )}
        </UploadButton>
        {uploadError && <Error>{uploadError}</Error>}
      </UploadForma>
    </Container>
  )
}
