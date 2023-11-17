import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import PostsPage from './pages/PostsPage'
import Layout from './components/Layout/Layout'
import CreatePostPage from './pages/CreatePostPage'
import OnePostPage from './pages/OnePostPage'
import DeletePost from './pages/DeletePost'
import './App.css'

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
        </Route>
      </Routes>
    </> 
  )
}

export default App
