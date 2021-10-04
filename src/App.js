import './App.css';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound'
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/Services">
            <Services></Services>
          </Route>
          <Route path="/About">
            <About></About>
          </Route>
          <Route path="/Contact">
            <Contact></Contact>
          </Route>
          <Route path="">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
