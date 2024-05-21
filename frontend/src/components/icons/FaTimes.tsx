import { type FC } from 'react'

interface Props {
  color: `#${string}`
  width: number
  height: number

}

const FaTimes: FC<Props> = ({
  color,
  width,
  height
}) => {
  return (
   <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8L8 16M8 8L16 16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export default FaTimes
