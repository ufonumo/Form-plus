import { combineReducers } from "@reduxjs/toolkit"
import TemplateSlice from "../features/home/homeSlice"
import store from "./store"

const rootReducer = combineReducers({
    // Add  reducers here
    TemplateSlice,
})

export type RootState = ReturnType<typeof store.getState>

export default rootReducer
