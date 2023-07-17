import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getArticles = createAsyncThunk(
    'event/getEvents',
    async (thunkAPI) => {
      const response = await axios.post("https://localhost:5000/allArticles")
      console.log(response)
      return response.data.data
    }
  )