import React, {useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64' 
import { useDispatch, useSelector } from "react-redux";
import makeStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";



const Form = ({currentId, setCurrentId}) => {

    const classes = makeStyles()
    const [postData, setPostData] = useState({ creator: '', tittle: '', message: '', tags: '', selectedFile: ''})
    const post = useSelector((state) =>  currentId ? state.posts.data.find((p) =>  p._id === currentId) : null) 
    const dispatch = useDispatch();

    useEffect(() => {
      if (post) {
        setPostData(post)
      }
    }, [post])
    
    
    const hanndleChange = (e) => {

        let {name, value } = e.target
        setPostData((previous) => {
            return ({...previous, [name]: value})
        })


    }
    const handleClick = (e) =>{
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData))
        }else{
            dispatch(createPost(postData))
        }  
        clear();
    }
     const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', tittle: '', message: '', tags: '', selectedFile: ''})
    } 
   
    return (

        <Paper className={classes.Paper} >
            <form autoComplete="off" noValidate className={ `${classes.root} ${classes.form}`} onSubmit={handleClick}>
                <Typography variant="h6" > {currentId ? 'Editing' : 'Creating'} a Memory </Typography>
                <TextField name="creator"  variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={hanndleChange}/>
                <TextField name="tittle" variant="outlined" label="Tittle" fullWidth value={postData.tittle} onChange={hanndleChange}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={hanndleChange}/>
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={hanndleChange}/>
                <div className={classes.fileInput}>
                    <FileBase type= "file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}></FileBase>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color='primary' type='submit' size='large' fullWidth>Submit</Button>
                <Button  variant="contained" color='secondary'  size='small' onClick={clear} fullWidth>clear</Button>


            </form>
        </Paper>
    ) 
}


export default Form;