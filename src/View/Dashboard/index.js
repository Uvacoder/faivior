import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { Contact } from '../index'
import { useMediaQuery } from 'react-responsive'
import Container from './styles'
import { TopNav, SideNav } from '../../Layout'
import DashContent from './DashContent'

const Dashboard = () => {
  const isMobile = useMediaQuery({ maxWidth: '953px' })
  const [showSideNav, setDisplay] = useState(isMobile ? false : true)

  useEffect(() => {
    if (isMobile) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  }, [isMobile])

  return (
    <Container>
      <TopNav
        {...{
          showSideNav,
          handleAltNavDisplay: () => setDisplay(!showSideNav),
        }}
      />
      <div className="app--content__container">
        <aside
          className={`app--aside__container ${
            showSideNav ? 'show--nav' : 'hide--nav'
          }`}
        >
          <SideNav
            {...{
              isMobile,
              setDisplay,
              showSideNav,
              handleAltNavDisplay: () => setDisplay(!showSideNav),
            }}
          />
        </aside>
        <main
          className={`app--main__container ${
            showSideNav ? 'show--nav' : 'hide--nav'
          }`}
        >
          <Route path="/dashboard" exact={true} component={DashContent} />
          <Route path="/dashboard/contact" component={Contact} />
        </main>
      </div>
    </Container>
  )
}

export default Dashboard
