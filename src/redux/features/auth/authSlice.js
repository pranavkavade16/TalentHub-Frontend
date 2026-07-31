import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import authService from "./authService";

// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async (loginData, thunkAPI) => {
//     try {
//       const response = await authService.login(loginData);
//       localStorage.setItem("accessToken", response.data.accessToken);

//       return {
//         user: response.data.user,
//         token: response.data.accessToken,
//       };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || "Login failed",
//       );
//     }
//   },
// );

const initialState = {
  user: null,
  token: localStorage.getItem("accessToken") || null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    clearError: (state) => {
      state.error = null;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;

      localStorage.removeItem("accessToken");
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginUser.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = null;
  //     })

  //     .addCase(loginUser.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.user = action.payload.user;
  //       state.token = action.payload.token;
  //       state.isAuthenticated = true;
  //       state.error = null;
  //     })

  //     .addCase(loginUser.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //       state.isAuthenticated = false;
  //     });
  // },
});

export const { clearError, logout } = authSlice.actions;

export default authSlice.reducer;
