import { fetchService, postService } from '@/services'
import { delay } from '@/utils/delay'
import { useState } from 'react'

export const useFile = (url: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<Array<Record<string, string>>>()
  const [checkpoint, setCheckpoint] = useState(false)

  const fetchFiles = async (params: Record<string, string>) => {
    setIsLoading(true)

    if (!checkpoint) {
      await delay(2500)
      setCheckpoint(true)
    }

    try {
      const parsedParams = new URLSearchParams(params)
      const queryParams = parsedParams.toString()

      const [err, data] = await fetchService(`${url}?${queryParams}`)

      if (err) {
        throw new Error(err.message)
      }

      if (data) setData(data)
    } finally {
      setIsLoading(false)
    }
  }

  const postFile = async (file: File) => {
    setIsLoading(true)
    setCheckpoint(true)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const urlParams = new URLSearchParams(window.location.search)
      const fileId = urlParams.get('fileId') as unknown as string
      formData.append('fileId', fileId)

      const [err, res] = await postService(url, { body: formData })

      if (err) {
        throw new Error(err.message)
      }

      if (res) setData(res.data)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    data,
    isLoading,
    postFile,
    fetchFiles
  }
}
