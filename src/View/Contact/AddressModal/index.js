import React, { useState } from 'react'
import { formValidator } from '../../../helpers'
import Container from './styles'
import { Button, InputGroup, Modal } from '../../../UI'

const AddressModal = ({ handleHideModal }) => {
  const [formData, setFormState] = useState({
    streetNo: '',
    streetName: '',
    state: '',
    latitude: '',
    longitude: '',
  })
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
    }
  }

  return (
    <Container>
      <Modal
        showModal={true}
        modalTitle={'Add Address'}
        className={'modal--size__sm'}
        handleClose={handleHideModal}
        modalFooter={
          <Button full type="submit" form="address--modal__form">
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
              placeholder={'3'}
              required
              type="number"
              name="streetNo"
              value={formData.streetNo}
              onChange={handleInput}
            />
            <InputGroup
              label="Street Name"
              placeholder={'Victoria bey estate Lekki'}
              required
              name="streetName"
              value={formData.streetName}
              onChange={handleInput}
            />
            <InputGroup label="State">
              <label>State</label>
              <select>
                <option>Town</option>
              </select>
            </InputGroup>
          </div>
        </form>
      </Modal>
    </Container>
  )
}

export default AddressModal
