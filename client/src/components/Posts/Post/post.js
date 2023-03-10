import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, styled } from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { useDispatch } from 'react-redux'

import moment from 'moment';
import makeStyles from "./styles";
import { deletePost, likePost } from "../../../actions/posts";



const Post = ({posts, setCurrentId}) => {
    const classes = makeStyles()
    const dispatch = useDispatch();
    return (
<>
        <Card className={classes.card}>

            {/* <img src={posts?.selectedFile} className={classes.media} ></img> */}
            <CardMedia className={classes.media} image={posts?.selectedFile} title={posts?.title} component="img"  />
            <div key={posts} className={classes.overlay}>
                <Typography variant="h6" >{posts?.creator}</Typography>
                <Typography variant='body2' >{moment(posts?.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <button 
                style={{color: 'black', backgroundColor:"transparent",border:"0"}} 
                size='small'
                 onClick={() => setCurrentId(posts._id)} 
                >
                    <MoreHorizIcon fontSize='medium' />
                </button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color='textSecondary' >{posts?.tags.map((tag) => `#${tag}`)}</Typography>
            </div>
            <Typography  className={classes.title} variant="h5" gutterBottom >{posts?.tittle}</Typography>

            <CardContent  >
                <Typography variant="body2" color="textSecondary" component="p">{posts?.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button  size="small" color="primary" onClick={() => dispatch(likePost(posts._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; Like &nbsp;
                    {posts?.likeCount}
                </Button>
                <Button  size="small" color="primary" onClick={() => dispatch(deletePost(posts._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>

            </CardActions>

        </Card>
</>
    )
}


export default Post;