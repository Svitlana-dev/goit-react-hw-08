import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue('Failed to load contacts.');
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', newContact);
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue('Failed to add contact.');
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contactId}`);
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue('Failed to delete contact.');
    }
  },
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, updatedData }, thunkAPI) => {
    try {
      const res = await axios.patch(`/contacts/${id}`, updatedData);
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue('Failed to update contact.');
    }
  },
);
