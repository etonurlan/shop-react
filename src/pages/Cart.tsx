import { useDispatch, useSelector } from "react-redux"
import { addItemToCart, removeItemFromCart } from "../store/shop/user"

export const Cart = () => {
    const sumBy = (arr: any) => arr.reduce((prev: number, cur: number) => prev + cur, 0)
    const dispatch = useDispatch()
    const cart = useSelector((state: any) => state.user.cart)

    const changeQuantity = (item: any, quantity: number) => {
        dispatch(addItemToCart({ ...item, quantity }))
    }

    const removeItem = (id: number) => {
        dispatch(removeItemFromCart(id))
    }

    return (
        <div className="p-[20px] bg-[#191919] rounded-md my-[25px]">
            <h1 className="text-[#fff] font-semibold text-[20px] mb-[10px]">Your cart</h1>
            {cart?.map((item: any) => (
                <div className="mb-[15px] flex h-[100px] py-[12px] px-[16px] bg-[#212123] rounded-lg">
                    <img className="rounded-md mr-[15px]" src={item.images[0]} alt="Good Img" />
                    <p className="text-[#fff] font-semibold text-[15px] mr-auto flex items-center">{item.title}</p>
                    <p className="text-[#fff] font-bold text-[25px] mr-auto flex items-center">{item.price}$</p>
                    <div className="flex items-center mr-auto">
                        <button onClick={() => 
                            changeQuantity(item, Math.max(1, item.quantity-1))} className="w-[25px] h-[25px] text-[16px] text-[#B8B8B8] bg-[#576067] rounded-md mr-[10px] hover:bg-[#6C3EB8] hover:text-[#fff]">-</button>
                        <p className="text-[#fff] font-bold text-[25px] mr-[10px]">{item.quantity}</p>
                        <button onClick={() => 
                            changeQuantity(item, Math.max(1, item.quantity+1))} className="w-[25px] h-[25px] text-[16px] text-[#B8B8B8] bg-[#576067] rounded-md hover:bg-[#6C3EB8] hover:text-[#fff]">+</button>
                    </div>
                    <p className="mr-auto flex items-center text-[#6C3EB8] font-bold text-[25px]">{item.price * item.quantity}$</p>
                    <button onClick={() => removeItem(item.id)} className="flex items-center text-[20px] font-bold text-[#fff] hover:text-[#6C3EB8]">X</button>
                </div>
            ))}
            <div className="flex">
                <p className="font-semibold text-[25px] text-[#B8B8B8] mr-auto">
                    TOTAL PRICE: <span className="text-[#fff]">{sumBy(cart.map(({ quantity, price }: {quantity: number, price: number}) => quantity * price))}$</span>
                </p>
                <button className="text-[#FFF] font-semibold py-[9px] px-[20px] bg-[#6C3EB8] mr-[10px] rounded-md transition duration-150 ease-in-out hover:bg-[#386bc0]
            active:bg-[#3566b6]">Proceed to checkout</button>
            </div>
        </div>
    )
}