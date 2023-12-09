import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editPost } from '../store/postsSlice'

const EditPostPage = () => {
  const posts = useSelector(state => state.posts.items)
  const { id } = useParams()
  const [currentPost, setCurrentPost] = useState({title: '', body: ''});
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const findPost = posts.find(post => post.id === Number(id));

    if(findPost) {
      const postToEdit = { ...currentPost, title: findPost.title, body: findPost.body };
      setCurrentPost(postToEdit)
    }

  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(editPost(currentPost))
    navigate('/posts')
  }

  return (
    <div className="container">
      <form className='form' onSubmit={handleSubmit}>
            <input type="hidden" value={currentPost.id} name='id'/>
            <input
                className='input'
                type="text"
                value={currentPost.title}
                onChange={(e) => setCurrentPost({...currentPost, title: e.target.value})}
            />
            <textarea
                className='input textarea'
                type='text'
                value={currentPost.body}
                onChange={(e) => setCurrentPost({...currentPost, body: e.target.value})}
            />
            <button className='btn' type="submit">Save</button>
            <button type="button" onClick={() => navigate(-1)}>Cansel</button>
        </form>
    </div>
    
  )
}

export default EditPostPage