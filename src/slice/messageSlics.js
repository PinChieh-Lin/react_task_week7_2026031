import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const messageSlics = createSlice({
    name: "message",
    initialState: [
        // {
        //     id: "initial",
        //     type: "success",
        //     title: "成功",
        //     text: "這是一則成功訊息"
        // }
    ],
    reducers: {
        creatMessage(state, action) {
            state.push({
                id:action.payload.id,
                type:action.payload.success ? "success" : "danger",
                title:action.payload.success ? "成功" : "失敗",
                text:action.payload.message
            })
        },
        removeMessage(state, action) {
            const index = state.findIndex(message => message.id === action.payload);
            if(index !== -1) {
                state.splice(index, 1);
        }
    },
},
});

export const createAsuncMessage = createAsyncThunk(
    'message/createAsuncMessage',
    async (payload, { dispatch, requestId }) =>{
        dispatch(creatMessage({
            ...payload, 
            id: requestId
        }))
        setTimeout(() => {
            dispatch(removeMessage(requestId))
        }, 2000)
    },

);

export const { creatMessage, removeMessage } = messageSlics.actions;

export default messageSlics.reducer;