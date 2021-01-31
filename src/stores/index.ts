import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userReducer";
import isLoadingReducer from "./isLoadingReducer";
import toastReducer from "./toastReducer";

const store = configureStore({ reducer: { user: UserReducer, isLoading: isLoadingReducer, toast: toastReducer } });
export default store;
