import sneakersImg from "../img/sneakersImg.png"
import consoleImg from "../img/consoleImg.png"
import santaImg from "../img/santaImg.jpg"

export const Sale = () => {
    return (
        <div className="grid grid-cols-2 bg-[#191919] rounded-md">
            <div className="relative">
                <div>
                    <span className="font-light text-[70px] text-[#6C3EB8] flex flex-col items-center">NEW YEAR <span className="text-[150px]">SALE</span></span>
                </div>
                <div className="flex justify-center">
                    <button className="text-[#fff] bg-[#6C3EB8] rounded-md px-5 py-[9px]
                        transition duration-150 ease-in-out hover:bg-[#386bc0]
                        active:bg-[#3566b6]">See more</button>
                </div>
                <img className="absolute bottom-[55px] left-0" src={sneakersImg} alt="sneakersImg" />
                <img className="absolute bottom-[-30px] right-0" src={consoleImg} alt="consoleImg" />
            </div>
            <div className="relative">
                <img className="rounded-r-md" src={santaImg} alt="santaImg" />
                <span className="text-[#212123] font-medium absolute left-[200px] bottom-[25px] text-[20px]">save up to <span className="text-[#6C3EB8] font-bold">50%</span> off</span>
            </div>
        </div>
    )
}