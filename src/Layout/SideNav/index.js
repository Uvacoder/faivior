import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AiOutlineUserSwitch } from 'react-icons/ai'
import { BiHomeAlt } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'
import { Button } from '../../UI'
import logo from '../../assets/logo.png'
import Container from './styles'

const SideNav = ({
  isMobile,
  setDisplay,
  showSideNav,
  handleAltNavDisplay,
}) => {
  const {
    userData: { admin },
  } = useSelector((state) => state.user)
  const handleToggleSideBar = () => {
    if (isMobile && showSideNav) {
      setDisplay(false)
    }
  }
  return (
    <Container className="dashboard--side__nav">
      <header>
        <Button
          icon
          arial-label={showSideNav ? 'open menu' : 'close menu'}
          onClick={handleAltNavDisplay}
        >
          <FiMenu />
        </Button>
        <h2>Demo</h2>
        {/* <img src={logo} alt="PaySync" className="logo--img" /> */}
      </header>
      <nav>
        <ol>
          <li>
            <NavLink
              to="/dashboard/?tab=contact"
              exact={true}
              onClick={() => handleToggleSideBar()}
            >
              <BiHomeAlt />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/contact"
              onClick={() => handleToggleSideBar()}
            >
              <AiOutlineUserSwitch />
              Contact
            </NavLink>
          </li>
        </ol>
      </nav>
    </Container>
  )
}

export default SideNav
