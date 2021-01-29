import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userReducer";
import isLoadingReducer from "./isLoadingReducer";

const store = configureStore({ reducer: { user: UserReducer, isLoading: isLoadingReducer } });
export default store;
