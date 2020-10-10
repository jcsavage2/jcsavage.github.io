import React, { useState }  from 'react';
import axios from 'axios';
import './ContactForm.css';

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FilledInput from '@material-ui/core/FilledInput';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SubjectIcon from '@material-ui/icons/Subject';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    container:{
        position: 'relative',
        top: '6%',
    },
    contactHeader:{
        textAlign: 'center',
        marginTop: '0',
        marginBottom: '3rem',
    },
    contactFormCont:{
        marginLeft: '25rem',
        marginRight: '25rem',
        textAlign: 'center',
    },
    middleInput:{
        marginTop: '3rem',
    },
    formBody:{
        marginTop: '3rem',
    },
    submitButton: {
        marginTop: '2rem',
        textTransform: 'none',
        width: '25%',
        height: '3rem',
        fontSize: '1.2rem',
    },
});


function ContactForm(){

    const classes = useStyles();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const resetForm = () => {
        setFullName("");
        setEmail("");
        setMessage("");
    }

    const handleNameChange = (e) => {
        setFullName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleMessageChange = (e) =>{
        setMessage(e.target.value);
    }


    const handleContactSubmit = (e) =>{
        e.preventDefault();

        let formInfo = {
            FullName: fullName,
            Email: email,
            Message: message,
        };

        if(fullName === "" || email === "" || message === ""){
            alert("Please fill in all fields! They are required");
            return;
        }

        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data:  formInfo
            }).then((response)=>{
            if (response.data.status === 'success'){
                alert("Message Sent."); 
                resetForm()
            }else if(response.data.status === 'fail'){
                alert("Message failed to send.")
            }
        })
    }


    return(
        <div className={`${classes.container}`}>
            <h1 className={`${classes.contactHeader}`}>Let's Talk!</h1>
            <div className={`${classes.contactFormCont}`}>

                <FormControl fullWidth variant="filled" >
                <InputLabel style={{color: 'black'}} htmlFor="fullNameInput">Full Name:</InputLabel>
                <FilledInput
                    className={`${classes.formInput}`}
                    id="fullNameInput"
                    onChange={handleNameChange}
                    value={fullName}
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
                </FormControl>
                

                <FormControl fullWidth className={`${classes.middleInput}`}variant="filled">
                <InputLabel style={{color: 'black'}} htmlFor="emailInput">Your Email:</InputLabel>
                <FilledInput
                    className={`${classes.formInput}`}
                    id="emailInput"
                    onChange={handleEmailChange}
                    value={email}
                    startAdornment={
                        <InputAdornment position="start">
                            <MailOutlineIcon />
                        </InputAdornment>
                    }
                />
                </FormControl>
                
                <TextField
                    className={`${classes.formBody} ${classes.formInput}`}
                    onChange={handleMessageChange}
                    value={message}
                    variant="filled"
                    style={{color: 'black'}}
                    fullWidth
                    multiline
                    rows="8"
                    label="Message:"
                />

                <Button
                    variant="contained"
                    className={`${classes.submitButton} ${classes.formInput}`}
                    onClick={handleContactSubmit}
                >
                    Send Message
                </Button>
            </div>
        </div>
    );

}

export default ContactForm;