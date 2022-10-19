import hamburger from './img/hamburger.png'
import close from './img/close.png'
import { NavLink } from 'react-router-dom'

const Nav = ({ sections, showNav, setShowNav}) => {

  const baseNavClasses = "navitem nav-link"

  const toggleShow = () => {
    setShowNav(!showNav)
  }

  return (
    <>
      <div className="nav-mobile">
        <button onClick={toggleShow}><img src={showNav ? close : hamburger} alt="" /></button>
      </div>
      <nav className={showNav ? "show" : "hide"}>
        { sections.map( section => (
          <NavLink to={section} onClick={() => setShowNav(false)} key={section} className={({ isActive }) => isActive ? baseNavClasses + " nav-active" : baseNavClasses}>
            {section.replace("-", " ")}
          </NavLink>
        ))}
        <h1 className="header-name">santiago<br/>quintana</h1>
      </nav>
    </>
  )
}

export default Nav
