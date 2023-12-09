import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "../store/postsSlice";

const CreatePost = () => {
  const posts = useSelector((state) => state.posts.items)
  const [newPost, setNewPost] = useState({title: '', body: ''})
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.body) return;

    dispatch(addNewPost(newPost))
    setNewPost({title: '', body: ''})
  }

  const handleTitleChange = (e) => {
    setNewPost({
      ...newPost,
      title: e.target.value
    });
  }

  const handleBodyChange = (e) => {
    setNewPost({
      ...newPost,
      body: e.target.value
    });
  }

  return (
    <div className='container createPost_container'>
      <form className='form' onSubmit={handleSubmit}>
            <input
                className='input'
                type="text"
                value={newPost.title}
                onChange={handleTitleChange}
                placeholder='Post title'
            />
            <input
                className='input'
                type='text'
                value={newPost.body}
                onChange={handleBodyChange}
                placeholder='Post description'
            />
            <button className='btn' type="submit">Create post</button>
        </form>
        <ul className='list'>
          {posts.map((post) => (
            <div key={post.id} className="item">
              <h4 className="title">{post.title}</h4>
              <p className="text">{post.body}</p>
            </div>
          ))}
        </ul>
    </div>
  )
}

export default CreatePost