
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Carousel from './components/Carousel';
import ImageCard  from './components/ImageCard';
import Skill  from './components/ProgressBar';
import ContactSection  from './components/ContactSection';
import { SingleImageTextSection, DoubleImageTextSection, PlainLightSection }  from './components/section';
import React, { useState } from 'react';
import './index.css'; 
const App = () => {

  const images = [
    { id: 1, src: '/back2.png', alt: 'Image 1' },
    { id: 2, src: '/back1.png', alt: 'Image 2' },
    { id: 3, src: '/back3.png', alt: 'Image 3' },
  ];

  const contact_images = '/aicha1.png'

  const contactDetails = [
    { iconSrc: '/phone.jpg', link: '#', value: '+254 770998729' },
    { iconSrc: '/gmail.png', link: 'mailto:zindamoyen2@gmail.com', value: 'zindamoyen2@gmail.com' },
    { iconSrc: '/linkedin.png', link: 'https://www.linkedin.com/in/aicha-myriam-mbongo-zindamoyen-3ab1a9263/', value: 'My LinkedIn Profile' },
    { iconSrc: '/tiktok.png', link: 'https://www.tiktok.com/@aicha_mbongo', value: 'My TikTok Profile' },
    // Add more contact details as needed
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = (cardId) => {
    const dots = document.getElementById(`dots-${cardId}`);
    const moreText = document.getElementById(`more-${cardId}`);
    const btnText = document.getElementById(`readMoreBtn-${cardId}`);

    if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      btnText.innerHTML = 'Read More';
      moreText.style.display = 'none';
    } else {
      dots.style.display = 'none';
      btnText.innerHTML = 'Read Less';
      moreText.style.display = 'inline';
    }
  };
  
  const skills = [
    { name: 'React.js', value: 80, color: '' },
    { name: 'Django Framework', value: 70, color: 'success' },
    { name: 'MySQL', value: 60, color: 'info' },
    { name: 'Chart Js', value: 75, color: 'warning' },
    { name: 'Git', value: 90, color: 'danger' },
    { name: 'R', value: 85, color: 'primary' },
    { name: 'AWS', value: 50, color: 'secondary' },
    { name: 'Trello Project Management', value: 85, color: 'info' },
    { name: 'Linux Ubuntu', value: 70, color: 'success' },
    { name: 'JavaScript', value: 80, color: 'warning' },
  ];
  
  const SkillsSection = () => (
    <section id="section5" className="container mt-4 bg-light col-md-12 mb-4">
      <div className="container mt-4 bg-transparent col-md-12 mb-4">
        <h2 className="text-center mb-4">My Skills</h2>
        <div className="row mb-4">
          {skills.map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );

 
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



      <PlainLightSection id="section3" title="My Projects">
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
        
     
        <SkillsSection />
        <ContactSection title="Reach Out to Me" imageSrc={contact_images} contacts={contactDetails} />     
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
