import './PostForm.css'

const PostForm = ({ createNewPost, setCreateNewPost, onSubmit }) => {
    return (
        <form className='form' onSubmit={onSubmit}>
            <input
                className='input'
                type="text"
                value={createNewPost.title}
                onChange={(e) => setCreateNewPost({ ...createNewPost, title: e.target.value })}
                placeholder='Post title'
            />
            <input
                className='input'
                type='text'
                value={createNewPost.body}
                onChange={(e) => setCreateNewPost({ ...createNewPost, body: e.target.value })}
                placeholder='Post description'
            />
            <button className='btn' type="submit">Create post</button>
        </form>
    )
}

export default PostForm