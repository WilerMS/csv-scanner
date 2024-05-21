import { type FC } from 'react'

interface CardProps {
  item: Record<string, string>
}

export const Card: FC<CardProps> = ({ item }) => {
  return (
    <div key={item.id} className='w-full h-fit p-4 bg-white rounded-[12px] shadow-[0px_4px_12px_0px_#0000001A]'>
      {Object.entries(item).map(([key, value]) => (
        <div key={`${key}:${value}`} className='truncate' title={value}>
          <span><strong>{key}</strong> {value}</span>
        </div>
      ))}
    </div>
  )
}
