import { createSlice } from "@reduxjs/toolkit";

const ToastSlice = createSlice({
  name: "toast",
  initialState: { first: true },
  reducers: { setToast: (state, { payload }) => payload },
});

const { reducer, actions } = ToastSlice;
export const { setToast } = actions;
export default reducer;
