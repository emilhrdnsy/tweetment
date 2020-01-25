import React from 'react'
import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import Component3 from './components/Component3'
import Paper from '@material-ui/core/Paper';
import './App.css'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar'

function App() {
   const useStyles = makeStyles(theme => ({
      rootContainer: {
         padding: theme.spacing(1),
         [theme.breakpoints.down('sm')]: {
            padding: '0px',
            height: '100%',
         },
         [theme.breakpoints.up('md')]: {
            marginTop: '20px',
         },
      },
      rootPaper: {
         padding: theme.spacing(1),
         [theme.breakpoints.down('sm')]: {
            padding: '10px',
            // borderRadius: '10px',
            position: 'relative',
            height: '100%',
            paddingLeft: '60px',
         },
         [theme.breakpoints.up('md')]: {
            padding: '20px',
            borderRadius: '17px',
            position: 'relative',
            height: '610px',
            paddingLeft: '60px',
         },
      }
    }));

   const classes = useStyles();
   return (
      <React.Fragment>
         <CssBaseline />
         <Container maxWidth="lg" className={classes.rootContainer}>
            <Paper elevation={3} className={classes.rootPaper}>
               <Navbar />
               <div style={{marginRight: '15px'}} >
               <Container maxWidth="sm">
                  <Component1 />
                  <br></br>
                  <Component2 />
                  <br></br>
               </Container>
               <Container maxWidth='md' style={{marginTop: '50px'}}>
                  <Component3 />
               </Container>
               </div>
            </Paper>
         </Container>
      </React.Fragment>
   );
}

export default App;