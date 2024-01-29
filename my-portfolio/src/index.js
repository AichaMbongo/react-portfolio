import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Section from './components/section';

const App = () => {
  return (
    <div>
      <Navbar />
     
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
