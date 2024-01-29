import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Carousel from './components/Carousel';
import Section from './components/section';

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />

     

     
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
