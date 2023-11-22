import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useGetTrendingProductsQuery } from "../store/shop/shop.api"
import { getGoodId } from "../store/shop/good"

export const GoodMiniCard = (props: any) => {
    const {isError, data} = useGetTrendingProductsQuery(props.showMore)
    const dispatch = useDispatch()

    const clickHandler = (usernameId: number) => {
        dispatch(getGoodId({id: usernameId}))
    }

    return (
        <div className="grid grid-cols-5 w-[100%] mb-[20px]">
            { isError && <p className="text-center text-red-600">Something went wrong...</p> }
            { data?.map((user: any) => (
                <Link to="/good">
                    <div onClick={() => clickHandler(user.id)} className="flex flex-col w-[210px] h-[300px] mr-[20px] last:mr-0 mb-[20px]" key={user.id}>
                        <div>
                            <img className="w-[210px] h-[150px] rounded-t-lg" src={user.images[0]} alt="Good Image" />
                        </div>
                        <div className="bg-[#212123] py-[15px] pl-[15px] rounded-b-lg h-[150px]">
                            <h1 className="text-[#fff] font-semibold text-[15px]">{user.title}</h1>
                            <span className="text-[#B8B8B8] font-medium text-[13px] block">{user.category.name}</span>
                            <span className="text-[#6C3EB8] font-semibold text-[20px] block">{user.price}$</span>
                        </div>
                    </div>
                </Link>
            )) }
        </div>
    )
}