import React, { useState } from 'react'
import { GoLocation } from 'react-icons/go'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin3Fill } from 'react-icons/ri'
import { useHistory, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { altAddress } from '../../store/actions/app'
import AddressModal from './AddressModal'
import ContactModal from './ContactModal'
import Container from './styles'
import { Button } from '../../UI'

const Contacts = () => {
  const [loading, setLoading] = useState([])
  const history = useHistory()
  const dispatch = useDispatch()
  const { contactLists } = useSelector((state) => state.contact)

  const handleDeleteAddress = (addressId, contactId) => {
    setLoading((s) => [...s, addressId])
    setTimeout(() => {
      const newContactLists = [...contactLists]
      const index = newContactLists.findIndex((item) => item.id === contactId)
      newContactLists[index].address = contactLists[index].address.filter(
        (item) => item.id !== addressId,
      )
      dispatch(altAddress(newContactLists))
      setLoading((s) => s.filter((item) => item !== addressId))
    }, 400)
  }
  return (
    <>
      <Route
        path="/dashboard/contact/address/:contactId/:addressId"
        component={AddressModal}
      />
      <Route
        path="/dashboard/contact/detail/:action"
        component={ContactModal}
      />
      <Container>
        <div className="top--bar">
          <p className="u--typo__title">Contacts</p>
          <Button onClick={() => history.push('/dashboard/contact/detail/new')}>
            Add Contact
          </Button>
        </div>
        <div className="contact--list">
          <div className="container">
            {contactLists.length === 0 && (
              <div className="empty--list">
                <h3>You don't have any contact added</h3>
                <p>Click to the botton above to add a contact</p>
              </div>
            )}
            {contactLists.map((item) => (
              <div className="contact--list__item" id={item.id}>
                <div className="contact--header">
                  <div>
                    <h3>
                      {item.firstName} {item.lastName}
                    </h3>
                    <p>
                      {item.phoneNo}, {item.email}
                    </p>
                  </div>
                  <Button
                    icon
                    arial-label="edit address"
                    onClick={() =>
                      history.push(`/dashboard/contact/detail/${item.id}`)
                    }
                  >
                    <FiEdit />
                  </Button>
                </div>
                <div className="address--details">
                  {item.address.length > 0 && <h3>Address</h3>}
                  {item.address.map(({ streetNo, streetName, state, id }) => (
                    <div className="address--item">
                      <div>
                        <GoLocation />
                        <p
                          onClick={() =>
                            history.push(
                              `/dashboard/contact/address/${item.id}/${id}`,
                            )
                          }
                        >
                          No.{streetNo} {streetName} street, {state} state
                        </p>
                      </div>
                      <Button
                        icon
                        className="delete--btn"
                        loading={loading.includes(id)}
                        onClick={() => handleDeleteAddress(id, item.id)}
                      >
                        <RiDeleteBin3Fill color={'#FF5E5E'} />
                      </Button>
                    </div>
                  ))}
                  {item.address.length !== 5 && (
                    <Button
                      secondary
                      small
                      onClick={() =>
                        history.push(
                          `/dashboard/contact/address/${item.id}/new`,
                        )
                      }
                    >
                      Add <GoLocation />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contacts
