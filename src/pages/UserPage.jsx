import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { API } from '../api'
import { Link } from 'react-router-dom'

const UserPage = () => {
    const [posts, setPosts] = useState([]);
    const [todos, setTodos] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()
    const [user, setUser] = useState({});
    const { id } = useParams();
    const [isPostsVisible, setIsPostsVisible] = useState(false);
    const [isTodosVisible, setIsTodosVisible] = useState(false);
    

    useEffect(() => {
        const getUser = async () => {
            const response = await API.get(`/users/${id}`);
            setUser(response.data);
        }    
        getUser();
      }, [id]);

    useEffect(() => {
        const getPosts = async () => {
            if (searchParams.get('user') !== null) {
                const response = await API.get(`/posts?user=${id}`);
                setPosts(response.data.posts)
            } else {
                const response = await API.get('/posts');
                setPosts(response.data.posts)
            }      
        }
       getPosts()         
    }, [id, searchParams])

    useEffect(() => {
        const getTodos = async () => {
            if (searchParams.get('user') !== null) {
                const response = await API.get(`/todos?user=${id}`);
                setTodos(response.data.todos)
            } else {
                const response = await API.get('/todos');
                setTodos(response.data.todos)
            }   
        }
       getTodos()         
    }, [id, searchParams])

  
    const togglePostsVisibility = () => {
        setIsPostsVisible(!isPostsVisible);
        setIsTodosVisible(false);
        setSearchParams({ user: id });
      };

    const toggleTodosVisibility = () => {
        setIsTodosVisible(!isTodosVisible);
        setIsPostsVisible(false);   
        setSearchParams({ user: id });
    };


  return (
    <div> 
        <div className='container-forOnePost'>
            <strong>{user.firstName} {user.lastName}</strong> 
            <span className='onePost-text'>Age: {user.age}</span> 
            <div className='container-forBtnUser'>
                <button style={{marginRight: '10px'}} onClick={togglePostsVisibility}>
                    Posts
                </button> 
                <button onClick={toggleTodosVisibility} >Todo list</button>
            </div> 
                <ul className={`list ${isPostsVisible ? '' : 'hidden'}`}>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <p>
                                <Link to={`/posts/${post.id}`}>{post.title}</Link>
                            </p>                              
                        </li>
                    ))}
                </ul>
                <ul className={`list ${isTodosVisible ? '' : 'hidden'}`}>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <p>
                                {todo.todo}
                            </p>                              
                        </li>
                    ))}
                </ul>
        </div>       
    </div>
  )
}

export default UserPage