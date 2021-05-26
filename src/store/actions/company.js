import { axios, handleError } from '../../lib'
import { ALT_COMPANY_LISTS } from '../types'

const altCompanyLists = (data) => ({
  type: ALT_COMPANY_LISTS,
  data,
})

export const listAllCompany = () => async (dispatch, getState) => {
  const {
    company,
    userData: { username, admin },
  } = getState().user
  if (admin) {
    try {
      const {
        responseCode,
        data: response,
      } = await axios.post('/auth/get_all_company', { username })
      console.log({ responseCode, response }, 'Sdsjdksdskj')
      if (responseCode === 200) {
        dispatch(altCompanyLists(response))
      }
      return { responseCode, response }
    } catch ({ response }) {
      handleError(response)
    }
  } else {
    dispatch(altCompanyLists([{ ...company }]))
  }
}

export const uploadCompanyImg = async (data) => {
  try {
    const { responseMessage, requestID, responseCode } = await axios.post(
      'product/upload_image',
      data,
    )
    return { responseMessage, requestID, responseCode }
  } catch ({ response }) {
    handleError(response)
  }
}

export const uploadCompanyImg2 = (data) => async (dispatch, getState) => {
  const {
    userData: { username },
  } = getState().user

  const formData = new FormData()
  formData.append('image', data.image)
  formData.append('image2', data.image2)
  formData.append('username', username)
  try {
    const response = await axios.post('auth/imageuploader', formData)
    return response
  } catch ({ response }) {
    handleError(response)
  }
}

export const activateCompany = (data) => async (dispatch, getState) => {
  const {
    userData: { username },
    company: { company_code },
  } = getState().user
  try {
    console.log(
      {
        username,
        ...data,
        company_code,
      },
      'sdkjsdjdkj',
    )
    const { responseCode, responseMessage, data: response } = await axios.post(
      '/auth/activate_company',
      {
        username,
        ...data,
        company_code,
      },
    )

    // if (responseCode === 200) {
    //   dispatch(altCompanyLists(response))
    // }
    console.log({ responseCode, responseMessage, response }, 'Sdjsdkjdkdjskjd')
    return { responseCode, responseMessage, response }
  } catch ({ response }) {
    handleError(response)
  }
}

export const addCompany = (data) => async (dispatch, getState) => {
  const {
    userData: { username },
  } = getState().user
  try {
    const {
      responseCode,
      responseMessage,
    } = await axios.post('/auth/manage_roles', { ...data, username })
    if (responseCode === 200) await dispatch(listAllCompany())
    return {
      responseCode,
      responseMessage,
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const manageCompany = ({ company_code, action, website }) => async (
  dispatch,
  getState,
) => {
  const {
    userData: { username },
  } = getState().user
  try {
    const { responseCode, responseMessage } = await axios.post(
      '/auth/update_company',
      {
        company_code,
        action,
        website,
        username,
      },
    )
    if (responseCode === 200) {
      await dispatch(listAllCompany())
    }
    return { responseCode, responseMessage }
  } catch ({ response }) {
    handleError(response)
  }
}
