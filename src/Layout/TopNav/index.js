import React, { useState, useEffect, useRef } from 'react'
import { FiMenu } from 'react-icons/fi'
import { Button } from '../../UI'
import contact from '../../assets/blank-staff-circle-male.png'
import Container from './styles'

const TopNav = ({ handleAltNavDisplay, showSideNav }) => {
  const popUpRef = useRef(null)
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
      <div className="col--1">
        <Button
          icon
          arial-label={showSideNav ? 'open menu' : 'close menu'}
          onClick={handleAltNavDisplay}
        >
          <FiMenu />
        </Button>
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
          Hello Demo
        </Button>
      </div>
    </Container>
  )
}

export default TopNav
