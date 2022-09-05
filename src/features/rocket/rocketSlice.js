import { createSlice } from '@reduxjs/toolkit';

const ROCKET_URL = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await axios.get(ROCKET_URL);
    return response.data;
  }
);

const initialState = {};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default rocketsSlice.reducer;
