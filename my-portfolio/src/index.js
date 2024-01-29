
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Carousel from './components/Carousel';
import ImageCard  from './components/ImageCard';
import { SingleImageTextSection, DoubleImageTextSection, PlainLightSection }  from './components/section';
import React, { useState } from 'react';
import './index.css'; 
const App = () => {

  const images = [
    { id: 1, src: '/back2.png', alt: 'Image 1' },
    { id: 2, src: '/back1.png', alt: 'Image 2' },
    { id: 3, src: '/back3.png', alt: 'Image 3' },
  ];
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = (cardId) => {
    const dots = document.getElementById(`dots-${cardId}`);
    const moreText = document.getElementById(`more-${cardId}`);
    const btnText = document.getElementById(`readMoreBtn-${cardId}`);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      moreText.style.display = "inline";
    }
  };

  return (
    <div>
      <Navbar />
      
      <Carousel images={images} />
      
      <SingleImageTextSection
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
      
      <DoubleImageTextSection
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



      <PlainLightSection id="Section3" title="My Projects">
      <SingleImageTextSection
              
            
              imageSrc="/CVDetect.png"
              description="   Developed a Cardiovascular Disease Prediction System, 
              leveraging Python, Django, and machine learning algorithms for enhanced diagnostic 
              accuracy. As the project lead and developer, successfully integrated diverse technologies
               into a user-friendly web platform, enabling healthcare professionals to predict and 
               manage cardiovascular diseases officiently."
              link="https://example.com/project1"
               
            />

        <ImageCard
          imageSrc="/FreshFields.png"
          title="Project 1"
          description={
            <>
            Fresh Fields marked one of my initial projects, serving as an ecommerce 
                  <span id="dots-5">...</span>
                  <span id="more-5" className="hidden">
                    platform designed specifically for rural farmers. Developed using PHP and HTML, the web platform utilized a MariaDB (SQL database) to meet its objectives.
                  </span>
                  <a id="readMoreBtn-5" onClick={() => setIsExpanded(!isExpanded)} className="text-primary">
              {isExpanded ? 'Read Less' : 'Read More'}
            </a>            
            </>
          }
          link="https://example.com/project1"
        />
        <ImageCard
          imageSrc="/Rpubs.png"
          title="Project 2"
          description={
            <>
            I led a Data science project, focusing on exploratory data analysis, 
                  <span id="dots-2">...</span>
                  <span id="more-2" className="hidden">
                    preprocessing, model training, and hyper-parameter tuning.
                    The project involved loading datasets, performing statistical analysis, creating visualizations,
                    and applying various data transformations. Additionally, I trained and evaluated multiple models,
                    conducted hyper-parameter tuning using a "Random Search," and implemented ensemble methods like Bagged CART.
                    The final consolidation included the development of a Plumber API and PHP output for effective model deployment.
                  </span>
                  <a id="readMoreBtn-2" onClick={() => setIsExpanded(!isExpanded)} className="text-primary">
                  {isExpanded ? 'Read Less' : 'Read More'}
                </a>
                  </>
          }
          link="https://example.com/project2"
        />
           <ImageCard
          imageSrc="/myadvert.png"
          title="Project 2"
          description={
            <>
            I conducted an eMarketing initiative for "Just For You Studio," a salon based in the Strathmore
            <span id="dots-4">...</span>
            <span id="more-4" style={{ display: isExpanded ? 'inline' : 'none' }}>
              University student center. The project focused on enhancing visibility, driving sales, and fostering customer retention.
              My responsibilities included designing a website prototype and creating salon advertisements using multimedia tools like
              Adobe, Canva, and CapCut.
            </span>
            <a id="readMoreBtn-4" onClick={() => setIsExpanded(!isExpanded)} className="text-primary">
              {isExpanded ? 'Read Less' : 'Read More'}
            </a>
            
          </>

          }
  
           
          
          link="https://example.com/project2"
        />
            <ImageCard
              imageSrc="/SUAttachment.png"
              title="Project 2"
              description={
                <>
                  I spearheaded a project to enhance Strathmore's student attachment portal.
                  <span id="dots-1">...</span>
                  <span id="more-1" className="hidden">
                    I played a pivotal role in defining the system requirements and implementing improvements.
                    Utilizing the Trello project management tool, I efficiently mapped out the entire project trajectory.
                  </span>
                  <a id="readMoreBtn-1" onClick={() => toggleText(1)} className="text-primary">
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </a>
                  <br />
                </>
              }
              link="https://example.com/project2"
            />
        </PlainLightSection>
        
     

     
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
