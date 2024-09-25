import React from 'react';
import './App.css';
import CountryForm from './Components/CountryForm';

function App() {
  return (
    <div className='App'>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
      <CountryForm />
    </div>
  );
}

export default App;
