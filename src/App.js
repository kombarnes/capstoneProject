import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Attractions from './components/Attractions';
import Food from './components/Food';
import Arts from './components/Arts';
import Sports from './components/Sports';
import Theme from './components/Theme';
import Night from './components/Night';
import AddAttraction from './components/AddAttraction';
import AttractionsList from './components/AttractionsList';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/attractions' component={Attractions} />
            <Route path='/food' component={Food} />
            <Route path='/arts' component={Arts} />
            <Route path='/sports' component={Sports} />
            <Route path='/themeparks' component={Theme} />
            <Route path='/nightlife' component={Night} />
            <Route path='/addattraction' component={AddAttraction} />
            <Route path='/attractionslist' component={AttractionsList} />
            <Route path='/carousel' component={AttractionsList} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
