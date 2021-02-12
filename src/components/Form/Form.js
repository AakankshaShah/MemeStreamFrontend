import React , {useState} from 'react';
import { TextField,Button,Typography,Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch,useSelector } from 'react-redux';

import useStyles from './styles';

import {createPost,updatePost } from '../../actions/posts';
import { useEffect } from 'react';
//import { updatePost } from '../../../../server/controllers/posts';


const Form= ({currentId,setCurrentId}) => {
    const[postData,setPostData] =useState({
        name:'',
        caption:'',
        message:'',
        tags:'',
        url:''

    });

    const post=useSelector((state) => currentId ? state.posts.find((p) => p._id===currentId ):null);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() =>{
        if(post)
        setPostData(post);

    },[post]);

    const handleSubmit =(e) =>{
        e.preventDefault();
if(currentId)
{
    dispatch(updatePost(currentId,postData));
    clear();
}
else{
        
        dispatch(createPost(postData));
        clear();
}

    }

    const clear = () =>
    {setCurrentId(null);
        setPostData({name:'',message:'',caption:'', tags:'',url:'',});


    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete = "off" noValidate className = {`${classes.root} ${classes.form}`}  onSubmit= {handleSubmit}>
                  <Typography variant = "h6" >{currentId? 'Editing meme':'Adding New Meme'}</Typography>
                  <TextField name="owner" 
                  varaint ="outlined" 
                  label ="Meme Owner" 
                  required={true}
                  fullWidth value={postData.name}
                  onChange={(e) =>setPostData({...postData,name: e.target.value})}
                  />
                  <TextField name="caption" 
                  varaint ="outlined" 
                  label ="Caption" 
                  required={true}
                  fullWidth value={postData.caption}
                  onChange={(e) =>setPostData({...postData,caption: e.target.value})}
                  />
                  <TextField name="message" 
                  varaint ="outlined" 
                  label ="Message" 
                  fullWidth value={postData.message}
                  onChange={(e) =>setPostData({...postData,message: e.target.value})}
                  />
                  <TextField name="tags" 
                  varaint ="outlined" 
                  label ="Tags" 
                  fullWidth value={postData.tags}
                  onChange={(e) =>setPostData({...postData,tags: e.target.value.split(',')})}
                  />
                  <TextField name="Meme url" 
                  varaint ="outlined" 
                  required={true}
                  label ="Meme url" 
                  fullWidth value={postData.url}
                  onChange={(e) =>setPostData({...postData,url: e.target.value})}
                  />

                  {/* <div className={classes.fileInput}>
                      <FileBase 
                       type= "file"
                       multiple={false}
                       onDone = { ({base64}) => setPostData({ ...postData,selectedFile: base64})}
                      /> 
                      </div>  */}
                      <Button className={classes.buttonSubmit}  variant ="contained" color= "secondary" size= "small" type ="submit" fullWidth>Submit Meme</Button>
                      <Button  variant ="contained" color= "secondary" size= "small" onClick={clear} fullWidth>Clear</Button>
                      
            </form>

        </Paper>
    );
}

export default Form;