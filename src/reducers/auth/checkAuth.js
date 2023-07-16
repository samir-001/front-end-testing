import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const checkAuth = createAsyncThunk(
    'auth/checkAuth',
    async (data) => {
      const response = await axios.post("http://35.180.202.199/login",data)
      return response.data
    }
  )