import React, { Component } from 'react';
<<<<<<< HEAD

import Navbar from './components/Navbar';
import Contact from './components/Contact';
=======
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
>>>>>>> f2a6cf76f9ad1f9b29560893fb74dc2cb0e284dd

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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
