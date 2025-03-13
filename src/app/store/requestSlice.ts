import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RequestsState {
  requests: Request[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: RequestsState = {
  requests: [],
  status: 'idle',
  error: null,
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