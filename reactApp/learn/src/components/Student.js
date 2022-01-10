import React from 'react';
class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Viet',
            age: 23,
        }
    }

    modifyName = () => {
        this.setState({ name: 'Minh' })
    }

    render() {
        return (
            <div>
                {this.state.name} - {this.state.age};
                <hr></hr>
                <button onClick={this.modifyName}>click</button>
            </div>
        )
    }
}

export default Student;