import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import {
  singlePushNotification,
  broadCastPushNotification,
} from '../../store/actions/notification.js'
import AddressModal from './AddressModal'
import { formValidator } from '../../helpers'
import Container from './styles'
import { Button, InputGroup } from '../../UI'

const Contacts = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [{ showModal }, setDisplay] = useState({
    showModal: false,
  })
  const [formData, setFormState] = useState({
    name: '',
    phoneNo: '',
    email: '',
    address: [],
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
        ...document.forms['notification--form'].getElementsByTagName('input'),
      ])
    ) {
      try {
        setLoading(true)
        const { broadCast, intended_user, ...rest } = formData
        const { responseCode, responseMessage } = formData.broadCast
          ? await dispatch(broadCastPushNotification(rest))
          : await dispatch(
              singlePushNotification({
                intended_user,
                ...rest,
              }),
            )
        if (responseCode === 200) {
          toast.success('Successfully sent notification')
        } else {
          toast.error(responseMessage)
        }
      } catch (error) {
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <>
      {showModal && <AddressModal {...{ handleSubmit: console.log }} />}
      <Container>
        <div className="top--bar">
          <p className="u--typo__title">Add Contact</p>
        </div>
        <div className="notification--container">
          <form onSubmit={handleSubmit} name="notification--form" noValidate>
            <InputGroup
              label="Name"
              placeholder={'Enter your Name'}
              required
              name="name"
              value={formData.name}
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
            {formData.address.length > 0 && (
              <>
                <InputGroup>
                  <label>Address</label>
                </InputGroup>
                <div className="address--list__container">
                  {formData.address.map((item) => (
                    <div>
                      <p>
                        <strong>Street name</strong>
                      </p>
                      <p>sjdksjdsdkjsd</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* <InputGroup>
            <label>Address</label>
          </InputGroup>
          <div className="address--group">
            <InputGroup>
              <div>sjdkjsdksdjs</div>
            </InputGroup>
            <InputGroup>
              <div>sjdkjsdksdjs</div>
            </InputGroup>
            <InputGroup>
              <div>sjdkjsdksdjs</div>
            </InputGroup>
            <InputGroup>
              <div>sjdkjsdksdjs</div>
            </InputGroup>
          </div> */}
            <footer>
              <Button
                tertiary
                onClick={() => setDisplay((s) => ({ ...s, showModal: true }))}
              >
                Add address
              </Button>
              <Button type="submit" loading={loading}>
                Submit
              </Button>
            </footer>
          </form>
        </div>
      </Container>
    </>
  )
}

export default Contacts
