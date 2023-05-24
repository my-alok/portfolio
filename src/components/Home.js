import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typical from 'react-typical';
import { ExpandMoreOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    header: {
        fontFamily: 'monospace',
        color: '#fff',
        alignItems: 'flex-start',
        marginLeft: '10%'
    },
    headerTitle: {
        fontSize: '4em',
        marginBottom: '15px'
    },
    typography: {
        fontSize: '2em',
        lineHeight: '1',
        marginTop: '0px'
    },
    explore: {
        color: '#04d9ff',
        borderColor: "#04d9ff",
        padding: "10px 50px",
        fontSize: "18px",
        "&:active": {
            backgroundColor: '#04d9ff'
        }
    }
}));
export default function Home() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);
    useEffect(() => {
        setChecked(true);
    }, [])
    return (
        <div className={classes.root}>
            <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedSize={50}
            >
                <div className={classes.header}>
                    <h1 className={classes.headerTitle}>Hi, I'm Alok <span className={classes.colorTitle}>Singh</span></h1>
                    <p className={classes.typography}>I'm a{' '}
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={['developer 💻',
                                1000,
                                'innovator 💡',
                                1000,
                                'writer (wannabe) 🖊',
                                1000]} />
                    </p>
                    <Button href='/portfolio' className={classes.explore} variant="outlined" size='large'>Explore<ExpandMoreOutlined style={{ color: '#fff', fontSize: '2rem' }} /></Button>

                </div>
                {/* <Intro url="https://www.google.com/speech-api/v2/synthesize?enc=mpeg&client=chromium&key=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw&text=Hi.%20I%20am%20Alok%20Singh.%20Welcome%20to%20my%20digital%20portfolio.&lang=en-US&speed=0.5&pitch=0.5"/> */}
            </Collapse>
        </div>
    )
}