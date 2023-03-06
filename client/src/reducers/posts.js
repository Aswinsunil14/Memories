import { CREATE, UPDATE, DELETE, ACTION, FETCH_ALL, LIKE } from "../constants/actionTypes";


export default (posts = [], action) => {
    switch (action.type) {
        case DELETE:
            return posts.filter((post) => post.id !== action.payload)

        case UPDATE:
        case LIKE:
            return posts.map((post) => post.id === action.payload._id ? action.payload: post );
            
        case FETCH_ALL:
            console.log("ACTION",action)
            console.log("POSTS",posts)
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    };
};