import React from "react";
import { NavLink } from "react-router-dom";
import { navIcons } from "../assets/data/navBarMenuItems";


const MultiComponents = ({toggleSearchForm}) => {
  return (
    <div className="multi-components flex">
      <div className={toggleSearchForm ? "search-form active" : "search-form"}>
        <form className="flex border-[1px] border-[#33333362] hover:border-[1px] hover:border-[#2c0202]
          text-[1.1rem] focus:ring focus-within:ring-[1px] focus-within:ring-[#2c0202]
          max-[549px]:w-full">
          <input className="min-[550px]:w-[220px] outline-none max-[549px]:w-full"
            type="text" placeholder="search items"
          />
          <button className="bg-[#fff] cursor-pointer">
            <i className="fa-solid fa-search"></i>
          </button>
        </form>
      </div>
      <div className="flex">
        <ul className="flex items-center justify-center gap-x-[11px]">
          {navIcons.map(navIcon => 
            <li className="relative"
              key={navIcon.id}>
              <NavLink className={navIcon.customClass}
                to={navIcon.url}>
                <i className={`${navIcon.icon} text-[1.2rem]`}></i>
                  {navIcon.count && <span className="absolute top-0 left-[70%] bg-[#ff5757] rounded-[30px] w-[15px]
                    h-[15px] flex justify-center items-center text-[#fff] text-[1.2rem]">
                    {navIcon.count}
                  </span>
                }
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
 
export default MultiComponents;