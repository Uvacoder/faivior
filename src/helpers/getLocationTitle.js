const getLocationTitle = (path) => {
  const paths = path.split('/')
  const index = paths.findIndex((s) => s === 'dashboard')

  const title = paths[index + 1] ? paths[index + 1] : paths[index]
  return title[0].toUpperCase() + title.slice(1, title.lenght)
}

export default getLocationTitle
