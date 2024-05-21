import { type FC } from 'react'

interface Props {
  color: `#${string}`
  width: number
  height: number
}

const FaCheck: FC<Props> = ({
  color,
  width,
  height
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Interface / Check">
      <path id="Vector" d="M6 12L10.2426 16.2426L18.727 7.75732" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  )
}

export default FaCheck
