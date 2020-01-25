import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const theme = createMuiTheme();
theme.typography.h3 = {
//   fontSize: '1.2rem',
//   '@media (min-width:600px)': {
//     fontSize: '1.5rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2rem',
//   },
};

const useStyles = makeStyles(theme => ({
   root: {
     padding: theme.spacing(1),
     [theme.breakpoints.down('sm')]: {
         fontSize: '30px',
     },
     [theme.breakpoints.up('md')]: {
         fontSize: '40px',
     },
   },
 }));

export default function Component1() {
   const classes = useStyles();

   const mystyle = {
      color: '#03a9f4',
   }
   
   return (
      <div>
         <ThemeProvider theme={theme}>
            <Typography 
               className={classes.root}
               variant="h3" 
               style={{textAlign: 'center',}} ><span style={mystyle}>Tweet</span>ment</Typography>
         </ThemeProvider>
      </div>
   );
}