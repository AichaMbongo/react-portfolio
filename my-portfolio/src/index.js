import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Carousel from './components/Carousel';
import Section from './components/section';

const App = () => {

  const images = [
    { id: 1, src: '/back2.png', alt: 'Image 1' },
    { id: 2, src: '/back1.png', alt: 'Image 2' },
    { id: 3, src: '/back3.png', alt: 'Image 3' },
  ];

  return (
    <div>
      <Navbar />
      
      <Carousel images={images} />
      

     

     
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
