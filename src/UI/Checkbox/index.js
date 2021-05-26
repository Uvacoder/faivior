import React from 'react'
import Container from './styles'

const Checkbox = ({ className, ...props }) => {
  return (
    <Container className={`paySync--checkbox ${className && className}`}>
      <input type="checkbox" {...props} />
      <span />
    </Container>
  )
}

export default Checkbox
