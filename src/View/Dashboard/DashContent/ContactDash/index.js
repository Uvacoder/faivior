import React from 'react'
import Columns from './columns'
import { MaterialTable } from '../../../../lib'

import Container from './styles'

const ContactDash = () => {
  const contacts = []
  return (
    <Container>
      <div className="company--table__container">
        <MaterialTable
          columns={Columns()}
          data={contacts ? contacts : []}
          isLoading={!contacts ? true : false}
        />
      </div>
    </Container>
  )
}

export default ContactDash
