import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    studentList: []
}

const reactFormSlice = createSlice({
    name: 'reactForm',
    initialState,
    reducers:{
        addStudent: (state,{payload})=>{
        state.studentList.push(payload)
        }
    }
})

export const {reducer: reactFormReducer, actions: reactFormActions} = reactFormSlice