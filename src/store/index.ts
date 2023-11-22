import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "./shop/shop.api";
import goodReducer from "./shop/good"
import userReducer from "./shop/user"

export const store = configureStore({
    reducer: {
        [shopApi.reducerPath]: shopApi.reducer,
        good: goodReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware),
})