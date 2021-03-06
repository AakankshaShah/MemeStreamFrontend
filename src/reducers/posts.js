//Meme Reducers
export default (posts = [],action) =>{
    switch (action.type) {
        case 'FETCH_ALL':

            return action.payload;
            case 'DELETE':
                return posts.filter((post) => post.id !== action.payload);

            case 'CREATE':
                return [ ...posts,action.payload];
            case 'UPDATE':
                return posts.map((post) => post.id=== action.payload.id ? action.payload : post);
            case 'LIKE':
                return posts.map((post) => post.id=== action.payload.id ? action.payload : post);
            
            
    
        default:
            return posts;
    }
}