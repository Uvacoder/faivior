import { axios, handleError } from '../../lib'
import Cookies from 'js-cookie'
import { listAllUser } from './users'
import { listAllProducts } from './products'
import { listAvailableModel, listAllGroup } from './group'
import { listAllCompany } from './company'
import { listDevices } from './devices'
import { listFraudCases } from './fraud'
import { listAllTransactions } from './transactions'
import {
  ALT_USER_DATA,
  ALT_COMPANY_DATA,
  ALT_USER_PERMISSION_DATA,
  ALT_AUTH_STATE,
  LOGOUT,
  CLEAR_DASHBOARD,
} from '../types'

const altUserData = (data) => ({
  type: ALT_USER_DATA,
  data,
})

const altUserPermission = (data) => ({
  type: ALT_USER_PERMISSION_DATA,
  data,
})

const altCompanyData = (data) => ({
  type: ALT_COMPANY_DATA,
  data,
})

export const altAuthState = (data) => ({
  type: ALT_AUTH_STATE,
  data,
})

export const logOutHander = () => async (dispatch) => {
  sessionStorage.clear()
  Cookies.remove('token')
  dispatch({
    type: LOGOUT,
  })
  dispatch({
    type: CLEAR_DASHBOARD,
  })
}

export const loginHandler = ({ username, pin }) => async (
  dispatch,
  getState,
) => {
  try {
    const {
      responseCode,
      responseMessage,
      firstname,
      admin,
      data: response,
    } = await axios.post('/auth/login', {
      username,
      pin,
    })
    if (responseCode === 200) {
      sessionStorage.clear()
      Cookies.set('token', response.authorization)
      dispatch(altUserData({ username, firstname, admin }))
      dispatch(altCompanyData(response.company))
      dispatch(altUserPermission(response.permission))
      await Promise.all([
        dispatch(listAllCompany()),
        dispatch(listDevices()),
        dispatch(listFraudCases()),
        dispatch(altAuthState(response.company.active ? true : 'notValidated')),
        dispatch(listAllGroup()),
        dispatch(listAllUser(1, 10)),
        dispatch(listAllProducts(1, 10)),
        dispatch(listAvailableModel()),
        dispatch(listAllTransactions(1, 10)),
      ])
    }
    return {
      responseCode,
      responseMessage,
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const initiateCompanyEnrolment = async ({ username, ...data }) => {
  try {
    const { responseCode, responseMessage, requestID } = await axios.post(
      '/auth/enrol_company_initiate',
      data,
    )
    return { responseCode, responseMessage, requestID }
  } catch ({ response }) {
    handleError(response)
  }
}

export const completeCompanyEnrolment = ({
  email,
  username,
  industry,
  company_name,
  phone,
  pin,
  ...rest
}) => async (dispatch, getState) => {
  try {
    const {
      responseCode,
      responseMessage,
    } = await axios.post('/auth/enrol_company_complete', { ...rest, pin })

    if (responseCode === 200) {
      await dispatch(
        loginHandler({
          username: phone,
          pin,
        }),
      )
    } else {
      return { responseCode, responseMessage }
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const initRestPassword = (data) => async (dispatch, getState) => {
  try {
    const { responseCode, responseMessage } = await axios.post(
      '/auth/request_reset_pin_otp',
      data,
    )
    return { responseCode, responseMessage }
  } catch ({ response }) {
    handleError(response)
  }
}

export const resetPin = (data) => async (dispatch, getState) => {
  try {
    const { responseCode, responseMessage, data: response } = await axios.post(
      '/auth/reset_pin',
      data,
    )
    console.log(
      { responseCode, responseMessage, data: response },
      'Sdjskdjskjd',
    )
  } catch ({ response }) {
    handleError(response)
  }
}

export const externalRequestPasswordOtp = (data) => async (
  dispatch,
  getState,
) => {
  try {
    const { responseCode, data: response } = await axios.post(
      '/auth/external_request_reset_password',
      data,
    )
  } catch ({ response }) {
    handleError(response)
  }
}
