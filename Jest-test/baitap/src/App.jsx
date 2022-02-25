import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [valueOne, setValueOne] = useState('');
  const [valueTwo, setValueTwo] = useState('');
  const [sum, setSum] = useState(0);


  const add = () => {
    const result = parseFloat(valueOne) + parseFloat(valueTwo);
    setSum(result);
  };

  return (
    <form action="">
      <input type="number" name="valueOne" id="value-one-input" value={valueOne} onChange={e => { setValueOne(e.target.value) }} />
      <input type="number" name="valueTwo" id="value-two-input" value={valueTwo} onChange={e => { setValueTwo(e.target.value) }} />
      <button type="button" onClick={add}>Add</button>
      <p id="result">{sum}</p>
    </form>
  );
}


export default App;
