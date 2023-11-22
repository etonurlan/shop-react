import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: [],
        cart: [],
        isLoading: false,
    },
    reducers: {
        addItemToCart: (state, { payload }) => {
            let newCart:any = [...state.cart]
            const found = state.cart.find(({ id }) => id === payload.id)

            if (found) {
                newCart = newCart.map((item: any) => {
                    return item.id === payload.id
                        ? { ...item, quantity: payload.quantity || item.quantity + 1 }
                        : item
                })
            } else newCart.push({ ...payload, quantity: 1 })

            state.cart = newCart
        },
        removeItemFromCart: (state, { payload }) => {
            state.cart = state.cart.filter(({ id }) => id !== payload)
        }
    },
})

export const { addItemToCart, removeItemFromCart } = userSlice.actions

export default userSlice.reducer