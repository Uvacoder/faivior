import React from 'react'
import { useSelector } from 'react-redux'
import Columns from './columns'
import { MaterialTable } from '../../../../lib'

import Container from './styles'

const ContactDash = () => {
  const { contactLists } = useSelector((state) => state.contact)

  return (
    <Container>
      <div className="contact--table__container">
        <MaterialTable
          columns={Columns()}
          data={contactLists ? contactLists : []}
          isLoading={!contactLists ? true : false}
        />
      </div>
    </Container>
  )
}

export default ContactDash
