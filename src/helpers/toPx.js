const toPx = (value = 0) => {
  return typeof value === 'number' && value === 0 ? 0 : `${value}px`
}

export default toPx
