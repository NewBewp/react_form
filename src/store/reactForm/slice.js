import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    studentList: [],
    studentEdit: undefined
}

const ReactFormSlice = createSlice({
    name: 'ReactForm',
    initialState,
    reducers: {
        addStudent: (state, { payload }) => {
            // console.log("payload: ", payload);
            state.studentList.push(payload)
        },
        deleteStudent: (state, { payload }) => {
            
            console.log("state.studentList.filter(stu => stu.maSV): ", state.studentList.filter(stu => stu.maSV));
            state.studentList = state.studentList.filter(stu=>stu.maSV !== payload)
        }
    }
})

export const { reducer: ReactFormReducer, actions: ReactFromActions } = ReactFormSlice