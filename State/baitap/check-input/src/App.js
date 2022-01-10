import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyPressed: ''
    }
  }

  handlePress = (e) => {
    console.log(e);
    this.setState({ keyPressed: e.key })
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>Key Pressed: {this.state.keyPressed}</p>
        <input 
          type="text"
          onKeyPress={(e) => this.setState({keyPressed: e.key})}
        />
      </div>
    )
  }
}

export default App;
