import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import PostsPage from './pages/PostsPage'
import Layout from './components/Layout/Layout'
import CreatePostPage from './pages/CreatePostPage'
import OnePostPage from './pages/OnePostPage'
import DeletePost from './pages/DeletePost'
import UsersPage from './pages/UsersPage'
import UserPage from './pages/UserPage'
import './App.css'
import InputUserData from './pages/InputUserData'
import OutputUserData from './pages/OutputUserData'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage />} />
          <Route path='posts' element={<PostsPage />} />
          <Route path='posts/:id' element={<OnePostPage />} />
          <Route path='create-post' element={<CreatePostPage />} /> 
          <Route path='posts/:id/delete' element={<DeletePost />} />   
          <Route path='users' element={<UsersPage />} />   
          <Route path='users/:id' element={<UserPage />} />  

          <Route path='inputUserData' element={<InputUserData />} />
          <Route path='outputUserData' element={<OutputUserData />} />
        </Route>
      </Routes>
    </> 
  )
}

export default App
