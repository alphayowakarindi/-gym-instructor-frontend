import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  full_name:'',
  username:'',
  email:'',
  password:'',
  pending:true,
  error:false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: () => {},
});
export const userSelector = (state) => state.user;
export default userSlice.reducer;
