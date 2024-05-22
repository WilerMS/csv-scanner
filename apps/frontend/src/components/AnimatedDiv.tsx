import cn from 'classnames'
import React, { type FC, useEffect, useState, type ReactNode } from 'react'

interface AnimatedDivProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode
  delay?: number
  animation?: string
}

export const AnimatedDiv: FC<AnimatedDivProps> = ({
  children,
  delay = 350,
  animation,
  className,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timeout)
  }, [delay])

  return (
    <div className={cn(className, animation, `${isVisible ? '' : 'hidden'}`)} {...props}>
      {children}
    </div>
  )
}
