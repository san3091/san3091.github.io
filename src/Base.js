import BackgroundSketch from './BackgroundSketch'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import { useState } from 'react'

const sections = ["bio", "o-death", "ngn", "experiments"]

const Base = () => {

  const [showNav, setShowNav] = useState(true)

  const contentClassNames = `content-wrapper ${ showNav ? "hide" : "show" }`

  return (
    <div className="app">
      <div className="background">
        <BackgroundSketch className="background"/>
      </div>
      <Nav sections={sections} showNav={showNav} setShowNav={setShowNav}/>
      <section className={contentClassNames}>
        <Outlet />
      </section>
    </div>
  );
}

export default Base
