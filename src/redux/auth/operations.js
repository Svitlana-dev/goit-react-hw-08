import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = (value) => {
  axios.defaults.headers.common.Authorization = value;
};

export const register = createAsyncThunk('auth/register', async (values) => {
  const res = await axios.post('/users/signup', values);
  setAuthHeader(`Bearer ${res.data.token}`);
  return res.data;
});

export const login = createAsyncThunk('auth/login', async (values) => {
  const res = await axios.post('/users/login', values);
  setAuthHeader(`Bearer ${res.data.token}`);
  return res.data;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await axios.post('/users/logout');
  setAuthHeader('');
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    setAuthHeader(`Bearer ${reduxState.auth.token}`);
    const res = await axios.get('/users/current');
    return res.data;
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  },
);
