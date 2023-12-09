import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Layout from './components/Layout/Layout'
import PostsPage from './pages/PostsPage'
import CreatePostPage from './pages/CreatePostPage'
import EditPostPage from './pages/EditPostPage'
import './App.css'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage />} />
          <Route path='/posts' element={<PostsPage />} />
          <Route path='/createPost' element={<CreatePostPage />} />
          <Route path='/posts/:id' element={<EditPostPage />} />
        </Route>
      </Routes>
    </> 
  )
}

export default App
