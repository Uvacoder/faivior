const initState = {
  userData: '',
  authenticated: false,
  permissions: '',
  company: '',
  userLists: '',
  productLists: '',
  groupLists: '',
  modelLists: '',
  companyLists: '',
  transactionLists: '',
  fraudCaseLists: '',
  deviceLists: '',
}

const UserState = (state = initState, action) => {
  const { type, data } = action
  switch (type) {
    case 'LOGOUT':
      return initState
    case 'ALT_USER_DATA':
      return { ...state, userData: data }
    case 'ALT_USER_PERMISSION_DATA':
      return { ...state, permissions: data }
    case 'ALT_COMPANY_DATA':
      return { ...state, company: data }
    case 'ALT_AUTH_STATE':
      return { ...state, authenticated: data }
    case 'ALT_USER_LISTS':
      return { ...state, userLists: data }
    case 'ALT_PRODUCT_LISTS':
      return { ...state, productLists: data }
    case 'ALT_GROUP_LISTS':
      return { ...state, groupLists: data }
    case 'ALT_MODAL_LISTS':
      return { ...state, modelLists: data }
    case 'ALT_COMPANY_LISTS':
      return { ...state, companyLists: data }
    case 'ALT_TRANSACTION_LISTS':
      return { ...state, transactionLists: data }
    case 'ALT_FRAUD_CASES':
      return { ...state, fraudCaseLists: data }
    case 'ALT_DEVICE_LISTS':
      return { ...state, deviceLists: data }
    default:
      return state
  }
}

export default UserState
