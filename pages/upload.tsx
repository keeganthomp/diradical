import styled from 'styled-components'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import useUser from 'hooks/useUser'
import { useForm, useFieldArray, FormProvider } from 'react-hook-form'
import useApi from 'hooks/useApi'
import { Button } from 'components/ui/Buttons'
import Loader from 'components/ui/Loader'
import SongUpload from 'components/upload/SongUpload'
import { AiOutlinePlus } from 'react-icons/ai'
import TextInput from 'components/ui/Inputs/TextInput'
import FilePreview from 'components/upload/ui/FilePreview'
import RemoveFileButton from 'components/upload/ui/RemoveFileButton'
import SelectFileButton from 'components/upload/ui/SelectFileButton'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  overflow: auto;
`

const Content = styled.div`
  width: 15rem;
  text-align: center;
`

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 2rem;
`

const UploadButton = styled(Button)`
  width: 100%;
  height: 2rem;
`

const AddSongButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
`
const AddSongIcon = styled(AiOutlinePlus)`
  margin-right: 0.25rem;
`
const AddSongButton = styled(Button)`
  background: #888888af;
  padding: 0.5rem;
  width: auto;
  border-radius: 4px;
`
const AlbumInfoContainer = styled.div`
  padding-bottom: 1rem;
`
const AlbumHeading = styled.p``
const AlbumTitle = styled(TextInput)`
  margin-bottom: 10px;
`

export default function UploadPage() {
  const { isAuthenticated, isAuthenticating, user } = useUser()
  const router = useRouter()
  const { uploadSong } = useApi()
  const defaultSong = {
    title: '',
    audioFiles: [] as File[],
    artFiles: [] as File[],
  }
  const form = useForm({
    mode: 'all',
    defaultValues: {
      albumTitle: '',
      albumCoverArtFiles: [] as File[],
      songs: [defaultSong],
    },
  })
  const { fields, append, remove } = useFieldArray({
    name: 'songs',
    control: form.control,
  })
  const { formState, watch, setValue, register } = form
  const albumCoverArtFiles = watch('albumCoverArtFiles')
  const albumConverArt = albumCoverArtFiles[0]
  const isAlbum = fields.length > 1

  useEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      router.push('/signin')
    }
  }, [isAuthenticating])

  if (!isAuthenticated) return null

  const uploadTrack = async (data) => {
    const formData = new FormData()
    const { songs, albumTitle, albumCoverArtFiles } = data
    if (isAlbum) {
      const albumCoverArtFile = albumCoverArtFiles[0]
      formData.set('albumTitle', albumTitle)
      formData.set('albumCoverArt', albumCoverArtFile)
    }
    songs.forEach((s) => {
      const { title, audioFiles, artFiles } = s
      const coverArtFile = artFiles[0]
      const audioFile = audioFiles[0]
      formData.append('trackTitles', title)
      formData.append('trackAudioFiles', audioFile)
      if (!isAlbum) {
        formData.append('trackArtFiles', coverArtFile)
      }
    })
    try {
      await uploadSong(formData)
      router.push('/my-music')
    } catch (error) {}
  }

  return (
    <Container>
      <Title>Upload</Title>
      <Content>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(uploadTrack)}>
            {isAlbum && (
              <AlbumInfoContainer>
                <AlbumHeading>Album Info</AlbumHeading>
                <AlbumTitle
                  {...form.register('albumTitle', {
                    required: isAlbum ? 'Album Title is required' : false,
                  })}
                  placeholder='Album Title'
                  disabled={formState.isSubmitting}
                />
                {albumConverArt ? (
                  <FilePreview>
                    <p>{albumConverArt.name}</p>
                    <RemoveFileButton
                      disabled={formState.isSubmitting}
                      onClick={() =>
                        !formState.isSubmitting &&
                        setValue('albumCoverArtFiles', [])
                      }
                    />
                  </FilePreview>
                ) : (
                  <label>
                    <input
                      style={{ display: 'none' }}
                      accept='image/*'
                      {...register('albumCoverArtFiles', {
                        required: 'Album art file is required',
                        minLength: {
                          value: 1,
                          message: 'Album art file is required',
                        },
                      })}
                      type='file'
                      disabled={formState.isSubmitting}
                    />
                    <SelectFileButton>Select Album Art file</SelectFileButton>
                  </label>
                )}
              </AlbumInfoContainer>
            )}
            {fields.map((field, index) => (
              <SongUpload
                key={field.id}
                index={index}
                remove={() => remove(index)}
                isAlbum={isAlbum}
              />
            ))}
            <AddSongButtonContainer>
              <AddSongButton
                disabled={formState.isSubmitting}
                onClick={() => append(defaultSong)}
              >
                <AddSongIcon /> Add Another Song
              </AddSongButton>
            </AddSongButtonContainer>
            <UploadButton
              disabled={!formState.isValid || formState.isSubmitting}
              type='submit'
            >
              {formState.isSubmitting ? (
                <Loader size={20} color='#000' />
              ) : isAlbum ? (
                'Upload Album'
              ) : (
                'Upload Single'
              )}
            </UploadButton>
          </form>
        </FormProvider>
      </Content>
    </Container>
  )
}
