import { axios, handleError } from '../../lib'
import { ALT_USER_LISTS } from '../types'

const altUserLists = (data) => ({
  type: ALT_USER_LISTS,
  data,
})

export const listAllUser = (pageNum, pageSize) => async (
  dispatch,
  getState,
) => {
  const {
    userData: { username },
  } = getState().user
  try {
    const { responseCode, data: response } = await axios.post(
      '/profile/get_all_user',
      {
        pageNum,
        pageSize: 1000000000000,
        username,
      },
    )
    if (responseCode === 200) dispatch(altUserLists(response))
    return { responseCode, response }
  } catch ({ response }) {
    handleError(response)
  }
}

export const bulkUploadUser = (data) => async (dispatch, getState) => {
  const {
    userData: { username },
  } = getState().user

  try {
    const { responseCode, responseMessage, data: response } = await axios.post(
      'profile/bulk_profile_upload',
      {
        username,
        ...data,
      },
    )
    await dispatch(listAllUser(1, 10))
    return { responseCode, response, responseMessage }
  } catch ({ response }) {
    handleError(response)
  }
}

export const singleUserCreate = (data) => async (dispatch, getState) => {
  const {
    userData: { username },
  } = getState().user
  try {
    const { responseCode, responseMessage } = await axios.post(
      '/profile/create_user_profile',
      {
        ...data,
        username,
      },
    )
    await dispatch(listAllUser(1, 10))
    return { responseCode, responseMessage }
  } catch ({ response }) {
    handleError(response)
  }
}

export const editUserData = (data) => async (dispatch, getState) => {
  // need toc eate an end point
  // const {
  //   userData: { username },
  // } = getState().user
  // try {
  //   const { responseCode, responseMessage } = await axios.post(
  //     '/profile/create_user_profile',
  //     {
  //       ...data,
  //       username,
  //     },
  //   )
  //   return { responseCode, responseMessage }
  // } catch ({ response }) {
  //   handleError(response)
  // }
}

export const manageProfile = (data, page, totalRow) => async (
  dispatch,
  getState,
) => {
  const {
    userData: { username },
  } = getState().user
  try {
    const {
      responseCode,
      responseMessage,
      data: response,
    } = await axios.post('profile/manage_profiles', { ...data, username })
    // I need to update the use data hee

    if (responseCode === 200) await dispatch(listAllUser(page, totalRow))

    return { responseCode, responseMessage, response }
  } catch ({ response }) {
    handleError(response)
  }
}
