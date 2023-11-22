import { Routes, Route } from "react-router-dom"

import { Clothes } from "../pages/Clothes"
import { Computers } from "../pages/Computers"
import { Other } from "../pages/Other"
import { Furniture } from "../pages/Furniture"
import { Home } from "../pages/Home"
import { Shoes } from "../pages/Shoes"
import { GoodPage } from "../pages/GoodPage"
import { Cart } from "../pages/Cart"

export const Body = () => {
    return (
        <Routes>
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/computers" element={<Computers />} />
            <Route path="/other" element={<Other />} />
            <Route path="/furniture" element={<Furniture />} />
            <Route path="/" element={<Home />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/good" element={<GoodPage />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}