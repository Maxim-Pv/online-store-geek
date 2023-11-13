import React, { useEffect, useState } from 'react'
import './StyleForPages.css'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [isPostsLoading, setIsPostsLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then((response) => response.json())
            .then(json => {
                setPosts(json.posts)
                setIsPostsLoading(false)
            })
            
    }, [])

    return (
        <div className='container-post'>
            {isPostsLoading
                ? <h1>Loading...</h1>
                : <ul className='postsList'>
                    {posts.map((post) => (
                        <li className='postItem' key={post.id}>
                           <strong>{post.title}</strong> 
                            <div>{post.body}</div>
                        </li>

                    ))}
                    </ul>
            }
        </div>
    )
}

export default PostsPage