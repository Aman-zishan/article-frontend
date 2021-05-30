import React, {useState} from 'react';
import useStyles from './styles';
import { Paper, Typography, Button, TextField} from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPosts } from '../../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '', title: '',message: '', tags: '',selectedFile: '' 
    });
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPosts(postData)); 
    }
    const clear = () => {

    }
    return (
       <Paper className={ classes.paper}>
           <form autoComplete="off" noValidate className = {`${classes.root} ${classes.form}`} onSubmit = {(e) => handleSubmit(e)}>
            <Typography variant="h6">Creating an Article</Typography>
            <TextField variant="outlined" label="creator" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value })}/>
            <TextField variant="outlined" label="title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value })}/>
            <TextField variant="outlined" label="message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value })}/>
            <TextField variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value })}/>
            <div className={`${classes.root} ${classes.fileInput}`}>
                <FileBase
                type="file"
                multiple={false}
                onDone={(file) => setPostData({...postData, selectedFile: file.base64})}/>
            </div>
            <Button className = {`${classes.root} ${classes.buttonSubmit}`} variant="contained" fullWidth color="primary" size="large"  type="submit">Submit</Button>
            <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear} >Clear</Button>
           </form>
       </Paper>
    );
}

export default Form