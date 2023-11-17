import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import PostForm from '../components/Form/PostForm';
import axios from 'axios';
import './StyleForPages.css';

const CreatePostPage = () => {
  const [posts, setPosts] = useState([]);
  const [createNewPost, setCreateNewPost] = useState({ title: '', body: '' });
  const navigate = useNavigate();

  const postRequest = async () => {
    try {
      await axios.post('https://dummyjson.com/posts/add', {
      title: createNewPost.title,
      body: createNewPost.body,
      userId: 1,  
      });   
      navigate('/posts') 
    } catch (error) {
        console.error(error)
      }
  }
  
  const addNewPost = () => {
    const newPost = {
      ...createNewPost,
      id: Date.now(),
    };
    setPosts((prevPosts) => [...prevPosts, newPost]);
    setCreateNewPost({ title: '', body: '' });
  };

  const deletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((p) => p.id !== postId));
  };

  return (
    <div className='form-container'>
      <PostForm 
        createNewPost={createNewPost} 
        setCreateNewPost={setCreateNewPost} 
        onSubmit={(e) => {
         e.preventDefault();
         postRequest();
         addNewPost();
        }} 
      />
        
      <div className='postsList'>
        {posts.map((p) => (
          <div key={p.id} className='post'>
            <div className='post-content'>
              <strong className='post-title'>{p.title}</strong>
              <div>{p.body}</div>
            </div>
            <div className='btn-container'>
              <button className='btn' onClick={() => deletePost(p.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatePostPage;
