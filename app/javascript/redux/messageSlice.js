import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const messageUrl = 'http://localhost:3000/api/v1/messages';
const getGreetingMessage = createAsyncThunk('messages/getGreetingMessage', async () => {
  const result = await axios.get(messageUrl);
  return result.data;
});

export const messageSlice = createSlice({
  name: 'message',
  initialState:{value: ''},  
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGreetingMessage.fulfilled, (state, action) => {
        state.value = action.payload.message;
          })
  },
});

export { getGreetingMessage };
export default messageSlice.reducer;