import offerImg from "../img/offer_image.png";

export const Offer = () => {
  return (
    <div className="w-[100%] flex flex-col bg-[#191919] rounded-md relative px-[35px]">
      <div>
        <p className="text-[#212123] font-black text-[90px] whitespace-nowrap">
          BIG SALE 20%
        </p>
      </div>
      <div className="flex ml-[8px]">
        <div>
          <p className="text-[#616E74] font-medium text-[15px]">
            THE BESTSELLER OF 2022
          </p>
          <p className="text-[#F6F6F7] font-bold text-[35px] block mb-2">
            <span className="block">LENNON R2D2</span>
            <span className="block">WITH NVIDIA 5090 TI</span>
          </p>
          <button className="text-[#fff] bg-[#6C3EB8] rounded-md px-5 py-[9px]
            transition duration-150 ease-in-out hover:bg-[#386bc0]
            active:bg-[#3566b6]">
            Shop Now
          </button>
        </div>
        <div>
          <img
            className="absolute max-w-[420px] top-[100px] right-[18px]"
            src={offerImg}
            alt="Offer Image"
          />
        </div>
      </div>
    </div>
  );
};
