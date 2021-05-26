const capitalize = (data) => {
  if (data) {
    return data.slice(0, 1).toUpperCase() + data.slice(1, data.length)
  } else {
    return null
  }
}

export default capitalize
