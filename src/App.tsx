import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';

function App() {

  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);

  const total = useSelector((state: State) => state.bank);

  const [input, setInput] = useState('0');

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value.replace(/^0+/, '');
    setInput(value);
  }

  return (
    <div className="App">
      <h1>{total}</h1>
      <input type='number' value={input} onChange={handleInputChange} />
      <button onClick={() => {
        depositMoney(+input);
        setInput('0');
      }}>Deposit</button>
      <button onClick={() => {
        withdrawMoney(+input);
        setInput('0');
      }}>Withdraw</button>
      <button onClick={() => {
        bankrupt();
        setInput('0');
      }}>Bankrupt</button>
    </div>
  );
}

export default App;
