import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '45ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    button: {
        margin: theme.spacing(1),
      },
  }));


 const  QuizDetialCard = () => {
    const classes = useStyles();

    const [quizList, setQuizDetail] = useState([]);
   
    useEffect(() => {
      axios.get(`https://spiffy-test-api.herokuapp.com/quiz/?id={id}`).then((quizDetail) =>{
  
        setQuizDetail(quizDetail.data);
  
      }) 
    },[])

  

    return (
        <>
                <h2>quizDetails</h2>
    
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student Number</TableCell>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">description</TableCell>
            <TableCell align="right">questions</TableCell>
            <TableCell align="right">pass_score</TableCell>
            <TableCell align="right">created</TableCell>
            <TableCell align="right">image</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        
	<TableBody>
          {quizList.map((quiz, key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {quiz.id}
              </TableCell>
              <TableCell align="right">{quiz.name}</TableCell>
              <TableCell align="right">{quiz.lastName}</TableCell>
              <TableCell align="right">{quiz.description}</TableCell>
              <TableCell align="right">{quiz.questions}</TableCell>
              <TableCell align="right">{quiz.pass_score}</TableCell>
              <TableCell align="right">{quiz.created}</TableCell>
              <TableCell align="right"><Avatar alt="Remy Sharp" src= {quiz.image} /></TableCell>
              <TableCell align="right">
              <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    
                >
                    Detail
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </>
      );
  }
  export default QuizDetialCard;
 
        