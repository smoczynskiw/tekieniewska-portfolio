import React, { useState } from 'react'
import styles from './styles'

const { main, button } = styles

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false)
  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  return (
    <div style={main}>
      <button style={button(isHovered)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>przejdź do portfolio</button>
    </div >
  )
}

export default Footer