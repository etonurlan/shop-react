import { Navigation } from "../components/Navigation"
import { Offer } from "../components/Offer"
import { Trending } from "../components/Trending"
import { Sale } from "../components/Sale"


export const Home = () => {
    return (
        <div className="my-[20px]">
            <div className="flex mb-[20px]">
                <Navigation />
                <Offer />
            </div>
            <div>
                <Trending />
            </div>
            <div>
                <Sale />
            </div>
        </div>
    )
}