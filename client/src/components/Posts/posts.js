import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from 'react-redux';


import Post from './Post/post'
import makeStyles from "./styles";


const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts)
    const classes = makeStyles();

    console.log("POSTESSSSSS---:::",posts?.data);

    return (

        !posts.data?.length ? <CircularProgress /> : (
            <Grid className={classes.container} container justify-content="stretch" spacing={3} >
               {posts?.data.map((post) => (
                <Grid  key={post?._id} item xs={12} sm={6} >
                    <Post posts={post} setCurrentId={setCurrentId} />
                </Grid>
               ))}
            </Grid>
        )
        

    )
}


export default Posts;