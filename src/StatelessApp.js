import React from 'react';
import './App.css';

class App extends React.Component {
    render() {
      return (
        <div title="Your app">
          <Header/>
          <Content/>
          <Footer/>
        </div>
      );
    }
}

class Header extends React.Component {
  render() {
    return(
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return(
      <div>
        <h2>Content</h2>
        <p>Hello World!!</p>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return(
      <div>
        <h1>Footer</h1>
      </div>
    );
  }
}

export default App;
