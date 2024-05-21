import React, { type FC, useState, useEffect } from 'react'
import FaSearch from './icons/FaSearch'
import { useDebounce } from '@/hooks/useDebounce'

interface SearchBarProps {
  value: string
  onSearch: (value: string) => void
}

export const SearchBar: FC<SearchBarProps> = ({ value, onSearch }) => {
  const [text, setText] = useState(value)
  const debouncedText = useDebounce(text, 250)

  useEffect(() => {
    onSearch?.(debouncedText)
  }, [debouncedText])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }

  return (
    <div className='w-full h-full px-5 py-2 flex items-center'>

      <input
        type="text"
        className='w-full h-full outline-none placeholder:font-light'
        placeholder='Write something...'
        value={text}
        onChange={handleChange}
      />
      <FaSearch width={24} height={24} color='#000' />

    </div>
  )
}
