import React, { Component } from 'react';
import logo from '../images/logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img className="App-logo" src={logo} alt=""/>
          <h1>&#60;My React App Starter Setup &#47;&#62;</h1>
          <hr/>
          <br/>
          <div>
            <p>do <code>npm start</code> to start the development server</p>
            <p>do <code>npm run build</code> to start the production mode</p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
