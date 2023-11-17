import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './StyleForPages.css'
import axios from 'axios';

const DeletePost = () => {
    const location = useLocation();
    const { post } = location.state || {};
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
          await axios.delete(`https://dummyjson.com/posts/${post.id}`);
          navigate('/posts');
        } catch (error) {
          console.error(error);
        }
    };

    return (
        <div>
            {post 
                ? ( 
                    <div className='container-forDeletePost'>                  
                        <h2>Do you really want to delete the post?</h2>
                        <div className='deletePost'>
                            <strong>{post.title}</strong>
                            <div>{post.body}</div>                         
                        </div>   
                        <div className='container-forBtnDeletePost'>
                            <button onClick={() => navigate(-1)}>No</button>
                            <button onClick={handleDelete}>Yes</button>  
                        </div>
                       
                    </div>              
                ) : (               
                    <p>Post not found</p>
                    )
            }             
        </div>
    );
};

export default DeletePost