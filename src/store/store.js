import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../slice/messageSlics";

export const store = configureStore({
    reducer: {
        message: messageReducer,
    }
})

export default store;