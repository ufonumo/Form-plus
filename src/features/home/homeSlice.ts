import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

export const getTemplates: any = createAsyncThunk(
    "home/getTemplates",
    async (searchItems) => {
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}?q=${searchItems}`
        )
        if (response.ok) {
            const templates = await response.json()
            return templates
        } else {
            const error: any = new Error(
                `Error ${response.status}: ${response.statusText}`
            )
            error.response = response
            throw error
        }
    }
)

const TemplateSlice: any = createSlice({
    name: "templates",
    initialState: {
        templates: [],
        status: "",
        loading: false,
    },
    reducers: {
        [getTemplates.pending]: (state: any) => {
            console.log("fetching Templates...")
            state.status = "fetching Templates..."
        },
        [getTemplates.fulfilled]: (state: any, action: PayloadAction) => {
            console.log(action.payload)
            state.templates = action.payload
            return state
        },
        [getTemplates.rejected]: (state: any, action: PayloadAction) => {
            console.log("error fetching Templates")
            state.status = "error fetching Templates"
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTemplates.pending, (state) => {
            state.loading = true
            state.status = "fetching Templates..."
        })
        builder.addCase(getTemplates.fulfilled, (state, action) => {
            state.loading = false
            state.templates = action.payload
        })

        builder.addCase(getTemplates.rejected, (state) => {
            state.loading = false
            state.status = "error fetching Templates"
        })
    },
})

export default TemplateSlice.reducer
