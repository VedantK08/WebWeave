import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const host = import.meta.env.VITE_SERVER_URL;

export const getAllPosts = createAsyncThunk("Post/All", async () => {
  const response = await fetch(`${host}/api/post/all`);
  const data = await response.json();
  return data;
});

export const specificUserPost = createAsyncThunk(
  "Post/Specific",
  async (id) => {
    const response = await fetch(`${host}/api/post/specific/${id}`);
    const data = await response.json();
    return data;
  }
);

export const createPost = createAsyncThunk("post/createpost", async (data) => {
  const response = await fetch(`${host}/api/post/createPost`, {
    method: "POST",
    body: data,
  });
  const result = await response.json();
  return result;
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    allUserPosts: [],
    allPosts: [],
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state, action) => {
        state.loading = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.allPosts = [...state.allPosts, action.payload.user];
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(getAllPosts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.allPosts = action.payload;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(specificUserPost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(specificUserPost.fulfilled, (state, action) => {
        state.allUserPosts = action.payload;
      })
      .addCase(specificUserPost.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const selectAllPosts = (state) => {
  return state.post.allPosts;
};

export const selectUserPosts = (state) => {
  return state.post.allUserPosts;
};

export default postSlice.reducer;
