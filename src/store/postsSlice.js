import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
      const response = await axios.get('https://dummyjson.com/posts?limit=5')
      return response.data
})

export const addNewPost = createAsyncThunk(
  'newPost/addNewPost',
  async (newPost) => {
    const response = await axios.post('https://dummyjson.com/posts/add', {
      title: newPost.title,
      body: newPost.body,
      userId: 5,
    })
    return response.data
  }
)

export const editPost = createAsyncThunk(
  'post/editPost',
  async ({ id, title, body }) => {
    const response = await axios.put(`https://dummyjson.com/posts/${id}`, {
      title: id.title,
    })
    return response.data
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
      items: [],
      isLoading: false,
      error: null,       
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.error = null
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
          state.isLoading = false
          state.items = action.payload.posts
          state.error = null
      })
      .addCase(fetchPosts.rejected, (state, action) => {
          state.isLoading = false
          state.error = action.error.message
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })
      .addCase(editPost.fulfilled, (state, action) => {
        const { id, title, body } = action.payload;
        state.items = state.items.map(post => 
          post.id === id ? { ...post, title, body } : post
        );
      })
  }
})

export const postsReducer = postsSlice.reducer