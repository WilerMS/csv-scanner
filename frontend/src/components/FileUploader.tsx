import { type FC } from 'react'

import csvIcon from '@/assets/csv_icon.png'

interface Props {
  onSelectFile?: (file: File) => void
}

export const FileUploader: FC<Props> = ({
  onSelectFile = () => { }
}) => {
  const handleChangeFile = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newFile = e.currentTarget.files?.[0]

    if (newFile) onSelectFile?.(newFile)
  }

  return (
    <div>
      <div className='header flex flex-col gap-[5px]'>
        <h1 className='text-center text-[20px]'>Upload your CSV</h1>
        <h3 className='text-[#828282] text-[12px] text-center'>File should be .csv</h3>
      </div>

      <div className='rounded-[12px] w-full h-[235px] mt-[20px]'>
        <div className='relative w-full h-full rounded-[8px] border-[#81da8a68] border-[2px] border-dashed overflow-hidden'>
          <div className='relative group w-full h-full center flex-col'>
            <div className='w-full h-full center flex-col bg-[#F6F8FB]'>
              <img
                src={csvIcon}
                alt="csv logo icon"
                className='w-[100px]'
                style={{
                  filter: 'grayscale(80%)'
                }}
              />
              <span className='text-[12px] text-[#BDBDBD] mt-[30px]'>Drag & Drop your file here</span>
            </div>
            <input
              className='absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer'
              type="file"
              accept='.csv'
              onChange={handleChangeFile}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
