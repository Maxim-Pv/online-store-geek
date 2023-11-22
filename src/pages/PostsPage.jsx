import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../api'
import './StyleForPages.css'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [isPostsLoading, setIsPostsLoading] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            const response = await API.get('/posts')
            setPosts(response.data.posts)
            setIsPostsLoading(false)
        }
       getPosts()         
    }, [])


    return (
        <div className='container'>
            {isPostsLoading
                ? <h2>Loading...</h2>
                : <ul className='list'>
                    {posts.map((post) => (
                        <Link key={post.id} to={`/posts/${post.id}`}>
                            <li className='item'>                            
                                <strong>{post.title}</strong> 
                                <div>{post.body}</div>                                                     
                            </li>
                        </Link>
                        ))
                    }
                    </ul>
            }
        </div>
    )
}

export default PostsPage