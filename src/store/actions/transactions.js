import { axios, handleError } from '../../lib'
import { ALT_TRANSACTION_LISTS } from '../types'

const altTransacionLists = (data) => ({
  type: ALT_TRANSACTION_LISTS,
  data,
})

export const listAllTransactions = (pageNum, pageSize) => async (
  dispatch,
  getState,
) => {
  const {
    userData: { username },
  } = getState().user
  try {
    const { responseCode, data: response } = await axios.post(
      '/transaction/list_transaction',
      {
        username,
        pageNum,
        pageSize: 10000000,
      },
    )
    console.log({ responseCode, response }, 'sdjksdjsdkj')
    if (responseCode === 200) {
      dispatch(altTransacionLists(response))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const queryTransacion = (data) => async (dispatch, getState) => {
  const {
    userData: { username },
  } = getState().user
  try {
    const { responseCode, responseMessage } = await axios.post(
      '/transaction/transaction_status',
      {
        ...data,
        username,
      },
    )
    // if (responseCode === 200) await dispatch(listAllTransacion())
    return {
      responseCode,
      responseMessage,
    }
  } catch ({ response }) {
    handleError(response)
  }
}
