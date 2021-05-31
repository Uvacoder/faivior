const initState = {
  contactLists: [],
}

const Contact = (state = initState, action) => {
  const { type, data } = action
  switch (type) {
    case 'ALT_CONTACT_DATA':
      return {
        ...state,
        contactLists: data,
      }
    case 'ALT_ADDRESS_DATA':
      return {
        ...state,
        contactLists: data,
      }
    case 'CLEAR_DASHBOARD':
      return initState
    default:
      return state
  }
}

export default Contact
