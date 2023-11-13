import React, { useState } from 'react';
import './StyleForPages.css';

const CreatePostPage = () => {
  const [posts, setPosts] = useState([]);
  const [createNewPost, setCreateNewPost] = useState({ title: '', body: '' });

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
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addNewPost();
        }}
      >
        <input
          className='input'
          type="text"
          value={createNewPost.title}
          onChange={(e) => setCreateNewPost({ ...createNewPost, title: e.target.value })}
          placeholder='Post title'
        />
        <input
          className='input'
          type='text'
          value={createNewPost.body}
          onChange={(e) => setCreateNewPost({ ...createNewPost, body: e.target.value })}
          placeholder='Post description'
        />
        <button className='btn' type="submit">Create post</button>
      </form>

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
