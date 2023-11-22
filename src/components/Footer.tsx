import logo from "../img/logo.svg"
import youtubeSvg from "../img/youtube.svg"
import facebookSvg from "../img/facebook.svg"
import instaSvg from "../img/instagram.svg"

export const Footer = () => {
    return (
        <div className="flex p-[24px] bg-[#191919] rounded-md">
            <img className="mr-auto cursor-pointer" src={logo} alt="Footer Logo" />
            <span className="mr-auto text-[#576067]">Developed by <span className="text-[#6C3EB8] cursor-pointer">Nurlan</span></span>
            <ul className="flex">
                <li className="mr-[5px] cursor-pointer"><img src={youtubeSvg} alt="YouTube" /></li>
                <li className="mr-[5px] cursor-pointer"><img src={facebookSvg} alt="Facebook" /></li>
                <li className="cursor-pointer"><img src={instaSvg} alt="Instagram" /></li>
            </ul>
        </div>
    )
}