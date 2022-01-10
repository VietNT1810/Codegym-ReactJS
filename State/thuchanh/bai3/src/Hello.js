import React from "react";

class Hello extends React.Component {
    componentWillUnmount() {
        alert('The component is going to be unmounted')
    }

    render() {
        return <h1>Hello everyone!</h1>
    }
}

export default Hello;