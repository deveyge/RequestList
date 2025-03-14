import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Request } from 'entities/request/model/types';

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
    setRequests: (state, action: PayloadAction<Request[]>) => {
      state.requests = action.payload;
    },
    createRequest: (state, action: PayloadAction<Request>) => {
      state.requests.push(action.payload);
    },
    updateRequest: (state, action: PayloadAction<Request>) => {
      const index = state.requests.findIndex((r) => r.id === action.payload.id);
      if (index !== -1) {
        state.requests[index] = action.payload;
      }
    },
    deleteRequest: (state, action: PayloadAction<string>) => {
      state.requests = state.requests.filter((r) => r.id !== action.payload);
    },
  },
});

export const { setRequests, createRequest, updateRequest, deleteRequest } = requestSlice.actions;

export default requestSlice.reducer;