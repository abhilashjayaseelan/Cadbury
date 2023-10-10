import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DashboardDataSlice {
    dataType: string
}

const initialState: DashboardDataSlice = {
    dataType : '24-hours'
}

const DashboardDataSlice = createSlice({
    name: "dashboardData",
    initialState,
    reducers: {
        changeData: (state, action:PayloadAction<string>) => {
            state.dataType = action.payload
        }
    }
})

export const {changeData} = DashboardDataSlice.actions;
export default DashboardDataSlice.reducer;
