import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Timeline from './Timeline';
import { Chip, Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh'
  },
  leftpan: {
    textAlign: 'center'
  },
  rightpan: {
    height: '100vh',
    padding: '8rem',
  },
  profileImage: {
    borderRadius: '50%',
    maxHeight: '18rem',
    border: '1vh solid #47a300',
    marginTop: '15vh'
  },
  header: {
    color: 'green',
    border: 'solid #04d9ff 1px',
    padding: '20px',
    clipPath: "polygon(0 0, 1% 99%, 100% 113%, 100% 90%, 96% 0)"
  },
  details: {
    marginLeft: '5vh',
    maxHeight: '18rem',
    position: 'relative',
    marginTop: '10vh',
    textAlign: 'center'
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
}));
export default function Portfolio() {
  const classes = useStyles();
  const [projectDetails, setProjectDetails] = useState();

  const showDetails = (e) => {
    setProjectDetails(e);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={5} sm={12}>
          <div className={classes.leftpan}>
            <img src={process.env.PUBLIC_URL + '/images/alok.jpg'} className={classes.profileImage} alt='profile' />
            <div className={clsx(classes.header, classes.details)}>
              {projectDetails ?
                <Grid container md={12}>
                  <Grid item md={3}>
                    <img src={process.env.PUBLIC_URL + '/images/pipboy.gif'} className={classes.pipboy} alt='pip' style={{maxHeight:'70%'}}/>
                  </Grid>
                  <Grid item md={9} style={{textAlign:'justify', textJustify: 'inter-word'}}>
                      {projectDetails.map((el, i) => {
                        return (
                          <div>
                            <Typography style={{fontWeight:'bold', textDecoration: 'underline'}}>
                              {el.heading}
                            </Typography>
                            <Typography>
                              {el.summary}
                            </Typography>
                          </div>
                        )
                      })}
                  </Grid>
                </Grid>
                :
                <Grid item md={12}>
                  <img src={process.env.PUBLIC_URL + '/images/pipboy.gif'} className={classes.pipboy} alt='pip' style={{maxWidth:'20%'}}/>
                </Grid>
              }
            </div>
          </div>
        </Grid>
        <Grid item md={7} className={classes.rightpan}>
          <Grid item sm={12} className={classes.header}>
            <Typography>
              I'm a Software Engineer, specializing in the Application development arena. I've been developing applications in Healthcare, Supply Chain Management and Entertainment domain for past 4+ Years.
              I'm currently employed as Software Engineer II with Blueyonder Inc. I'm hands-on in all stages of the software development cycle, from planning and design to testing and deployment. No two days are the same for me; my tasks may involve analyzing algorithms, altering code, fixing bugs, brainstorming ideas, or integrating new systems.
            </Typography>
          </Grid>
          <div className={classes.chipstray}>
            <Chip
              icon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height={15} alt='' />
              }
              color="default"
              label="Java"
              variant="outlined" />
            <Chip
              icon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" height={15} alt='' />
              }
              color="default"
              label="Spring"
              variant="outlined" />
            <Chip
              icon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height={15} alt='' />
              }
              color="default"
              label="React"
              variant="outlined" />
            <Chip
              icon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" height={15} alt='' />
              }
              color="default"
              label="Amazon web Services"
              variant="outlined" />
            <Chip
              icon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" height={15} alt='' />
              }
              color="default"
              label="Azure"
              variant="outlined" />
            <Chip
              icon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" height={15} alt='' />
              }
              color="default"
              label="Android"
              variant="outlined" />
            <Chip
              icon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" color='#fff' height={15} alt='' />
              }
              color="default"
              label="MSSQL"
              variant="outlined" />
            <Chip
              icon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height={15} alt='' />
              }
              color="default"
              label="PGSQL"
              variant="outlined" />
          </div>
          <Timeline showDetails={showDetails} />
        </Grid>
      </Grid>
    </div>
  )
}