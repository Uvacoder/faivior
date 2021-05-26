import { axios, handleError } from '../../lib'
import { ALT_GROUP_LISTS, ALT_MODAL_LISTS } from '../types'

const altGroupLists = (data) => ({
  type: ALT_GROUP_LISTS,
  data,
})

const altModelLists = (data) => ({
  type: ALT_MODAL_LISTS,
  data,
})

export const listAvailableModel = () => async (dispatch, getState) => {
  const {
    userData: { username },
  } = getState().user
  try {
    const {
      responseCode,
      data: response,
    } = await axios.post('/auth/list_available_models', { username })
    console.log({ responseCode, response }, 'SDjkdkj')
    if (responseCode === 200) {
      dispatch(altModelLists(response))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const listAllGroup = () => async (dispatch, getState) => {
  const {
    userData: { username },
  } = getState().user
  try {
    const {
      responseCode,
      data: response,
    } = await axios.post('/auth/list_group_by_users', { username })
    console.log({ responseCode, response }, 'SDjkdkj')
    if (responseCode === 200) {
      dispatch(altGroupLists(response))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const addGroup = (data) => async (dispatch, getState) => {
  const {
    userData: { username },
  } = getState().user
  try {
    const {
      responseCode,
      responseMessage,
    } = await axios.post('/auth/manage_roles', { ...data, username })
    if (responseCode === 200) await dispatch(listAllGroup())
    return {
      responseCode,
      responseMessage,
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const manageGroup = (data) => async (dispatch, getState) => {
  const {
    userData: { username },
  } = getState().user
  try {
    const {
      responseCode,
      responseMessage,
    } = await axios.post('/auth/assign_user_to_group', { ...data, username })
    if (responseCode === 200) {
      await dispatch(listAllGroup())
    }
    return { responseCode, responseMessage }
  } catch ({ response }) {
    handleError(response)
  }
}
