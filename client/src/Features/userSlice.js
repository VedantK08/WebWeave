import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser, checkuser } from "../utils/api";
/* const host = import.meta.env.VITE_SERVER_URL;
console.log(host); */
console.log(createUser);
export const postUser = createAsyncThunk("Users/create", async (user) => {
  const response = await fetch(createUser, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
});

export const checkUser = createAsyncThunk("User/check", async (user) => {
  const response = await fetch(checkuser, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  console.log("data after checking user: ", data);
  return data;
});

const userSlice = createSlice({
  name: "User",
  initialState: {
    user_id: "",
    name: "",
    email: "",
    profile_photo: "",
    bio: "",
    created_at: "",
    password: "",
    loading: false,
    message: "",
    error: "",
  },
  allUsers: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.message = action.payload;
      })
      .addCase(postUser.rejected, (state, action) => {
        console.log(action.payload);
        state.loading = false;
      })
      .addCase(checkUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        const { user, message } = action.payload;
        state.user_id = user?.user_id || "blank_value";
        state.name = user?.name || "blank_value";
        state.email = user?.email || "blank_value";
        state.profile_photo = user?.profile_photo_url || "blank_value";
        state.bio = user?.bio || "blank_value";
        state.created_at = user?.created_at || "blank_value";
        state.password = user?.password || "blank_value";
        state.message = message || "blank_value";
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      });
  },
});

export const allUsersSelector = (state) => {
  return state.user.allUsers;
};

export const messageSelector = (state) => {
  return state.user.message;
};

export const selectUser = (state) => {
  return state.user;
};

export default userSlice.reducer;
