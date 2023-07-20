import { createSlice ,createEntityAdapter} from '@reduxjs/toolkit'


export const Global = createSlice({
  name: 'Global',
  initialState :{
    formModal:false
  },
  reducers: {
    showModal:(state)=>{
      state.formModal = true;
    },
    closeModal:(state)=>{
      state.formModal = false;
    }

  },

  
})



// Action creators are generated for each case reducer function
export const {closeModal,showModal}  = Global.actions

export default Global.reducer
