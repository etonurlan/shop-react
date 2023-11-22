import { useState, useEffect } from "react"

import { GoodMiniCard } from "./GoodMiniCard"

export const Trending = () => {
    const [showMore, setShowMore] = useState(5)
    const [showButton, setShowButton] = useState(true)

    useEffect(() => {
        setShowButton(showMore < 25)
    }, [showMore])

    return (
        <div className="bg-[#191919] p-[20px] rounded-md mb-[20px]">
            <h1 className="text-[#fff] font-semibold text-[20px] flex justify-center mb-[20px]">Trending</h1>
            <GoodMiniCard showMore={showMore} />
            { showButton && 
                <div className="flex justify-center">
                    <button onClick={() => setShowMore(showMore + 5)} className="text-[#fff] bg-[#6C3EB8] rounded-md px-5 py-[9px]
                    transition duration-150 ease-in-out hover:bg-[#386bc0]
                    active:bg-[#3566b6]">See more</button>
                </div> 
            }        
        </div>
    )
}