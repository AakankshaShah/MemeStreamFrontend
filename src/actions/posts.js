import { Accordion } from '@material-ui/core';
import * as api from '../api';


//Actions Creators
//Redux related function definition and implementions



//For getting memes saved in database from backend
export const getPosts = () => async (dispatch) => {

try{
     const { data } = await api.fetchPosts();
     dispatch({type : 'FETCH_ALL', payload : data});
}
catch(error){
    console.log(error.message);

}


    
    
}
//For creating new meme and adding to database
export const createPost = (post) => async(dispatch) => {

    try{
        const {data } =await api.createPost(post);
        dispatch({type: 'CREATE' ,payload: data});

    }
    catch(error)
    {
        console.log(error);

    }

}
//For updating existing memes in the database
export const updatePost= (id,post) => async (dispatch) =>{
    try{
          const {data} = await api.updatePost(id,post) ;
          dispatch({type: 'UPDATE',payload: data});
    }
    catch(error)
    { console.log(error.message);

    }

}
//For deleting memes
export  const deletePost =(id) => async(dispatch) =>{
    try{
        await api.deletePost(id);
        dispatch({type:'DELETE',payload:id});

    }
    catch(error)
    {console.log(error);

    }
}
//For liking memes
export const likePost = (id) =>async (dispatch) =>{
try{
    const {data} = await api.likePost(id) ;
    dispatch({type: 'LIKE',payload: data});
}
catch (error)
{
console.log(error);


}



}