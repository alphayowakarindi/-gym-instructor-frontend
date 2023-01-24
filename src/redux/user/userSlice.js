import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const { REACT_APP_BASE_URL } = process.env;

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async ({
    fullName, username, email, password,
  }, thunkAPI) => {
    try {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/users`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: {
              fullName,
              username,
              email,
              password,
            },
          }),
        },
      );
      const data = await response.json();
      if (response.status === 201) {
        localStorage.setItem('token', data.token);
        return thunkAPI.fulfillWithValue(data);
      }
      const errors = data.errors.map((error) => error);
      return thunkAPI.rejectWithValue(errors);
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.message);
    }
  },
);

const initialState = {
  user: {
    fullName: '',
    username: '',
    email: '',
    pending: true,
    error: false,
    errorMessage: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        const newState = state.user;
        newState.pending = true;
        newState.error = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const newState = state.user;
        newState.pending = false;
        newState.error = false;
        newState.fullName = action.payload.user.fullName;
        newState.email = action.payload.user.email;
        newState.username = action.payload.user.username;
      })
      .addCase(registerUser.rejected, (state, action) => {
        const newState = state.user;
        newState.pending = false;
        newState.error = true;
        const err = action.payload.map((e) => e);
        newState.errorMessage = err;
      });
  },
});
export const userSelector = (state) => state.user;
export default userSlice.reducer;
