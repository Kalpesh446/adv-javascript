import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../feautures/count/countSlice";
import amountReducer from "../feautures/amount/amountslice";
import userReducer from "../feautures/user/userSlice";

export const store = configureStore({
  reducer: {
    COUNT: countReducer,
    AMOUNT: amountReducer,
    USER: userReducer,
  },
});
