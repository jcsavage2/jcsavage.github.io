import React, { useState }  from 'react';
// import './Project.css';

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    header:{
        margin: '0',
    },
    container:{
        // boxShadow: '0 0 10px black',
        padding: '3rem',
        width: '60rem',
        // border: '1px solid black',
        // backgroundColor: 'rgba(171, 183, 183, .4)',
        
    },
    leftContainer:{
        display: 'inline-block',
        width: '40%',
        float: 'left',
    },
    imgCont:{
        width: '100%',
        cursor: 'pointer',
    },
    descCont:{
        width: '50%',
        display: 'inline-block',
        marginLeft: '3rem',
    },
    image:{
        width: '100%',
        height: '100%',
        display: 'block',
        borderRadius: '20px',
        filter: 'brightness(.95)',
        transition: 'all 0.3s',
        '&:hover':{
            webkitTransform: 'scale(1.010)',
            transform: 'scale(1.010)',
            boxShadow: '0 2px 4px lightgrey',
        },
    },  
    description:{
        marginTop: '1rem',
        fontWeight: '',
        fontSize: '1rem',
    },
    title:{
        marginBottom: '.75rem',
        color: '#3b79cd',
        '&:hover':{
            filter: 'brightness(80%)',
            cursor: 'pointer',
        },
    },
    date: {
        marginBottom: '.5rem',
        color: '#5f9619',
        fontSize: '1.1rem',
    },
    skills: {
        
    },
});


function Project(props){

    const classes = useStyles();

    const handleImgClick = () => {
        window.open(`${props.link}`, "_blank");
    }

    if(`${props.skills}` === "none"){
        return(
            <div className={`${classes.container}`}>
                <div className={`${classes.leftContainer}`}>         
                        <div 
                            className={`${classes.imgCont}`}
                            onClick={handleImgClick}
                        >
                            {/* <div className="overlay">
                                {/* <Icon className="fas fa-external-link-alt" style={{color: 'white'}}/> 
                                <h3>Click to visit site!</h3>
                            </div> */}
                            <img className={`${classes.image}`} src={props.img} alt={props.altImg}/>
                            
                        </div>
                </div>

                <div className={`${classes.descCont}`}>
                    <h1 className={`${classes.title} ${classes.header}`}><b>{props.projectTitle}</b></h1>
                    <h4 className={`${classes.date} ${classes.header}`}>{props.orgTitle},  <em>{props.date}</em></h4>
                    <p className={`${classes.description} ${classes.header}`}>{props.description}</p>
                </div>
                
            </div>
        );
    }else{
        return(
            <div className={`${classes.container}`}>
                <div className={`${classes.leftContainer}`}>         
                        <div 
                            className={`${classes.imgCont}`}
                            onClick={handleImgClick}
                        >
                            {/* <div className="overlay">
                                {/* <Icon className="fas fa-external-link-alt" style={{color: 'white'}}/> 
                                <h3>Click to visit site!</h3>
                            </div> */}
                            <img className={`${classes.image}`} src={props.img} alt={props.altImg}/>
                            
                        </div>
                </div>

                <div className={`${classes.descCont}`}>
                    <h1 className={`${classes.title} ${classes.header}`}><b><a href={props.link} target="_blank" style={{textDecoration: 'none', color: '#3b79cd'}}>{props.projectTitle}</a></b></h1>
                    <h4 className={`${classes.date} ${classes.header}`}>{props.orgTitle},  <em>{props.date}</em></h4>
                    <h4 className={`${classes.skills} ${classes.header}`}><b>Skills:</b> {props.skills}</h4>
                    <p className={`${classes.description} ${classes.header}`}>{props.description}</p>
                </div>
                
            </div>
        );
    }

}

export default Project;