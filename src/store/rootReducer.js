import { combineReducers } from "@reduxjs/toolkit";
import { reactFormReducer } from "./reactForm/slice";

export const rootReducer = combineReducers({
    reactForm: reactFormReducer
})