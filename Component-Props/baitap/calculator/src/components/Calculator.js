import React from 'react';
import Input from './Input'
import Button from './Button'

class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            firstNumber: 0,
            secondNumber: 0,
            // operator: null,
            displayValue: ''
        }
    };

    //Ham tinh toan
    Calculate = (operator) => {
        switch (operator) {
            case '+': this.setState({ displayValue: parseFloat(this.state.firstNumber) + parseFloat(this.state.secondNumber) }); break;
            case '-': this.setState({ displayValue: parseFloat(this.state.firstNumber) - parseFloat(this.state.secondNumber) }); break;
            case '*': this.setState({ displayValue: parseFloat(this.state.firstNumber) * parseFloat(this.state.secondNumber) }); break;
            case '/': this.setState({ displayValue: parseFloat(this.state.firstNumber) / parseFloat(this.state.secondNumber) }); break;
            default: this.setState({displayValue: 'Invalid value'}); break;    
        }
    }

    render() {
        return (
            <div>
                <Input type='number' onChange={(e) => { this.setState({ firstNumber: e.target.value }) }} placeholder='Enter first number' />
                <br></br>
                <Input type='number' onChange={(e) => { this.setState({ secondNumber: e.target.value }) }} placeholder='Enter second number' />
                <br></br>
                <Button onClick={() => { this.Calculate('+') }} label='+'></Button>
                <Button onClick={() => { this.Calculate('-') }} label='-'></Button>
                <Button onClick={() => { this.Calculate('*') }} label='*'></Button>
                <Button onClick={() => { this.Calculate('/') }} label='/'></Button>
                <p>Result: {this.state.displayValue}</p>
            </div>
        );
    }

}

export default Calculator;