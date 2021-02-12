import React , {useState,useEffect} from 'react';
import {Container, AppBar ,Typography ,Grow ,Grid} from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import { useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';




const App = () =>{
    const [currentId,setCurrentId] =useState(null);
    const classes = useStyles();

    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(getPosts());

    },[currentId,dispatch]);

    return(
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align ="center">Meme Stream</Typography>
                <img className = {classes.image} src="https://images.unsplash.com/photo-1489864341077-e204d82219b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGNvbG9yZnVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="We Love Memes" height="60"/>

            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing ={3}>
                        <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} /> 

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                            
                        </Grid>

                    </Grid>
                </Container>

            </Grow>

        </Container>
        
    );
}
export default App;