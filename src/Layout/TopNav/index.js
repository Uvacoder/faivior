import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { FiMenu } from 'react-icons/fi'
import { Button } from '../../UI'
import contact from '../../assets/blank-staff-circle-male.png'
import { capitalize } from '../../helpers'
import logo from '../../assets/logo2.png'
import Container from './styles'

const TopNav = ({ handleAltNavDisplay, showSideNav }) => {
  const popUpRef = useRef(null)
  const { pathname } = useLocation()
  const halmetTitle = pathname.split('/')[2]
    ? pathname.split('/')[2]
    : pathname.split('/')[1]
  const {
    company: { company_name },
  } = useSelector((state) => state.user)
  const [showPopUp, setDisplay] = useState(false)

  useEffect(() => {
    const profileImg = document.getElementById('profile--img')
    const profileBtn = document.getElementById('profile--btn')
    const handleHidePopMenu = ({ target }) => {
      if (
        !target.isSameNode(popUpRef.current) &&
        !target.isSameNode(profileImg) &&
        !target.isSameNode(profileBtn)
      ) {
        setDisplay(false)
      }
    }
    document.addEventListener('click', handleHidePopMenu)
    return () => {
      document.removeEventListener('click', handleHidePopMenu)
    }
  }, [])

  return (
    <Container>
      <Helmet>
        <title>
          PaySync Payrol {halmetTitle && `| ${capitalize(halmetTitle)}`}
        </title>
      </Helmet>
      <div className="col--1">
        <Button
          icon
          arial-label={showSideNav ? 'open menu' : 'close menu'}
          onClick={handleAltNavDisplay}
        >
          <FiMenu />
        </Button>
        {/* <img src={logo} alt="PaySync" className="logo--img" /> */}
      </div>
      <div className="col--2">
        <img
          src={contact}
          alt="profile"
          id="profile--img"
          className="profile--img"
          role={'button'}
          onClick={() => setDisplay(!showPopUp)}
        />
        <Button
          tertiary
          id="profile--btn"
          onClick={() => setDisplay(!showPopUp)}
        >
          {company_name && capitalize(company_name)}
        </Button>
      </div>
    </Container>
  )
}

export default TopNav
