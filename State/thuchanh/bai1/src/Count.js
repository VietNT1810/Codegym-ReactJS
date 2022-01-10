import React from "react";

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increase = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrease = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div>
                <button onClick={this.increase}>Increase</button>
                <span style={{padding: 10}}>{this.state.count}</span>
                <button onClick={this.decrease}>Decrease</button>
            </div>
        )
    };
}

export default Count;