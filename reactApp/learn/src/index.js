import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './components/Welcome'
import AddComponent from "./components/AddComponent";
import Student from "./components/Student"
import reportWebVitals from './reportWebVitals';



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

class Hello extends React.Component {
    render() {
        return (
            <h1>Hello {this.props.name}</h1>
        )
    }
}


ReactDOM.render(
    <>
        <Student />
    </>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
