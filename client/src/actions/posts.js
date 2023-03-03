import * as api from '../api';

//Action Creator
export const getPosts = () => async (dispatch) => {
    try {
         const data = await api.fetchPosts();
            console.log("data",data)
         dispatch({type: 'FETCH_ALL', payload: data });
    
        } catch (error) {
        console.log(error.message);   
    }
}

export const createPost = (post) => async (dispatch) => {
    console.log("post,", post);
    try {
        const  data  = await api.createPost(post);
        console.log("Data ", data );
        dispatch({type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const data = await api.updatePost(id, post)
        console.log("finl data",data);
        dispatch({type: 'UPDATE', payload: data});

    } catch (error) {
        console.log(error);
        
    }
}