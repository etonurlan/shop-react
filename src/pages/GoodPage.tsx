import { useDispatch, useSelector } from "react-redux"
import { useGetGoodInfoQuery } from "../store/shop/shop.api"
import { addItemToCart } from "../store/shop/user"

export const GoodPage = () => {
    const good = useSelector((state: any) => state.good.value)
    const {data} = useGetGoodInfoQuery(good.id)

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(addItemToCart(data))
    }

    return (
        <div className="flex p-[20px] bg-[#191919] rounded-md my-[25px]">
            <div className="mr-[20px]">
                <img className="rounded-md" src={data?.images[0]} alt="Good Img" />
            </div>
            <div>
                <h1 className="text-[#F6F6F7] font-medium text-[25px] mb-[10px]">{data?.title}</h1>
                <h2 className="text-[#F6F6F7] font-bold text-[28px] mb-[20px]">{data?.price}$</h2>
                <p className="text-[#576067] font-medium">Color: <span className="text-[#F6F6F7] ml-[10px]">Blanc</span></p>
                <ul className="grid grid-cols-3 gap-x-5 my-5 max-w-md">
                    <li className="relative">
                        <input className="sr-only peer" type="radio" value="yes" name="answer" id="answer_yes" />
                        <label className="flex p-5 text-[#F6F6F7] bg-[#212123] border-none rounded-lg cursor-pointer focus:outline-none peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_yes">Yes</label>
                        <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                        👍
                        </div>
                    </li>
                    <li className="relative">
                        <input className="sr-only peer" type="radio" value="no" name="answer" id="answer_no" />
                        <label className="flex p-5 text-[#F6F6F7] bg-[#212123] border-none rounded-lg cursor-pointer focus:outline-none peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_no">No</label>
                        <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                        👎
                        </div>
                    </li>

                    <li className="relative">
                        <input className="sr-only peer" type="radio" value="maybe" name="answer" id="answer_maybe" />
                        <label className="flex p-5 text-[#F6F6F7] bg-[#212123] border-none rounded-lg cursor-pointer focus:outline-none peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_maybe">Maybe</label>
                        <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                        🤔
                        </div>
                    </li>
                </ul>
                <p className="text-[#B8B8B8] mb-[10px]">{data?.description}</p>
                <div>
                    <button onClick={addToCart} className="text-[#FFF] font-semibold py-[9px] px-[20px] bg-[#6C3EB8] mr-[10px] rounded-md transition duration-150 ease-in-out hover:bg-[#386bc0]
            active:bg-[#3566b6]">Add to cart</button>
                    <button className="text-[#B8B8B8] font-semibold py-[9px] px-[20px] bg-[#576067] rounded-md transition duration-150 ease-in-out hover:bg-[#b72a28]
            active:bg-[#b00430] hover:text-[#FFF] active:text-[#FFF]">Add to favorites</button>
                </div>
            </div>
        </div>
    )
}