import BackgroundSketch from './BackgroundSketch'
import { Outlet, NavLink } from 'react-router-dom'

const sections = ["bio", "o-death", "ngn", "experiments"]

const Base = () => {
  const baseNavClasses = "navitem nav-link"
  return (
    <div className="app">
      <div className="background">
        <BackgroundSketch className="background"/>
      </div>
      <nav>
        { sections.map( section => (
          <NavLink to={section} key={section} className={({ isActive }) => isActive ? baseNavClasses + " nav-active" : baseNavClasses}>
            {section.replace("-", " ")}
          </NavLink>
        ))}
        <h1 className="header-name">santiago<br/>quintana</h1>
      </nav>
      <section className="content-wrapper">
        <Outlet />
      </section>
    </div>
  );
}

export default Base
