import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <div className="text-[#b8b8b8] bg-[#191919] p-[25px] w-[300px] h-[400px] rounded-md flex flex-col mr-[50px]">
            <h1 className="text-white font-semibold text-xl">CATEGORIES</h1>
            <ul className="mb-auto">
                <li><Link className="hover:text-[#8B57C6]" to="/computers">Computers</Link></li>
                <li><Link className="hover:text-[#8B57C6]" to="/clothes">Clothes</Link></li>
                <li><Link className="hover:text-[#8B57C6]" to="/shoes">Shoes</Link></li>
                <li><Link className="hover:text-[#8B57C6]" to="/furniture">Furniture</Link></li>
                <li><Link className="hover:text-[#8B57C6]" to="/other">Other</Link></li>
            </ul>
            <div className="flex">
                <span className="mr-auto hover:text-[#8B57C6] cursor-pointer">Help</span>
                <span className="hover:text-[#8B57C6] cursor-pointer underline">Terms & Conditions</span>
            </div>
        </div>
    )
}