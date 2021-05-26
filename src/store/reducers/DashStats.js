const initState = ''

const Dashboard = (state = initState, action) => {
  const { type, data } = action
  switch (type) {
    case 'ALT_DASH_STATS':
      return data
    case 'CLEAR_DASHBOARD':
      return initState
    default:
      return state
  }
}

export default Dashboard
