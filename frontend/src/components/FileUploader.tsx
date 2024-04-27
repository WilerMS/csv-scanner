import React, { type FC } from 'react'

interface FileUploaderProps {
  onSelectFile: (file: File) => void
}

const FileUploader: FC<FileUploaderProps> = ({ onSelectFile }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (!files) return
    onSelectFile(files[0])
  }

  return (
    <div className='transition hover:scale-105 hover:shadow-2xl'>
      <label
        htmlFor="file"
        className='text-2xl uppercase cursor-pointer py-5 px-8 rounded-3xl text-white bg-primary-700'
      >
        Sube tu archivo CSV
      </label>
      <input
        id='file'
        type="file"
        className='hidden'
        accept='text/csv'
        onChange={handleChange}
      />
    </div>
  )
}

export default FileUploader
