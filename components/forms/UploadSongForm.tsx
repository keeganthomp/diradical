import { useForm } from 'react-hook-form'
import React from 'react'
import styled from 'styled-components'
import { Button } from 'components/ui/Buttons'
import useUpload from 'hooks/useUpload'
import { IoIosCloseCircle } from 'react-icons/io'
import TextInput from '../ui/Inputs/TextInput'
import Form from './Form'

const UploadButton = styled(Button)`
  width: 100%;
`

const UploadForma = styled(Form)`
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
const RemoveFileButton = styled(IoIosCloseCircle)`
  width: 16px;
  position: absolute;
  top: 7px;
  right: 0;
  color: red;
  opacity: 0.5;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
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

export function UploadForm() {
  const { upload } = useUpload()
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
    const songPayload = {
      title: data.title,
      coverArtFile: data.artFiles[0],
      audioFile: data.audioFiles[0],
    }
    try {
      await upload(songPayload)
    } catch (error) {
      throw new Error('oops')
    }
  }

  return (
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
            <RemoveFileButton onClick={() => setValue('audioFiles', [])} />
          </FilePreview>
        ) : (
          <label>
            <input
              style={{ display: 'none' }}
              name='audioFiles'
              accept='.mp3,.wav'
              {...register('audioFiles', {
                required: true,
                onChange: (e) => console.log(e.target.files),
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
            <RemoveFileButton onClick={() => setValue('artFiles', [])} />
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
        Upload
      </UploadButton>
    </UploadForma>
  )
}

export default UploadForm
