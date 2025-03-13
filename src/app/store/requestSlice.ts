import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    addRequest: (state, action: PayloadAction<Request>) => {
      state.requests.push(action.payload);
    }
  },
});

export const { addRequest } = requestSlice.actions;
export default requestSlice.reducer;