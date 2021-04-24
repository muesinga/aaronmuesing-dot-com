import Header from './Header/Sidebar'
import About from './About/About'
import Landing from './Home/Landing'
import Catalog from './Music/Catalog'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

import { Switch, Route, Redirect } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <Header />
      </section>
      <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/catalog">
            <Catalog />
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
