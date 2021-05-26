import { axios, handleError } from '../../lib'
import { ALT_FRAUD_CASES } from '../types'

const altFraudCases = (data) => ({
  type: ALT_FRAUD_CASES,
  data,
})

export const listFraudCases = (pageNum, pageSize) => async (
  dispatch,
  getState,
) => {
  const {
    userData: { username },
  } = getState().user
  try {
    const { responseCode, data: response } = await axios.post(
      '/fraud/get_all_fraud',
      {
        username,
        pageNum,
        pageSize: 1000000,
      },
    )
    if (responseCode === 200) {
      dispatch(altFraudCases(response))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const addFraudCase = (data) => async (dispatch, getState) => {
  const {
    userData: { username },
  } = getState().user
  try {
    const {
      responseCode,
      responseMessage,
    } = await axios.post('/fraud/create_frauds_case', { ...data, username })
    if (responseCode === 200) await dispatch(listFraudCases())
    return {
      responseCode,
      responseMessage,
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const manageFraudCase = (data, pageNum, pageSize) => async (
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
    } = await axios.post('/fraud/manage_fraud_case', { ...data, username })

    if (responseCode === 200) {
      await dispatch(listFraudCases(pageNum, pageSize))
    }
    return { responseCode, responseMessage }
  } catch ({ response }) {
    handleError(response)
  }
}
