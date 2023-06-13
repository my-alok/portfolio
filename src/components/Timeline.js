import React from 'react'
import { Chrono } from 'react-chrono'
import { makeStyles } from '@material-ui/core/styles';
import items from '../data/timelinedata'
import MAccordion from './Accordion';
import portfolioData from '../data/portfoliodata';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        width: '100%',
        padding: '5px',
        color: '#fafafa',
        minHeight:'unset'
    },
    cardTitleImage: {
        alignSelf: 'start',
        display: 'flex'
    },
    cardTitleText: {
        marginTop: 'auto',
        marginBottom: 'auto',
        "& h3": {
            margin: 'unset'
        }
    },
    cardDesc: {
        marginTop: '20px'
    },
    cardItemVisibilityIcon: {

    },

}));
export default function Timeline(props) {
    const classes = useStyles();
    return (
        <div style={{height:'50vh'}}>
            <Chrono
                slideShow={true}
                mode="VERTICAL"
                scrollable={{ scrollbar: true }}
                items={items}
                classNames=''
                theme={{
                    primary: '#04d9ff',
                    secondary: '#FFF',
                    cardBgColor: '#101010',
                    cardForeColor: 'violet',
                    titleColor: '#fff',
                    titleColorActive: '#000',
                }}
                cardHeight={'unset'}>

                {portfolioData ? portfolioData.map(element => {
                    return (
                        <div className={classes.card}>
                            <div className={classes.cardTitleImage}>
                                <img src={window.location.origin + element.logo} height={30} style={{ marginRight: '10px' }} alt='f' />
                                <label className={classes.cardTitleText}><h3>{element.title}</h3></label>
                            </div>
                            <div className={classes.cardDesc}>
                                <Typography style={{textAlign:'justify', textJustify: 'inter-word'}}>
                                    {element.summary}
                                </Typography>
                                {element.cardItems ? 
                                 <MAccordion items={element} showDetails={props.showDetails} />
                                : null}
                               
                            </div>
                        </div>
                    )
                }
                ) : null}
            </Chrono>
        </div>
    )
}