import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import toast from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { altContactData } from '../../../store/actions/app'
import { formValidator } from '../../../helpers'
import Container from './styles'
import { Button, InputGroup, Modal } from '../../../UI'

const AddressModal = () => {
  const dispatch = useDispatch()
  const {
    params: { action },
  } = useRouteMatch()
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const { contactLists } = useSelector((state) => state.contact)
  const [formData, setFormState] = useState(() =>
    action === 'new'
      ? {
          id: uuid(),
          surName: '',
          firstName: '',
          email: '',
          phoneNo: '',
          latitude: '',
          longitude: '',
          address: [],
        }
      : contactLists.find((item) => item.id === action),
  )

  const handleInput = ({ target }) => {
    setFormState((s) => ({
      ...s,
      [target.name]: target.value,
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      formValidator([
        ...document.forms['address--modal__form'].getElementsByTagName('input'),
      ])
    ) {
      setLoading(true)
      let index
      if (action !== 'new') {
        index = contactLists.findIndex((item) => item.id === action)
        contactLists[index] = formData
      } else {
        contactLists.push(formData)
      }
      setTimeout(() => {
        toast.success(
          action === 'new'
            ? 'Successfully Added Contact'
            : 'Successfully Updated Contact',
        )
      }, 400)
      setTimeout(() => {
        setLoading(false)
        dispatch(altContactData(contactLists))
        history.goBack()
        document.getElementById(formData.id).scrollIntoView()
      }, 500)
    }
  }

  return (
    <Container>
      <Modal
        showModal={true}
        modalTitle={`${action === 'new' ? 'Add' : 'Edit'} Contact Detail`}
        className={'modal--size__sm'}
        modalFooter={
          <Button
            loading={loading}
            full
            spinnerWithTxt={true}
            type="submit"
            form="address--modal__form"
          >
            Submit
          </Button>
        }
      >
        <form
          onSubmit={handleSubmit}
          id={'address--modal__form'}
          name="address--modal__form"
          noValidate
        >
          <div className="modal--content">
            <InputGroup
              label="SurName"
              placeholder={'Enter your Surname'}
              required
              name="firstName"
              value={formData.firstName}
              onChange={handleInput}
            />
            <InputGroup
              label="LastName"
              placeholder={'Enter your lastName'}
              required
              name="lastName"
              value={formData.lastName}
              onChange={handleInput}
            />
            <InputGroup
              label="Phone Number"
              placeholder={'Enter your phone number'}
              required
              type="tel"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleInput}
            />
            <InputGroup
              label="Email"
              placeholder={'Enter your email address'}
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
            />
          </div>
        </form>
      </Modal>
    </Container>
  )
}

export default AddressModal
