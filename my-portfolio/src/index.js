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
      
      <Section
        id="section1"
        title="About Me"
        imageSrc="/back1.png"
        description="Hello, I'm Myriam Aicha Mbongo-zindamoyen, a BBIT graduate from Strathmore 
        University with a strong focus on Business and IT. As a creative junior front-end developer,
        I'm passionate about delivering exceptional user experiences and expanding my skills in full-stack
         development. I have hands-on experience in Business Intelligence, specifically in DataOps, and have 
         delved into the realm of Machine Learning. My interest in AI extends to several projects I've undertaken, 
         showcasing my dedication to exploring the cutting-edge intersections of technology. Having undertaken various
          leadership roles, I've honed not only technical skills but also effective communication and team management. 
          Beyond technology, I'm a singer, painter, and hiking enthusiast, showcasing a diverse range of talents
           including video editing, and restoration crafts. Let's connect and explore the exciting intersections 
           of technology, creativity, and business!"
      />

     

     
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
