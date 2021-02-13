//Single meme frontend structure
import React from 'react';
import {Card ,CardActions, CardContent, CardMedia,Button,Typography} from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {deletePost,likePost} from '../../../actions/posts'



import useStyles from './styles';

const Post= ({post,setCurrentId}) => {
    const classes = useStyles();
    const  dispatch=useDispatch();
    return(
        <Card className={classes.card}>
            <CardMedia className ={classes.media} image= {post.url} title={post.caption}/>
              <div className={classes.overlay} >
                  <Typography variant ="h6">{post.name}</Typography>
                  <Typography variant ="body2">{moment(post.dateOfCreation).fromNow()}</Typography>
                  
            <div className={classes.overlay}>
                <Button style ={{color:'white'}} size="small" onClick={() => setCurrentId(post.id) }><MoreHorizIcon fontSize= "default" /></Button>

            </div>
            </div>
             

              <div classes={classes.details}>
              <Typography variant ="body2" color="textSecondary" >{post.tags.map((tag) => `#${tag} `)}</Typography>

              </div>
              <CardContent>
              
              <Typography className={classes.title} variant ="h5" gutterBottom>{post.caption}</Typography>
              <Typography className={classes.title} variant ="body2" color="textSecondary" gutterBottom>{post.message}</Typography>
              </CardContent>
              <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post.id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCounts} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post.id)) }><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
              

        </Card>
    );
}

export default Post;