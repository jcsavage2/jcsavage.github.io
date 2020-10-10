import React, { useState }  from 'react';
// import './Project.css';

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player"

const useStyles = makeStyles({
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        whiteSpace: 'nowrap',
        margin: '2rem',
    },
    videoCont: {
        display: 'inline-block',
        transition: 'all 0.3s',
        '&:hover':{
            webkitTransform: 'scale(1.005)',
            transform: 'scale(1.005)',
        },
    },
    videoDescCont: {
        width: '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    videoTitle: {
        fontSize: '1.5rem',
        paddingBottom: '.5rem',
        color: '#3b79cd',
    },
    videoArtists: {
        fontSize: '1rem',
        paddingBottom: '1rem',
        color: '#5f9619',
    },
});


function Video(props){

    const classes = useStyles();

    return(
        <div className={`${classes.container}`}>
            <div className={`${classes.videoDescCont}`}>
                <div className={`${classes.videoTitle}`}><b>{props.title}</b></div>
                <div className={`${classes.videoArtists}`}><i>{props.artists}</i></div>
            </div>
            <div className={`${classes.videoCont}`}>
                <ReactPlayer
                    url={props.url}
                />
            </div>
        </div>
    );

}

export default Video;