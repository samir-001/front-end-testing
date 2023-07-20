import { configureStore } from '@reduxjs/toolkit'
import ArticlesReducer from "./reducers/articles/articles"
import AuthReducer from "./reducers/auth/auth"
import globalReducer from "./reducers/global/global"
export const store = configureStore({
  reducer: {
    Articles: ArticlesReducer,
    Auth: AuthReducer,
    Global:globalReducer,
  },
})