import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/debounce";
import { useGetGoodByTitleQuery } from "../store/shop/shop.api";
import { Link } from "react-router-dom";
import { getGoodId } from "../store/shop/good"
import { useDispatch } from "react-redux"

import searchSvg from "../img/searchSvg.svg";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
  const dispatch = useDispatch()
  const { data } = useGetGoodByTitleQuery(debounced, {
    skip: debounced.length < 3,
  });
  const clickHandler = (usernameId: number) => {
    dispatch(getGoodId({id: usernameId}))
    }

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 0);
  }, [debounced]);

  return (
    <div
      className="relative mr-auto bg-[#191919] h-[35px] rounded-[6px] p-[10px] w-[300px]
                            flex flex-row-reverse"
    >
      <input
        className="
                rounded-none border-0 border-inherit border-none
                bg-scroll bg-clip-border bg-transparent bg-origin-padding
                bg-left-top bg-repeat bg-auto
                outline-0 outline-inherit outline-none outline-offset-0
                float-right p-0 w-[240px]
                text-[13px] font-normal
                "
        type="text"
        placeholder="Search for anything..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <img className="m-auto cursor-pointer" src={searchSvg} alt="Search" />
      {dropdown && (
        <ul className="absolute top-[40px] left-0 right-0 max-h-[200px] overflow-y-scroll overflow-hidden shadow-md bg-[#191919] z-10 rounded-md">
          {data?.map((user) => (
            <Link to="/good">
                <li onClick={() => clickHandler(user.id)} className="py-[3px] px-[5px] cursor-pointer hover:text-[#8B57C6]" key={user.id}>{user.title}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
