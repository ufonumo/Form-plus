import { configureStore, Action } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { ThunkAction } from "redux-thunk"

import rootReducer, { RootState } from "./rootReducer"

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: {
                // Ignore state paths, e.g. state for 'items':
                ignoredPaths: ["templates"],
            },
            serializableCheck: { ignoredPaths: ["some.nested.path"] },
        }),
})

export type AppDispatch = typeof store.dispatch
// export const useAppDispatch = () => useDispatch()
export const useAppDispatch: () => AppDispatch = useDispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action>

export default store
