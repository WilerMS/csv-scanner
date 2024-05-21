import { type FC } from 'react'

interface Props {
  color: `#${string}`
  width: number
  height: number
}

const FaSearch: FC<Props> = ({
  color,
  width,
  height
}) => {
  return (
   <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path stroke={color} strokeWidth={2} d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path stroke={color} strokeWidth={2} d="M21 21l-6 -6" />
    </svg>
  )
}

export default FaSearch
