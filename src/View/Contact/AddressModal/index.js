import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import toast from 'react-hot-toast'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { formValidator } from '../../../helpers'
import { altAddress } from '../../../store/actions/app'
import Container from './styles'
import { Button, InputGroup, Modal } from '../../../UI'

const AddressModal = () => {
  const dispatch = useDispatch()
  const {
    params: { addressId, contactId },
  } = useRouteMatch()
  const history = useHistory()
  const { contactLists } = useSelector((state) => state.contact)

  const [loading, setLoading] = useState(false)
  const [formData, setFormState] = useState(() =>
    addressId !== 'new'
      ? contactLists
          .find((item) => item.id === contactId)
          .address.find((item) => item.id === addressId)
      : {
          id: uuid(),
          streetNo: '',
          streetName: '',
          state: '',
          latitude: '',
          longitude: '',
        },
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
      let contactIndex, addressIndex
      contactIndex = contactLists.findIndex((item) => item.id === contactId)
      if (addressId === 'new') {
        contactLists[contactIndex].address.push(formData)
      } else {
        addressIndex = contactLists[contactIndex].address.findIndex(
          (item) => item.id === formData.id,
        )
        contactLists[contactIndex].address[addressIndex] = formData
      }
      setLoading(true)
      setTimeout(() => {
        toast.success(
          addressId === 'new'
            ? 'Successfully Added Address'
            : 'Successfully Updated Address',
        )
      }, 400)
      setTimeout(() => {
        setLoading(false)
        dispatch(altAddress(contactLists))
        history.goBack()
      }, 500)
    }
  }

  return (
    <Container>
      <Modal
        showModal={true}
        modalTitle={`${addressId === 'new' ? 'Add' : 'Edit'} Address`}
        className={'modal--size__sm'}
        modalFooter={
          <Button
            full
            loading={loading}
            type="submit"
            spinnerWithTxt={true}
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
              label="Street Number"
              placeholder={'Enter your Street Number'}
              required
              name="streetNo"
              type="number"
              value={formData.streetNo}
              onChange={handleInput}
            />
            <InputGroup
              label="Street Name"
              placeholder={'Herbelt Marculy'}
              required
              name="streetName"
              value={formData.streetName}
              onChange={handleInput}
            />
            <InputGroup
              label="State of residence "
              placeholder={'Lagos State'}
              required
              name="state"
              value={formData.state}
              onChange={handleInput}
            />
          </div>
        </form>
      </Modal>
    </Container>
  )
}

export default AddressModal
