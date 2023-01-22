import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const { REACT_APP_BASE_URL } = process.env

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async({full_name, username, email, password}, thunkAPI) => {
    try {
        const response = await fetch(
            `${REACT_APP_BASE_URL}/users`,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    full_name,
                    username,
                    email,
                    password
                }),
            }
        );
        let data = await response.json();
        console.log('data', data);
    } catch (error) {
        console.log('Error', e.response.data);
    }
  }
)

const initialState = {
  full_name:'',
  username:'',
  email:'',
  password:'',
  errorMessage:'',
  pending:true,
  error:false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(registerUser.pending, (state, action) =>{
      state.pending = true;
      state.error = false;
    })
    .addCase(registerUser.fulfilled, (state, action) =>{
      state.pending = false;
      state.error = false;
      state.full_name = action.payload.user.full_name
      state.username = action.payload.user.username
      state.email = action.payload.email
      state.password = action.payload.user.password
    })
    .addCase(registerUser.rejected, (state, action) =>{
      state.pending = false;
      state.error = true;
      state.errorMessage = action.payload.message
    })
  },
});
export const userSelector = (state) => state.user;
export default userSlice.reducer;
