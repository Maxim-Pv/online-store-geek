import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './StyleForPages.css'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [isPostsLoading, setIsPostsLoading] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            const response = await axios.get('https://dummyjson.com/posts')
            setPosts(response.data.posts)
            setIsPostsLoading(false)
        }
       getPosts()         
    }, [])


    return (
        <div className='container-post'>
            {isPostsLoading
                ? <h2>Loading...</h2>
                : <ul className='postsList'>
                    {posts.map((post) => (
                        <Link key={post.id} to={`/posts/${post.id}`}>
                            <li className='postItem'>                            
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