import React from 'react'
// import { VscGraph } from 'react-icons/vsc'
import Container from './styles'

const StatsPallete = ({ stats }) => {
  return (
    <Container>
      {stats &&
        stats.map((item) => (
          <div className="stats--item">
            <div>
              <h3>{item.title}</h3>
              <h1>{item.value}</h1>
            </div>
            <div>{item.icon}</div>
          </div>
        ))}
    </Container>
  )
}

export default StatsPallete
