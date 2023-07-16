import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getArticles = createAsyncThunk(
    'event/getEvents',
    async (thunkAPI) => {
      const response = await axios.post("http://35.180.202.199//allArticles")
      console.log(response)
      return response.data.data
    }
  )