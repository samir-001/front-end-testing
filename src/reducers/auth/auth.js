import { createSlice ,createEntityAdapter} from '@reduxjs/toolkit'
import {  checkAuth } from './checkAuth'


export const Auth = createSlice({
  name: 'Auth',
  initialState :{
    login:false,
    err:""
  },
  reducers: {
    logout(state,actions){
      state.login = false
      sessionStorage.removeItem("token")
    },
    loginUser(state,actions){
      if (actions.payload.name=="samir",actions.payload.password =="123"){
        state.login = true;
        state.err = "";
        sessionStorage.setItem('token', "5456465465", 3000);

      }else{
        state.err = "بيانات غير صحيحه"
      }
    },
    setError(state,action){
      state.err = "بيانات غير صحيحه"
    }

  },

  extraReducers: {
    [checkAuth.pending]: (state) => {
      console.log("loading")
    },
    [checkAuth.fulfilled]: (state, { payload }) => {
      const token = payload.token
      sessionStorage.setItem('token', token, 3000);
      state.login  = true
      state.err =""
    },
    [checkAuth.rejected]: (state,actions) => {
      state.err ="بيانات غير صحيحة"

      console.log("rejected")
    },
  },
})



// Action creators are generated for each case reducer function
export const {logout,setError ,loginUser}  = Auth.actions
export default Auth.reducer
