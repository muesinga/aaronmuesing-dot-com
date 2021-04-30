import NavBar from './NavBar/NavBar'
import About from './About/About'
import Landing from './Landing/Landing'
import MusicContainer from './Catalog/MusicContainer'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

import music from './Data/music-data'

import { Switch, Route, Redirect } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <NavBar />
      </section>
      <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/catalog">
            <MusicContainer music={music} />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/*">
            <Redirect
              to={{
                pathname: '/',
              }} />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
