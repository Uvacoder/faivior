import { axios, handleError } from '../../lib'

export const singlePushNotification = (data) => async (dispatch, getState) => {
  const {
    userData: { username },
  } = getState().user
  try {
    const { responseCode, responseMessage, data: response } = await axios.post(
      '/product/push_notification_single',
      {
        ...data,
        username,
      },
    )
    if (responseCode === 200) {
    }
    return {
      responseCode,
      responseMessage,
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const broadCastPushNotification = (data) => async (
  dispatch,
  getState,
) => {
  const {
    userData: { username },
  } = getState().user
  try {
    const { responseCode, responseMessage, data: response } = await axios.post(
      '/product/push_notification_all',
      {
        ...data,
        username,
      },
    )
    if (responseCode === 200) {
    }
    return {
      responseCode,
      responseMessage,
    }
  } catch ({ response }) {
    handleError(response)
  }
}
