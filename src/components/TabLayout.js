import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Tab, Tabs } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    margin: '20vh 10px',
  },
}));
export default function TabLayout() {
  const classes = useStyles();
  return (
    <>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        className={classes.tabs}>
        <Tab value={1} label='Item 1' />
        <Tab value={2} label='Item 2' />
        <Tab value={3} label='Item 3' />
        <Tab value={4} label='Item 4' />
        <Tab value={5} label='Item 5' />
      </Tabs>
    </>
  )
}