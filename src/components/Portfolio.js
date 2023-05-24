import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import TabLayout from './TabLayout'
import Timeline from './Timeline';
import { Chip, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { ArrowForwardIos } from '@material-ui/icons';
import { useCallback } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    // backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',

    backgroundColor: '#000'
  },
  leftpan: {
    height: '100vh',
    width: '40%'
  },
  rightpan: {
    height: '100vh',
    width: '60%',
    padding: '10vh',
    overflowY: 'scroll'
  },
  profileImage: {
    borderRadius: '50%',
    maxHeight: '18rem',
    border: '1vh solid #47a300',
    marginTop: '15vh',
    marginLeft: '20vh'
  },
  timeline: {

  },
  header: {
    color: 'green',
    border: 'solid #04d9ff 1px',
    padding: '20px',
    clipPath: "polygon(0 0, 1% 99%, 100% 113%, 100% 90%, 94% 0)"
  },
  details: {
    marginLeft: '5vh',
    maxHeight:'18rem',
    position: 'relative',
    marginTop: '10vh'
  },
  chipstray: {
    marginTop: '10px',
    padding: '20px',
    display: 'flex',
    border: 'solid #04d9ff 1px',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
      border: '#fafafa 1px solid',
      color: '#fafafa'
    }
  },
  pipboy: {
    maxHeight:'18rem',
    objectFit: 'cover',
    overflow: 'hidden',
  }
}));
export default function Portfolio() {
  const classes = useStyles();
  const [projectDetails, setProjectDetails] = useState();
  
  const showDetails = useCallback((e) => {
    setProjectDetails(e);
  }, [projectDetails]);

  return (
    <div className={classes.root}>
      <div className={classes.leftpan}>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/alok.jpg'} className={classes.profileImage} alt='profile' />
        </div>
      <div className={clsx(classes.header, classes.details)}>
          {projectDetails ? 
          <div>
            {/* <div style={{textAlign:'center'}}>
            <img src={process.env.PUBLIC_URL+'/images/pipboy.gif'} className={classes.pipboy} class="animate__animated animate__slideInRight"/>
          </div> */}
          <List style={{display: 'inline-block'}}>
            {projectDetails.map(el=>{
              return (
                <ListItem button>
                  <ListItemIcon>
                    <ArrowForwardIos style={{ color: 'green' }} />
                  </ListItemIcon>
                  <ListItemText primary={el.heading+": "+el.summary} />
                </ListItem>
              )
            })}
          </List>
          </div>
          : 
          <div style={{textAlign:'center'}}>
            <img src={process.env.PUBLIC_URL+'/images/pipboy.gif'} className={classes.pipboy} class="animate__animated animate__slideInRight"/>
          </div>
          
          }
        </div> 
        
      </div>
      <div className={classes.rightpan}>
        <div className={classes.header}>
          <Typography>
            I'm a Software Engineer, specializing in the Application development arena. I've been developing applications in Healthcare, Supply Chain Management and Entertainment domain for past 4+ Years.
            I'm currently employed as Software Engineer II with Blueyonder Inc. I'm hands-on in all stages of the software development cycle, from planning and design to testing and deployment. No two days are the same for me; my tasks may involve analyzing algorithms, altering code, fixing bugs, brainstorming ideas, or integrating new systems.
          </Typography>
        </div>
        <div className={classes.chipstray}>
          <Chip
            icon={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height={15} />
            }
            color="default"
            label="Java"
            variant="outlined" />
          <Chip
            icon={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" height={15} />
            }
            color="default"
            label="Spring"
            variant="outlined" />
          <Chip
            icon={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height={15} />
            }
            color="default"
            label="React"
            variant="outlined" />
          <Chip
            icon={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" height={15} />
            }
            color="default"
            label="Amazon web Services"
            variant="outlined" />
          <Chip
            icon={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" height={15} />
            }
            color="default"
            label="Azure"
            variant="outlined" />
          <Chip
            icon={

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" height={15} />

            }
            color="default"
            label="Android"
            variant="outlined" />
          <Chip
            icon={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" color='#fff' height={15} />
            }
            color="default"
            label="MSSQL"
            variant="outlined" />
          <Chip
            icon={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height={15} />
            }
            color="default"
            label="PGSQL"
            variant="outlined" />
        </div>
        <Timeline className={classes.timeline} showDetails = {showDetails}/>
      </div>
    </div>
  )
}