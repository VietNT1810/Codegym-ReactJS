import logo from "./logo.svg";
import React from "react";
import Hello from "./Hello"

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
  }

  delete = () => {
    this.setState({display: false})
  }

  render() {
    let temp;
    if (this.state.display) {
      temp = <Hello />
    }

    return (
      <div>
        {temp}
        <button onClick={this.delete}>Delete Component</button>
      </div>
    )
  }
}

export default App;
