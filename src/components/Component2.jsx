import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import lightBlue from '@material-ui/core/colors/lightBlue';

const useStyles = makeStyles(theme => ({
   root: {
      '& > *': {
      margin: theme.spacing(1),
      width: 200,
      },
   },
   textfield: {
      width: '100%',

   },
   btn: {
      backgroundColor: lightBlue[500],
      color: 'white',
      fontWeight: 'bold',
      width: '100%',
      '&:hover': {
         backgroundColor: lightBlue[400],
      }
   },
}));


export default function Component2() {
   const classes = useStyles();     

   return (
   <form className={classes.root} noValidate autoComplete="off">
      <TextField 
         id="standard" 
         label="Tweet or Hastag" 
         variant="standard" 
         className={classes.textfield} 
      />
      <br></br>
      <Button variant="contained" className={classes.btn}>Submit</Button>
   </form>
   );
}
