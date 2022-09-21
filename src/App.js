import './App.css';
import { useState } from 'react'

const Bio = () => (
  <>
    <h2>bio</h2>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis orci sit amet risus porta tincidunt id quis risus. Praesent id convallis metus, vitae pharetra erat. Vestibulum ultricies ornare semper. Morbi lobortis tristique quam. Nullam congue ullamcorper finibus. Mauris vitae nunc vel eros euismod ullamcorper. Sed ut rhoncus velit. Fusce tristique id neque a euismod. Integer libero sapien, vestibulum eget eros et, porttitor interdum ex. Morbi euismod, dolor vitae mollis accumsan, urna neque porta magna, a semper turpis eros eu lacus. Vestibulum at nisi mi. Proin venenatis orci sed velit semper ornare. Maecenas pellentesque justo tellus, sit amet maximus orci pulvinar sed. Ut at mi eleifend, ultrices ex pharetra, luctus ex.

  Proin non purus et nibh suscipit auctor. Sed eu justo eu nibh scelerisque sagittis. Aliquam leo lorem, venenatis non dui quis, faucibus consectetur metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin feugiat ut dui ut accumsan. Etiam eu leo justo. Praesent ultrices tempor metus, ac eleifend augue molestie vitae. Sed aliquam enim at lorem auctor sollicitudin. Aliquam gravida felis quis aliquet ullamcorper. Sed auctor sed nunc semper varius. Proin placerat bibendum ornare. </p>
  </>
)

const ODeath = () => (
  <>
    <h2>o death</h2>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis orci sit amet risus porta tincidunt id quis risus. Praesent id convallis metus, vitae pharetra erat. Vestibulum ultricies ornare semper. Morbi lobortis tristique quam. Nullam congue ullamcorper finibus. Mauris vitae nunc vel eros euismod ullamcorper. Sed ut rhoncus velit. Fusce tristique id neque a euismod. Integer libero sapien, vestibulum eget eros et, porttitor interdum ex. Morbi euismod, dolor vitae mollis accumsan, urna neque porta magna, a semper turpis eros eu lacus. Vestibulum at nisi mi. Proin venenatis orci sed velit semper ornare. Maecenas pellentesque justo tellus, sit amet maximus orci pulvinar sed. Ut at mi eleifend, ultrices ex pharetra, luctus ex.

  Proin non purus et nibh suscipit auctor. Sed eu justo eu nibh scelerisque sagittis. Aliquam leo lorem, venenatis non dui quis, faucibus consectetur metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin feugiat ut dui ut accumsan. Etiam eu leo justo. Praesent ultrices tempor metus, ac eleifend augue molestie vitae. Sed aliquam enim at lorem auctor sollicitudin. Aliquam gravida felis quis aliquet ullamcorper. Sed auctor sed nunc semper varius. Proin placerat bibendum ornare. </p>
  </>
)

const Ngn = () => (
  <>
    <h2>ngn</h2>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis orci sit amet risus porta tincidunt id quis risus. Praesent id convallis metus, vitae pharetra erat. Vestibulum ultricies ornare semper. Morbi lobortis tristique quam. Nullam congue ullamcorper finibus. Mauris vitae nunc vel eros euismod ullamcorper. Sed ut rhoncus velit. Fusce tristique id neque a euismod. Integer libero sapien, vestibulum eget eros et, porttitor interdum ex. Morbi euismod, dolor vitae mollis accumsan, urna neque porta magna, a semper turpis eros eu lacus. Vestibulum at nisi mi. Proin venenatis orci sed velit semper ornare. Maecenas pellentesque justo tellus, sit amet maximus orci pulvinar sed. Ut at mi eleifend, ultrices ex pharetra, luctus ex.

  Proin non purus et nibh suscipit auctor. Sed eu justo eu nibh scelerisque sagittis. Aliquam leo lorem, venenatis non dui quis, faucibus consectetur metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin feugiat ut dui ut accumsan. Etiam eu leo justo. Praesent ultrices tempor metus, ac eleifend augue molestie vitae. Sed aliquam enim at lorem auctor sollicitudin. Aliquam gravida felis quis aliquet ullamcorper. Sed auctor sed nunc semper varius. Proin placerat bibendum ornare. </p>
  </>
)

const Noise = () => (
  <>
    <h2>noise</h2>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis orci sit amet risus porta tincidunt id quis risus. Praesent id convallis metus, vitae pharetra erat. Vestibulum ultricies ornare semper. Morbi lobortis tristique quam. Nullam congue ullamcorper finibus. Mauris vitae nunc vel eros euismod ullamcorper. Sed ut rhoncus velit. Fusce tristique id neque a euismod. Integer libero sapien, vestibulum eget eros et, porttitor interdum ex. Morbi euismod, dolor vitae mollis accumsan, urna neque porta magna, a semper turpis eros eu lacus. Vestibulum at nisi mi. Proin venenatis orci sed velit semper ornare. Maecenas pellentesque justo tellus, sit amet maximus orci pulvinar sed. Ut at mi eleifend, ultrices ex pharetra, luctus ex.

  Proin non purus et nibh suscipit auctor. Sed eu justo eu nibh scelerisque sagittis. Aliquam leo lorem, venenatis non dui quis, faucibus consectetur metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin feugiat ut dui ut accumsan. Etiam eu leo justo. Praesent ultrices tempor metus, ac eleifend augue molestie vitae. Sed aliquam enim at lorem auctor sollicitudin. Aliquam gravida felis quis aliquet ullamcorper. Sed auctor sed nunc semper varius. Proin placerat bibendum ornare. </p>
  </>
)

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
        { Object.keys(sections).map( section => (<button className="navitem" onClick={() => handleNavigation(section)}>{section}</button>)) }
        <h1 className="header-name">santiago<br/>quintana</h1>
      </nav>
      <section className="content-wrapper">
        <SectionComponent />
      </section>
    </div>
  );
}

export default App;
