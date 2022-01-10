import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      item: ''
    }
  }

  handleChange = (e) => {
    this.setState({ item: e.target.value })
  }

  handleAdd = () => {
    if (this.state.item) {
      let newLists = this.state.lists;
      newLists.push(this.state.item);
      this.setState({ lists: newLists, item: '' })
    }
  }

  render() {
    const { lists, item } = this.state;
    console.log(item);
    console.log(lists);

    return (
      <div style={{ padding: 30 }}>
        <input
          type='text'
          value={item}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAdd}>Add</button>
        <ul>
          {lists.map((list, index) => {
            return <li key={index}>{list}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App;
