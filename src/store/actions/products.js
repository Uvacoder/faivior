import { axios, handleError } from '../../lib'
import { ALT_PRODUCT_LISTS } from '../types'

const altProductLists = (data) => ({
  type: ALT_PRODUCT_LISTS,
  data,
})

export const listAllProducts = () => async (dispatch, getState) => {
  const {
    userData: { username },
  } = getState().user
  try {
    const {
      responseCode,
      data: response,
    } = await axios.post('/product/get_products', { username })
    if (responseCode === 200) {
      dispatch(altProductLists(response))
    }
    return {
      responseCode,
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const addProducts = (data) => async (dispatch, getState) => {
  const {
    userData: { username },
  } = getState().user
  try {
    const {
      responseCode,
      responseMessage,
    } = await axios.post('/product/create_product', { ...data, username })
    return {
      responseCode,
      responseMessage,
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const manageProducts = (data) => async (dispatch, getState) => {
  const {
    userData: { username },
  } = getState().user
  try {
    const {
      responseCode,
      responseMessage,
    } = await axios.post('/product/manage_product', { ...data, username })
    if (responseCode === 200) {
      await dispatch(listAllProducts())
    }
    return {
      responseCode,
      responseMessage,
    }
  } catch ({ response }) {
    handleError(response)
  }
}
