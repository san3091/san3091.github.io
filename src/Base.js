import BackgroundSketch from './BackgroundSketch'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import { useState, useEffect} from 'react'

const sections = ["bio", "o-death", "ngn", "experiments"]

const Base = () => {

  const [showNav, setShowNav] = useState(true)
  const [mQuery, setMQuery] = useState({
  matches: window.innerWidth > 768 ? true : false,
  })

  useEffect(() => {
    let mediaQuery = window.matchMedia("(max-width: 600px)")
    mediaQuery.addListener(setMQuery)
    console.log(mediaQuery)

    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeListener(setMQuery)
  }, [])

  let contentClassNames = "content-wrapper"
  if (mQuery && !mQuery.matches) {
    contentClassNames += showNav ? " hide" : " show"
  }

  return (
    <div className="app">
      <div className="background">
        <BackgroundSketch className="background"/>
      </div>
      <Nav sections={sections} showNav={showNav} setShowNav={setShowNav} mQuery={mQuery}/>
      <section className={contentClassNames}>
        <Outlet />
      </section>
    </div>
  );
}

export default Base
