import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
    root: {
        color: '#fafafa',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .8)',
        borderBottom: '1px solid rgba(0, 0, 0)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        backgroundColor: 'rgba(0, 0, 0, .8)',
    },
}))(MuiAccordionDetails);

export default function MAccordion(props) {
    const [expanded, setExpanded] = React.useState();
    const { item, showDetails } = props;
    const handleChange = (panel, details) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
        showDetails(newExpanded? details : null);
    };

    return (
        <div>
            {
                item.cardItems ? item.cardItems.map((element, i) => {
                    return (
                        <Accordion square expanded={expanded === i} onChange={handleChange(i, element.details, item.type)}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>{element.heading}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {element.summary}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            :null}
        </div>
    );
}
