import { Link } from "react-router-dom"

import logoSvg from "../img/logo.svg"
import avatarSvg from "../img/avatarSvg.svg"
import favouritesSvg from "../img/favouritesSvg.svg"
import basketSvg from "../img/basketSvg.svg"
import { Search } from "./Search"

export const Header = () => {
    return (
        <header className="text-[#b8b8b8] flex">
            <div className="mr-auto cursor-pointer">
                <Link to="/"><img src={logoSvg} alt="Logo" /></Link>
            </div>
            <div className="flex mr-auto items-center">
                <img className="mr-[20px] p-[10px] rounded-[50%] bg-[#191919] cursor-pointer" src={avatarSvg} alt="Avatar Logo" />
                <p className="whitespace-nowrap">Nurlan Tirzhanov</p>
            </div>
            <Search />
            <div className="flex">
                <Link to="/cart">
                    <div className="flex">
                        <img className="mr-[18px] cursor-pointer" src={favouritesSvg} alt="Favourites Goods" />
                        <img className="cursor-pointer" src={basketSvg} alt="Shopping cart" />
                    </div>
                </Link>
            </div>
        </header>
    )
}