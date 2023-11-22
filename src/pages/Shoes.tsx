import { GoodMiniCardCategories } from "../components/GoodMiniCardCategories"

export const Shoes = () => {

    return (
        <div className="bg-[#191919] my-[20px] rounded-md py-[25px] px-[20px]">
            <h1 className="text-[#fff] font-semibold text-[20px] flex justify-center mb-[24px]">Shoes</h1>
            <input className="bg-[#212123] rounded-lg text-[#fff] py-[12px] px-[24px] placeholder:text-[#616E74] mr-[24px]" type="text" placeholder="Product name" />
            <input className="bg-[#212123] rounded-lg text-[#fff] py-[12px] px-[24px] placeholder:text-[#616E74]" type="number" placeholder="Price from" />
            <GoodMiniCardCategories id={4} />
        </div>
    )
}