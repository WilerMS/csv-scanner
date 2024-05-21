import { useEffect, useState } from 'react'
import { Toaster, toast } from 'sonner'
import cn from 'classnames'

import { useFile } from '@/hooks/useFiles'
import { SearchBar } from '@/components/SearchBar'
import { AnimatedDiv } from '@/components/AnimatedDiv'
import { Card } from '@/components/Card'
import { FileUploader } from '@/components/FileUploader'
import { Loading } from '@/components/ui/Loading'
import { buildEndpoint } from '@/constants/api'

const App = () => {
  const [search, setSearch] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('q') ?? ''
  })

  const { data, isLoading, postFile, fetchFiles } = useFile(buildEndpoint('csv'))

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const fileId = urlParams.get('fileId') as unknown as string

    fetchFiles({ fileId, q: search })
      .catch((err) => toast.error((err as Error).message))
  }, [search])

  const handleUploadFile = async (file: File) => {
    postFile(file).catch((err) => toast.error((err as Error).message))
  }

  const handleSearch = (value: string) => {
    setSearch(value)
    const urlParams = new URLSearchParams(window.location.search)
    const fileId = urlParams.get('fileId')
    const path = value === '' ? `?&fileId=${fileId}` : `?&fileId=${fileId}&q=${value}` // añadir fileId
    window.history.replaceState({}, '', path)
  }

  const wrapperClasses = !data
    ? !isLoading
        ? 'w-[402px] h-[400px] p-[32px]'
        : 'w-[402px] h-[143px] p-[32px]'
    : 'h-[50px] w-[600px]'

  return (
    <div className="App w-full h-screen bg-primary-600 flex items-center justify-center flex-col gap-[15px]">
      <Toaster richColors position='bottom-center' />

      <div className={cn(wrapperClasses, 'bg-white rounded-[12px] shadow-[0px_4px_12px_0px_#0000001A] transition-all ease-out duration-200 overflow-hidden')}>
        {!data
          ? isLoading
            ? <Loading />
            : <FileUploader onSelectFile={handleUploadFile} />
          : <SearchBar value={search} onSearch={handleSearch} />
        }
      </div>

      {!!data &&
        <AnimatedDiv
          className={cn(
            'h-[600px] w-[600px] rounded-[12px] overflow-hidden',
            'transition-all ease-out duration-200'
          )}
          delay={300}
          animation='fade-in-up'
        >
          <div className='grid grid-cols-2 grid-rows-[min-content] gap-[15px] h-full w-full overflow-y-auto overflow-x-hidden no-scrollbar'>
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </AnimatedDiv>
      }
    </div>
  )
}

export default App
