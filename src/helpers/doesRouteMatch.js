const doesRouteMatch = (pathname, route) => {
  // if (typeof pathname === 'string' && typeof route === 'string') {
  //   return pathname.includes(route)
  // } else
  if (typeof pathname === 'object') {
    return pathname.some((r) => route.split('/').includes(r.replace(/\//g, '')))
  } else {
    return route.split('/').includes(pathname.replace(/\//g, ''))
  }
}

export default doesRouteMatch
