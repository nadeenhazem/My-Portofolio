import { createSlice } from '@reduxjs/toolkit';
const themeColor=JSON.parse(localStorage.getItem('theme'));
const initialState = {
    value: themeColor,
  }
  export const DarkmoodSlice = createSlice({
    name: 'darkmood',
  initialState,
  reducers: {
    increment: (state) => {
        if(state.value==='white'){        
     state.value='black'
     localStorage.setItem('theme', JSON.stringify(state.value))
    }
    else{
        state.value='white';
        localStorage.setItem('theme', JSON.stringify(state.value))
    }
    }}
  })
  export const { increment } = DarkmoodSlice.actions

export default DarkmoodSlice.reducer
