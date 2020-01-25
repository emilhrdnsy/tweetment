import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import lightBlue from '@material-ui/core/colors/lightBlue';


const useStyles = makeStyles(theme => ({
   root: {
     padding: theme.spacing(1),
     [theme.breakpoints.down('sm')]: {
         borderRadius: '0px',
         backgroundColor: '#29b6f6',
         width: '10%',
         height: '100%',
         position: 'absolute',
         left: '0px',
         top: '0px',
     },
     [theme.breakpoints.up('md')]: {
         borderRadius: '15px',
         backgroundColor: '#29b6f6',
         width: '5%',
         height: '100%',
         position: 'absolute',
         left: '0px',
         top: '0px',
     },
   },
 }));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <Paper elevation={2} className={classes.root} />
    </div>
  );
}