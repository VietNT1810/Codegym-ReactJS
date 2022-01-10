import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true })
  }

  handleLogout = () => {
    this.setState({ isLoggedIn: false })
  }

  render() {

    if (this.state.isLoggedIn) {
      return (<Home onLogOut={this.handleLogout} />)
    } else {
      return (
        <div style={{ textAlign: 'center' }}>
          <div>
            <h1>Please Log in</h1>
            <button onClick={this.handleLogin}>Log in</button>
          </div>
        </div>
      )
    }
  }
}

export default App;
