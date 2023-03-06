import * as api from '../api';
import { CREATE, UPDATE, DELETE, ACTION, FETCH_ALL, LIKE } from '../constants/actionTypes'

//Action Creator
export const getPosts = () => async (dispatch) => {
    try {
         const data = await api.fetchPosts();
            console.log("data",data)
         dispatch({type: FETCH_ALL, payload: data });
    
        } catch (error) {
        console.log(error.message);   
    }
}

export const createPost = (post) => async (dispatch) => {
    console.log("post,", post);
    try {
        const  data  = await api.createPost(post);
        console.log("Data ", data );
        dispatch({type: CREATE , payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const data = await api.updatePost(id, post)

        dispatch({type: UPDATE, payload: data});

    } catch (error) {
        console.log(error);
        
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)

        dispatch({type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({type: LIKE, payload: data});
    } catch (error) {
        console.log(error);
    }
}