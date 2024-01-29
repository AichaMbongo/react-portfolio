import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Carousel from './components/Carousel';
import { SectionLight, SectionDark }  from './components/section';

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
      
      <SectionLight
        id="section1"
        title="About Me"
        imageSrc="/laptop.jpeg"
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
      
      <SectionDark
  id="section2"
  title="Work Experience"
  imageSrc1="/atlancis.jpg"  
  imageSrc2="/atlancis2.jpg"  
  description={
    <>
      <b>DevOps intern at ATLANCIS Technologies</b>
      <br />
      January 2023 - April 2023
      <br />
      <br />
      My internship experience as a DevOps intern at Atlancis has been invaluable in 
      my professional development as a future IT specialist. Collaborating with colleagues,
      I navigated various tools and platforms, including GitHub, GitLab, Ubuntu, and popular 
      web frameworks like Django and React. My practical experience encompasses deployment automation, 
      containerization, continuous integration and deployment (CI/CD), and cloud computing - crucial skills for 
      a DevOps engineer.
      <br />
      <br />
      <b>Volunteer teacher at All Saints Primary School - Nairobi, Kenya</b>
      <br />
      January 2021 - April 2021
      <br />
      <br />
      Taught students cognitive, linguistic, and emotional development to 
      promote well-roundedness.
    </>
  }
  />
     

     
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
