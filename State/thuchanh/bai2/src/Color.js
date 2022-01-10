import React from "react";

class Color extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'black'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ color: 'pink' })
        }, 5000);
    }

    render() { 
        return(
            <div>
                <div
                    style={{
                        backgroundColor: this.state.color,
                        width: 100 + 'px',
                        height: 100 + 'px',
                        margin: 'auto',
                        marginTop: 10 + 'px'
                    }}
                ></div>
            </div>
        )
    }
}

export default Color;