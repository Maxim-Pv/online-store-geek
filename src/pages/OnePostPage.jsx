import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './StyleForPages.css'

const OnePostPage = () => {
  const [isPostLoading, setIsPostLoading] = useState(true);
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/posts/${id}`);
        setPost(response.data);
        setIsPostLoading(false)
      } catch (error) {
        console.error(error);
      }
    }

    getPost();
  }, [id]);

  const handleDelete = () => {
    navigate(`/posts/${id}/delete`, { state: { post } });
  }

  return (
    <div>
      {isPostLoading
        ? <h2>Loading...</h2>
        : <div className='container-forOnePost'>
            <strong>{post.title}</strong> 
            <div className='onePost-text'>{post.body}</div> 
            <button onClick={handleDelete}>Delete</button>  
          </div>      
      }
    </div> 
  )
}

export default OnePostPage