import './App.css';
import { useState } from 'react'
import { Bio, ODeath, Ngn, Noise } from './Sections'

const sections = {
  bio: Bio,
  "o death": ODeath,
  ngn: Ngn,
  noise: Noise,
}

const App = () => {

  const [selectedSection, setSelectedSection] = useState("")

  const handleNavigation = (section) => {
    setSelectedSection(section)
  }

  const SectionComponent = sections[selectedSection]

  return (
    <div className="app">
      <nav>
        { Object.keys(sections).map( section => (<button key={section} className="navitem" onClick={() => handleNavigation(section)}>{section}</button>)) }
        <h1 className="header-name">santiago<br/>quintana</h1>
      </nav>
      <section className="content-wrapper">
        { selectedSection && <SectionComponent />}
      </section>
    </div>
  );
}

export default App;
