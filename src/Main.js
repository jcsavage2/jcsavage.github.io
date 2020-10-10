import React, { createRef, useState, useEffect } from 'react';
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
    display: 'block',
  },
  // introContainer:{
  //   position: 'absolute',
  //   top: '0',
  //   left: '0',
  //   height: '100vh',
  //   width: '35vw',
  //   backgroundColor: 'darkgrey',
  //   opacity: '.5',
  // },
  introText:{
    marginLeft: '14rem',
    marginTop: '10rem',
    marginBottom: '19rem',
    width: '70%',
    display: 'flex',
    // float: 'left',
    // clear: 'none',
  },
  headshot:{
    // position: 'absolute',
    // top: '3rem',
    // right: '5rem',
    height: '12rem',
    marginLeft: '2rem',
    borderRadius: '3px',
    boxShadow: '10px, 10px, 5px, lightgrey',
  },
  //END LANDING STYLES

  // aboutPanel:{
  //   backgroundColor: "lightslategrey",
  //   width: '100%',
  //   height: '100vh',
  //   opacity: '.9',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   flexDirection: 'column',
  // },
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
  
  // //allows the sticky navigation to toggle
  // const [button, setButton] = useState(false);

  // const scrollListener = () => {
    
  //   setButton(document.documentElement.scrollTop > 0);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', scrollListener);

  //   return () => {
  //     window.removeEventListener('scroll', () => scrollListener);
  //   };
  // }, []);

  return (
    <>

    <div id="intro-div" className={`${classes.introPanel}`} ref={homeRef}>

      <ScrollAnimation 
        animateIn="fadeIn"
        animateOnce={true}
        duration={3}
      >
        
        <div id="intro-text" className={`${classes.introText}`}>
        {/* <img className={`${classes.headshot}`} src={headshot}/> */}
          <div style={{marginRight: '3rem'}}>
          <h1 id='intro-text-name'>Hey! I'm Jordan</h1>
          <h1 id='intro-text-bio'>I am a software engineer and classical saxophonist, currently pursuing a double major at the University of Michigan. </h1>
          </div>
          <div>
          <img className={`${classes.headshot}`} src={headshot}/>
          </div>
        </div>

        {/* I love working in and collaborating with teams to create a product more than the sum of its parts! */}

      </ScrollAnimation>
      

      {/* <div className={`fade-in-button${button ? ' is-visible' : ''}`} onClick={() => {smoothScrollTo('intro-div', -64)}}>
        <FontAwesomeIcon icon={faSortUp} style={{fontSize: '75px', color: 'white', cursor: 'pointer'}} className="sm-bounce"/>
      </div> */}

      {/* <div className="introButton"
        onClick={() => {smoothScrollTo('nav-bar', 0)}}
      >
          <h3 className='intro-button-text'>Check it out</h3>
          <ArrowForwardIcon className='intro-button-arrow'/>
      </div> */}

    

    {/* <div id='nav-bar' className={`nav-bar${fixedNav ? ' sticky-nav' : ''}`} ref={navBarRef}>
      <a onClick={() => {smoothScrollTo('intro-div', -64)}} className='nav-item first'><b>Home</b></a>
      <a onClick={() => {smoothScrollTo('about-div', -64)}} className='nav-item'><b>About</b></a>
      <a onClick={() => {smoothScrollTo('projects-div', -64)}} className='nav-item'><b>Projects</b></a>
      <a onClick={() => {smoothScrollTo('music-div', -64)}} className='nav-item'><b>Music</b></a>
      <a onClick={() => {smoothScrollTo('contact-div', -64)}} className='nav-item'><b>Contact Me</b></a>
    </div> */}

    {/* <div id="about-div"  className={`${classes.aboutPanel}`} ref={aboutPanelRef}>

      <div className="aboutContentContainer">

        <div className="headshotCont">
          <img src={headshot} alt="Headshot" className="headshot"/>
          
        </div>

        <div className="aboutContact">
          <h2>Connect with me! </h2>
          <a href="https://www.linkedin.com/in/jordan-savage-577119194" target="_blank"><LinkedInIcon className="size-icon" style={{fontSize:'5rem', color: '#2867B2'}} /></a>
          <a href="https://www.facebook.com/jordan.savage.315" target="_blank"><FacebookIcon className="size-icon" style={{fontSize:'5rem', color: '#3b5998'}}/></a>
        </div>
        
        <div className="aboutText">
          <h1>Hey! I'm Jordan</h1>
          <h2>I'm a Computer Science and Saxophone Performance major at the University of Michigan - Ann Arbor. 
            I have a passion for problem solving and I love working on teams with other driven programmers I'm a Computer Science and Saxophone Performance major at the University of Michigan - Ann Arbor. 
            I have a passion for problem solving and I love working on teams with other driven programmers.I'm a Computer Science and Saxophone Performance major at the University of Michigan - Ann Arbor. 
            I have a passion for problem solving and I love working on teams with other driven programmers..</h2>
        </div>
        
      </div>
    </div> */}
    </div>
    <div id="projects-div" className={`${classes.projectsPanel}`} ref={projectsRef}>

      <ScrollAnimation 
        animateIn="fadeIn"
        animateOnce={true}
        duration={3}
      >
        <h1 className="panel-title">- My Experiences -</h1>
        <a href={require("./assets/jordancsavageresume.pdf")} download="Jordan C Savage Resume" className="download-res-link">Download Resume</a>
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
          description={'In the midst of the global pandemic, I was lucky enough to find a role at ACEA as part of their web development team. It was a largely self-guided and self-directed internship in which I learned about React.JS, Java(Spring MVC), and helped launch products directly to ACEA’s customers. My internship culminated with the completion of a continuing education filtering system that allows superadmins to selectively display continuing education opportunities depending on user preferences and license type(s).'}
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
        description={'I worked as an Engineering Team Lead on the OrgAdmin+ website, an application that gives clubs at U of M the ability to recruit, monitor attendance, send tasks out to members, and track membership data across semesters. The team I led worked specifically on the backend of these pages, using PHP and SQL Queries to dynamically display information from the database. As the project moved online with the cancellation of in person classes, I took a leadership role that would lead to me officially joining the OTC core leadership as the club’s Project Manager, while still maintaining my previous responsibilities as an Engineering Team Lead. '}
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
        description={'Algorithms and Data Structures(EECS 281) has been the most intellectually fulfilling and enjoyable class I have taken at Michigan. For our final project in the class, we wrote an insertion heuristic, implemented as a branch and bound algorithm, to solve the TSP problem in O(n^2) time complexity. I used Minimum Spanning Trees created with Prim\’s algorithm to create bounds on the cost of the solution, decreasing runtime. Unfortunately, we are not allowed to release any part of our final product that would violate the Engineering Honor Code.'}
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
        description={'In a previous class, EECS 280, I implemented a Baye\'s classifier that predicted the topic of a Piazza post to the EECS 280 Piazza page. This Baye\'s classifier uses a Bag of Words technique, where during the training of the algorithm, words associated with different topics from the training data are counted and the algorithm determines what the \”Best Fit\” topic is likely to be. Unfortunately, we are not allowed to release any part of our final product that would violate the Engineering Honor Code.'}
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
        description={'When I joined One Team Coding for their first semester in Fall of 2019, I began to immediately enjoy the dynamic nature of working in a team when compared to the individual work of all of my previous class and personal projects. As I continued to be a member of OTC through multiple semesters, I took on more organizational and leadership responsibilities. Now, I serve as an Engineering Team Lead and Project Manager, where I plan development cycles, research and select technology stacks for projects, create onboarding processes for new club members every semester, and lead one of the five teams in their development scope for a project. Through trial and error, I quickly learned the absolute necessity of clear communication, defined goals, and honest collaboration when working with large teams. One Team Coding has been one of the most rewarding experiences for me at University of Michigan.'}
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
        description={'As a double major in Computer Science and Saxophone Performance at the University of Michigan, now in my Junior year, I have been exposed to innumerable opportunities to collaborate with driven and ambitious students, both in the Computer Science program and at the School of Music. I am extremely grateful for all of the exposure I have had to world class education and instruction. I look forward to the experiences and opportunities of my last two years here.'}
      />
      </ScrollAnimation>



    </div>
    {/* <div id="music-div"  className={`${classes.musicPanel}`} ref={musicRef}> */}

      <ScrollAnimation 
        animateIn="fadeIn"
        animateOnce={true}
        duration={.5}
      >
      <h1 className="panel-title" style={{textAlign: 'center', paddingTop: '5rem'}}>— Check out some of my music! —</h1>
      {/* <p className="music-description">I currently study Classical Saxophone Performance with Dr. Timothy McAllister and perform regularly in Ann Arbor</p> */}
      </ScrollAnimation>

      <ScrollAnimation 
        animateIn="fadeIn"
        animateOnce={true}
        duration={.5}
      >
      <div className="video-container">
        {/* <Video 
          url="https://www.youtube.com/watch?v=kTU064l20iA&feature=youtu.be"
          title="Andante and Scherzo, Eugene Bozza"
          artists="Jordan Savage, Philip Kleutgans, Justin Brown, Jason Frazier"
        /> */}

        <Video 
          url="https://youtu.be/ND51VVG9ruY"
          title="Sonate en ut# pour saxophone alto - Movement III, Fernande Decruck"
          artists="Jordan Savage, Polina Khatsko"
        />

        <Video 
          url="https://www.youtube.com/watch?v=izCDlecrlOM"
          title="The Mechanics - Drive Train, Carter Pann"
          artists="Jordan Savage, Brian Kachur, Matt Fox, Dylan Hong"
        />

        <Video 
          url="https://youtu.be/MIuRyLY1KDY"
          title="Italian Concerto - Movement III, J.S. Bach"
          artists="Jordan Savage, Philip Kleutgens, Jason Frazier, Alex Gurchinoff"
        />
      </div>

      {/* <h1 className="smaller-panel-title" style={{textAlign: 'center', paddingTop: '1rem',color: 'red'}}>Stay tuned for an upcoming recording project with my group, Eros Quartet!</h1> */}
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
        <a href="https://www.linkedin.com/in/jordan-savage-577119194" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{fontSize:'5rem', color: '#2867B2', cursor: 'pointer', paddingRight: '3rem'}} className="size-icon"/></a>
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
