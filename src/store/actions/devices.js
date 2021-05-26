import { axios, handleError } from '../../lib'
import { ALT_DEVICE_LISTS } from '../types'

const altDeviceLists = (data) => ({
  type: ALT_DEVICE_LISTS,
  data,
})

export const listDevices = () => async (dispatch, getState) => {
  const {
    userData: { username },
  } = getState().user
  try {
    const { responseCode, data: response } = await axios.post(
      '/auth/list_device',
      {
        user_name: username,
      },
    )
    if (responseCode === 200) {
      dispatch(altDeviceLists(response))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const manageDevice = (data) => async (dispatch, getState) => {
  const {
    userData: { username },
  } = getState().user
  try {
    const { responseCode, responseMessage } = await axios.post(
      '/auth/manage_device',
      {
        ...data,
        user_name: username,
      },
    )
    if (responseCode === 200) {
      await dispatch(listDevices())
    }
    return { responseCode, responseMessage }
  } catch ({ response }) {
    handleError(response)
  }
}
