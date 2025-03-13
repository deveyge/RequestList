import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Request } from 'entities/request/model/types'
interface RequestState {
  requests: Request[];
}


const initialState: RequestState = {
  requests: [],
};

export const requestSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    createRequest: (state, action: PayloadAction<Request>) => {
      state.requests.push(action.payload);
    },
  },
});

export const { createRequest } = requestSlice.actions;

export default requestSlice.reducer;