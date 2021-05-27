import React from 'react';
import Post from './Post/Post.js';
import useStyles from './styles';

const Posts = () => {
    const classes = useStyles();
    return (
        <>
        <h1>POST</h1>
        <Post />
        <Post />
        </>
    );
}

export default Posts