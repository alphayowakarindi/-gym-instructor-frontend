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
      console.log('data', data.token);
      if (response.status === 201) {
        localStorage.setItem('token', data.token);
        return data;
      }
      return thunkAPI.rejectWithValue(data);
    } catch (error) {
      console.log('Error', error);
    }
  },
);

const initialState = {
  user: {
    fullName: '',
    username: '',
    email: '',
    password: '',
    errorMessage: '',
    pending: true,
    error: false,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        const newState = state;
        newState.pending = true;
        newState.error = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const newState = state;
        newState.pending = false;
        newState.error = false;
        newState.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        const newState = state;
        newState.pending = false;
        newState.error = true;
        newState.errorMessage = action.payload.errors;
      });
  },
});
export const userSelector = (state) => state.user;
export default userSlice.reducer;
