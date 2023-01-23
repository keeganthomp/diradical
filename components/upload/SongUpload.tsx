import styled from 'styled-components'
import React from 'react'
import RemoveFileButton from './ui/RemoveFileButton'
import SelectFileButton from './ui/SelectFileButton'
import FilePreview from './ui/FilePreview'
import TextInput from 'components/ui/Inputs/TextInput'
import Error from './ui/FormError'
import { useFormContext } from 'react-hook-form'

type UploadProps = {
  index: number
  remove: (i: number) => void
  isAlbum?: boolean
}

const Container = styled.div`
  padding: 1rem 0;
  position: relative;
  border-radius: 10px;
  margin-bottom: 1rem;
`

const Field = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`

const RemoveSongButton = styled.p`
  color: red;
  position: absolute;
  top: 4px;
  right: 5px;
  cursor: pointer;
  opacity: 0.5;
  font-size: 12px;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`

export default function SongUploadForm({
  index,
  remove,
  isAlbum,
}: UploadProps) {
  const { register, watch, formState, setValue } = useFormContext()
  const [selectedAudioFiles, selectedArtFiles] = watch([
    `songs[${index}].audioFiles`,
    `songs[${index}].artFiles`,
  ])
  const audioFile = selectedAudioFiles[0]
  const artFile = selectedArtFiles[0]
  const songErrors = formState.errors.songs?.[index]
  return (
    <Container>
      {index > 0 && (
        <RemoveSongButton onClick={remove}>Remove</RemoveSongButton>
      )}
      {isAlbum && <p>Song {index + 1}</p>}
      <Field>
        <TextInput
          {...register(`songs[${index}].title`, {
            required: 'Song title is required',
          })}
          placeholder='Song Title'
          disabled={formState.isSubmitting}
        />
        {songErrors?.title && <Error>{songErrors?.title.message}</Error>}
      </Field>
      <Field>
        {audioFile ? (
          <FilePreview>
            <p>{audioFile.name}</p>
            <RemoveFileButton
              disabled={formState.isSubmitting}
              onClick={() =>
                !formState.isSubmitting &&
                setValue(`songs[${index}].audioFiles`, [])
              }
            />
          </FilePreview>
        ) : (
          <label>
            <input
              style={{ display: 'none' }}
              accept='.mp3,.wav'
              {...register(`songs[${index}].audioFiles`, {
                required: 'Audio file is required',
                minLength: {
                  value: 1,
                  message: 'Audio file is required',
                },
              })}
              type='file'
              disabled={formState.isSubmitting}
            />
            <SelectFileButton>Select Audio File</SelectFileButton>
          </label>
        )}
        {songErrors?.audioFiles && (
          <Error>{songErrors?.audioFiles.message}</Error>
        )}
      </Field>
      {!isAlbum && (
        <Field>
          {artFile ? (
            <FilePreview>
              <p>{artFile.name}</p>
              <RemoveFileButton
                disabled={formState.isSubmitting}
                onClick={() =>
                  !formState.isSubmitting &&
                  setValue(`songs[${index}].artFiles`, [])
                }
              />
            </FilePreview>
          ) : (
            <label>
              <input
                style={{ display: 'none' }}
                type='file'
                accept='image/*'
                {...register(`songs[${index}].artFiles`, {
                  required: !isAlbum && 'Art file is required',
                  minLength: !isAlbum && {
                    value: 1,
                    message: 'Art file is required',
                  },
                })}
                disabled={formState.isSubmitting}
              />
              <SelectFileButton>Select Art File</SelectFileButton>
            </label>
          )}
          {songErrors?.artFiles && (
            <Error>{songErrors?.artFiles.message}</Error>
          )}
        </Field>
      )}
    </Container>
  )
}
