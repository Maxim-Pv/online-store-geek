import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from '../store/postsSlice';
import { Link } from 'react-router-dom';
import './StyleForPages.css'

const PostsPage = () => {
    const { items, isLoading, error } = useSelector(state => state.posts)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchPosts())
    }, [])
    

    return (
        <div className='container'>
          {error}
          {isLoading 
            ? <h2>Loading...</h2>
            : <ul className='list'>
              {items.map((item) => (
                      <li key={item.id} className='item'>    
                          <h4 className='title'>{item.title}</h4>
                          <p className='text'>{item.body}</p>                   
                        <div className='btnContainer'>
                            <Link to={`/posts/${item.id}`} className='btn' >edit</Link> 
                        </div>
                      </li>
                  ))
              }
              </ul>
            }
        </div>
    )
}

export default PostsPage