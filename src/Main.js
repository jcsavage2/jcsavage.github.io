import React, { createRef } from 'react';
import './Main.css';

//assets
import acea from './assets/ACEAScreenshot.png';
import orgadmin from './assets/orgadmin.png';
import uofm from './assets/uofm.jpg';
import piazza from './assets/piazza.png';
import otc from './assets/otc.png';
import tsp from './assets/tspimage.png';
import headshot from './assets/headshot.jpg';

//Component imports
import Project from './reusable/Project.js';
import Video from './reusable/Video.js';

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles({

  //LANDING STYLES
  introPanel:{
    width: '100%',
  },
  introFlex:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introText:{
    marginTop: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    marginBottom: '19rem',
  },
  headshot:{
    height: '12rem',
    marginLeft: '2rem',
    borderRadius: '3px',
    boxShadow: '10px, 10px, 5px, lightgrey',
    ['@media (max-width:700px)']: { 
      display: 'none',
    }
  },
  projectsPanel: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: '3rem',
  },
  musicPanel: {
    backgroundColor: "darkgrey",
    width: '100%',
    display: 'block',
    marginBottomn: '5rem',
  },
  contactContainer: {
    width: '100%',
  },
});

function Main(){

  const classes = useStyles();

  //Refs for scrolling to
  const homeRef = createRef();
  const projectsRef = createRef();
  const contactRef = createRef();

  //function used to scroll to a specific part of the page
  const smoothScrollTo = (id, offset) => {
    //ref.current.scrollIntoView({ block: "start", behavior: "smooth"});
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({top: y, behavior: 'smooth', block: 'start'});  
  }

  return (
    <>

    <div id="intro-div" className={`${classes.introPanel}`} ref={homeRef}>

      <ScrollAnimation 
        animateIn="fadeIn"
        animateOnce={true}
        duration={3}
      >
        
        <div className={`${classes.introFlex}`}>
        <div id="intro-text" className={`${classes.introText}`}>
        {/* <img className={`${classes.headshot}`} src={headshot}/> */}
          <div>
          <h1 id='intro-text-name'>Hey! I'm Jordan</h1>
          <h1 id='intro-text-bio'>I am a software engineer and classical saxophonist, currently pursuing a double major at the University of Michigan. </h1>
          </div>
          <div>
          <img className={`${classes.headshot}`} src={headshot} alt={"headshot"}/>
          </div>
        </div>
        </div>

      </ScrollAnimation>
  
    </div>
    <div id="projects-div" className={`${classes.projectsPanel}`} ref={projectsRef}>

      <ScrollAnimation 
        animateIn="fadeIn"
        animateOnce={true}
        duration={3}
      >
        <h1 className="panel-title">- My Experiences -</h1>
        <a href={require("./assets/jcsavageresume.pdf")} download="Jordan C Savage Resume" className="download-res-link">Download Resume</a>
      </ScrollAnimation>
       
      <ScrollAnimation 
        animateIn="fadeIn"
        animateOnce={true}
        duration={.5}
      >
        
        <Project
          className={`${classes.project}`}
          link={'https://app.myceapp.com/'}
          projectTitle={'Software Engineering Internship (Full Stack)'}
          orgTitle={"Advanced Continuing Education Association"}
          skills={"React JS, Java, SQL, Python, HTML, CSS, Javascript"}
          date={"Summer 2020"}
          img={acea}
          altImg={'ACEA My CE Webapp'}
          description={<p style={{lineHeight: '1.5rem'}}>In the midst of the global pandemic, I was lucky enough to find a role at the Advanced Continuing Education Association(ACEA) as part of their web development team. It was a largely self-directed internship in which I learned about React.JS, Java(Spring MVC), and helped launch products directly to ACEA’s customers.<br /> <br />My internship culminated with the completion of a continuing education filtering system that allows superadmins to selectively display continuing education opportunities depending on user preferences and license type(s).</p>}
        />  
      </ScrollAnimation>
      <ScrollAnimation 
        animateIn="fadeIn"
        animateOnce={true}
        duration={.5}
      >
      <Project
        className={`${classes.project}`}
        link={'https://orgadminplus.com/UserPages/index.php'}
        projectTitle={'OrgAdmin+'}
        orgTitle={"One Team Coding"}
        skills={"PHP, SQL, Javascript, HTML, CSS"}
        date={"Winter Semester 2020"}
        img={orgadmin}
        altImg={'Club Management Image Link'}
        description={<p style={{lineHeight: '1.5rem'}}>The OrgAdmin+ website gives clubs at U of M the ability to recruit, monitor attendance, send tasks out to members, and track membership data across semesters. I was the Engineering Lead for a team that worked on the backend of the website's pages, using PHP and SQL Queries to dynamically display information from the database. <br /> <br /> As the project moved online with the cancellation of in person classes, I joined the OTC core leadership as the club’s Project Manager.</p>}
      />
      </ScrollAnimation>

      <ScrollAnimation 
        animateIn="fadeIn"
        animateOnce={true}
        duration={.5}
      >
      <Project
        className={`${classes.project}`}
        link={'https://www.eecs.umich.edu/courses/eecs281/'}
        projectTitle={'Travelling Salesperson Problem'}
        orgTitle={"EECS 281"}
        skills={"C++, Git, Valgrind, Perf"}
        date={"Winter 2020"}
        img={tsp}
        altImg={'TSP Image'}
        description={<p style={{lineHeight: '1.5rem'}}>As part of Algorithms and Data Structures(EECS 281), I wrote an insertion heuristic, implemented as a branch and bound algorithm, to solve the TSP problem in O(n^2) time complexity. I used Minimum Spanning Trees created with Prim’s algorithm to create upper bounds on the cost of the solution, decreasing runtime. Unfortunately, we are not allowed to release any part of our final product that would violate the Engineering Honor Code.</p>}
      />
      </ScrollAnimation>

      <ScrollAnimation 
        animateIn="fadeIn"
        animateOnce={true}
        duration={.5}
      >
      <Project
        className={`${classes.project}`}
        link={'https://eecs280staff.github.io/eecs280.org/'}
        projectTitle={'Machine Learning Piazza Post Identifier'}
        orgTitle={"EECS 280"}
        skills={"C++, Git, Valgrind, Perf"}
        date={"Fall 2019"}
        img={piazza}
        altImg={'Machine Learning Piazza Post Identifier'}
        description={<p style={{lineHeight: '1.5rem'}}>In Programming and Intro Data Structures(EECS 280), I implemented a Baye's classifier that predicts the topic of a Piazza post to the EECS 280 Piazza page. This Baye's classifier uses a Bag of Words technique, where the algorithm determines what the "Best Fit" topic is most likely to be based on the frequnecy of word association with a given topic from the training data. Unfortunately, we are not allowed to release any part of our final product that would violate the Engineering Honor Code.</p>}
      />
      </ScrollAnimation>

      <ScrollAnimation 
        animateIn="fadeIn"
        animateOnce={true}
        duration={.5}
      >
      <Project
        className={`${classes.project}`}
        link={'https://oneteamcoding.com/index.html'}
        projectTitle={'Project Manager and Engineering Team Lead'}
        orgTitle={"One Team Coding"}
        skills={"none"}
        date={"Fall 2019 - Present"}
        img={otc}
        altImg={'One Team Coding Image'}
        description={<p style={{lineHeight: '1.5rem'}}>When I joined One Team Coding for their first semester in Fall of 2019, I immediately began to enjoy the dynamic nature of working in a team when compared to the individual work of my previous class and personal projects. After multiple semesters as just a club member, I took on more leadership responsiblity as both an Engineering Team Lead and a Project Manager.<br /> <br /> Now, I plan development cycles, research and select technology stacks for projects, create onboarding processes for new club members every semester, and lead one of the five teams in their development scope for a project. One Team Coding has been one of the most rewarding experiences for me at University of Michigan.</p>}
      />  
      </ScrollAnimation>
      
      <ScrollAnimation 
        animateIn="fadeIn"
        animateOnce={true}
        duration={.5}
      >
      <Project
        className={`${classes.project}`}
        link={'https://cse.engin.umich.edu/academics/undergraduate/computer-science-lsa/'}
        projectTitle={'Double Major in Computer Science and Classical Saxophone Performance'}
        orgTitle={"University of Michigan"}
        skills={"none"}
        date={"Fall 2018 - Spring 2022"}
        img={uofm}
        altImg={'University of Michigan Image'}
        description={<p style={{lineHeight: '1.5rem'}}>As a double major in Computer Science and Saxophone Performance at the University of Michigan, now in my Junior year, I have been exposed to innumerable opportunities to collaborate with other ambitious students. I am extremely grateful for all of the exposure I have had to world class education and instruction and I am looking forward to the experiences and opportunities of my last two years here!</p>}
      />
      </ScrollAnimation>



    </div>

      <ScrollAnimation 
        animateIn="fadeIn"
        animateOnce={true}
        duration={.5}
      >
      <h1 className="panel-title" style={{textAlign: 'center', paddingTop: '5rem'}}>— Check out some of my music! —</h1>
      </ScrollAnimation>

      <ScrollAnimation 
        animateIn="fadeIn"
        animateOnce={true}
        duration={.5}
      >
      <div className="video-container">

        <Video 
          url="https://youtu.be/jTO6IB5pahk"
          title="Above(2013), Matthew Levy"
          artists="Jordan Savage, Philip Kleutgans, Roberto Campa, Jason Frazier"
        />

        <Video 
          url="https://www.youtube.com/watch?v=izCDlecrlOM"
          title="The Mechanics - Drive Train, Carter Pann"
          artists="Jordan Savage, Brian Kachur, Matt Fox, Dylan Hong"
        />

        {/* <Video 
          url="https://youtu.be/MIuRyLY1KDY"
          title="Italian Concerto - Movement III, J.S. Bach"
          artists="Jordan Savage, Philip Kleutgens, Jason Frazier, Alex Gurchinoff"
        /> */}
      </div>

      <h1 className="smaller-panel-title" style={{textAlign: 'center', paddingTop: '1rem',color: '#3b79cd', fontWeight: 'bold'}}>Stay tuned for an upcoming recording project with my group, Eros Quartet!</h1>
      </ScrollAnimation>


    {/* </div> */}

    <div id="contact-div" className={`${classes.contactContainer}`} ref={contactRef}>
      <div className="bottom-background">
      <ScrollAnimation 
        animateIn="fadeIn"
        animateOnce={true}
        duration={.5}
      >
      <h1 className="panel-title" style={{textAlign: 'center', paddingTop: '5rem',}}>— Connect with me! —</h1>
      </ScrollAnimation>

      <ScrollAnimation 
        animateIn="fadeIn"
        animateOnce={true}
        duration={.5}
      >
      
      <div className="connect-cont">
        <a href="https://www.linkedin.com/in/jordan-savage-577119194" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{fontSize:'5rem', color: '#2867B2', cursor: 'pointer', paddingRight: '3rem'}} className="size-icon"/></a>
        <a href="mailto:jcsavage@umich.edu"><FontAwesomeIcon icon={faEnvelopeSquare} style={{fontSize:'5rem', color: '#D44638', cursor: 'pointer'}} className="size-icon"/></a>
      </div>

      <div className="footer">
        <div className='to-top-group sm-bounce' onClick={() => {smoothScrollTo('intro-div', -64)}}>
          <KeyboardArrowUpIcon className="arrow-icon-top" style={{fontSize: '65px'}}/>
          <KeyboardArrowUpIcon className="arrow-icon-bot"  style={{fontSize: '65px'}}/>
        </div>
      </div>

      
      </ScrollAnimation>
      </div>
    </div>
    </>
  );
}

export default Main;
