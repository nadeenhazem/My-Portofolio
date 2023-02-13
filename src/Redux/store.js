import { configureStore } from "@reduxjs/toolkit";
import DarkmoodSlice from "./Slices/DarkmoodSlice";
const store=configureStore({
    reducer:{
        darkmood:DarkmoodSlice,

    }
})
export default store