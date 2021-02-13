import axios from 'axios';

//API Routes 
 const url='https://memestream-backend-aakanksha.herokuapp.com/memes';
//const url = "http://localhost:5000/memes/"

 export const fetchPosts =() =>axios.get(url);

 export const createPost = (newPost) => axios.post(url,newPost);
 
 export const updatePost =(id,updatedPost) =>axios.patch(`${url}/${id}`,updatedPost)
 export const deletePost=(id) => axios.delete(`${url}/${id}`);
 export const likePost =(id) => axios.patch(`${url}/${id}/likePost`);





