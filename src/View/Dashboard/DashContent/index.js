import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, NavLink, useLocation } from 'react-router-dom'
import { useQuery } from '../../../hooks'
import MapDash from './MapDash'
import ContactDash from './ContactDash'
// import { CompanyProfile, ResetPassword } from '../../View'
import Container from './styles'

const Settings = () => {
  const { pathname, search } = useLocation()
  let query = useQuery().get('tab')
  console.log(query, 'sdksldksdlk')
  const content = () => {
    switch (query) {
      case 'contact':
        return <ContactDash />
      case 'map':
        return <MapDash />
      default:
        return null
    }
  }
  return (
    <Container>
      <div className="top--bar">
        <h3 className="u--typo__title">Dashboard</h3>
      </div>
      <div className="settings--container">
        <header>
          <NavLink
            to="/dashboard/?tab=contact"
            className={
              `${pathname}${search}` === '/dashboard/?tab=contact'
                ? 'selected'
                : null
            }
          >
            Contacts
          </NavLink>
          <NavLink
            to="/dashboard/?tab=map"
            className={
              `${pathname}${search}` === '/dashboard/?tab=map'
                ? 'selected'
                : null
            }
          >
            Map
          </NavLink>
        </header>
        <div className="content--container" name="setting--form">
          {content()}
        </div>
      </div>
    </Container>
  )
}

export default Settings
