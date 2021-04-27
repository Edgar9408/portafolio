import './App.css';
import Nav from './components/Nav/index.jsx';
import Start from './components/Start/index.jsx';
import Profile from './components/Profile/index.jsx';
import Education from "./components/Education/index.jsx";
import Projects from './components/Projects/Projects.jsx'
import Skills from "./components/Skills/index.jsx";
import ContactMe from "./components/ContactMe/index.jsx";
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route
        path='/'
        render={() => <Nav />}
      />
      <Route
        exact
        path='/portafolio'
        render={() => <Start />}
      />
      <Route
        exact
        path='/profile'
        render={() => <Profile />}
      />
      <Route
        exact
        path='/education'
        render={() => <Education />}
      />
      <Route
        exact
        path='/projects'
        render={() => <Projects />}
      />
      <Route
        exact
        path='/skills'
        render={() => <Skills />}
      />
      <Route
        exact
        path='/contact'
        render={() => <ContactMe />}
      />
    </div>
  );
}

export default App;
