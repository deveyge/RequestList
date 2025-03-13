import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useLocalStorage } from 'shared/lib/hooks/useLocalStorage';

interface RequestState {
  requests: Request[];
}

const { getItem, setItem } = useLocalStorage();

const initialState: RequestState = {
  requests: getItem('requests') || [],
};

export const requestSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    createRequest: (state, action: PayloadAction<Request>) => {
      state.requests.push(action.payload);
      setItem('requests', state.requests);
    },
  },
});

export const { createRequest } = requestSlice.actions;

export default requestSlice.reducer;