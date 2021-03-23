import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import QuizDetails from './quizDetail';
import QuizList from './quizList';
import useStyles from '../../style';

const QuizDetailsRender = () => {
    const classes = useStyles()
    return ( 
        <>
        <div className="Quiz">
            <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h5" align="center">Logo</Typography>

        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch">
              <Grid item xs={20} sm={9}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}> 
                <AppBar className={classes.appBar} position="static" color="inherit">
                <QuizDetails/>
                </AppBar>
              </Grid>
                
            </Grid>
          </Container>
        </Grow>
      </Container>
        </div>
        </>
     );
}
 
export default QuizDetailsRender;


