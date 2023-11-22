import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { API } from '../api';

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [isUsersLoading, setIsUsersLoading] = useState(true);

    useEffect(() => {
        const getUsers = async () => {
            const response = await API.get('/users')
            setUsers(response.data.users)
            setIsUsersLoading(false)
        }
       getUsers()         
    }, [])

  return (
    <div className='container'>
        {isUsersLoading
            ? <h2>Loading...</h2>
            : <ul className='list'>
                {users.map((user) => (
                    <Link key={user.id} to={`/users/${user.id}`}>
                        <li className='item'>                            
                            <strong>{user.firstName} {user.id}</strong>                                                    
                        </li>
                    </Link>
                    ))
                }
                </ul>
        }
    </div>
  )
}

export default UsersPage