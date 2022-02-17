import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async amount => {
    // const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    // return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = null;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, state => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});

export const { login, logout } = userSlice.actions;
// selectors allow us to pull out information from a slice
export const selectUser = state => state.user.user;

export default userSlice.reducer;
