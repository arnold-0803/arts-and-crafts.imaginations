import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { menuItems, socialMedia } from "../assets/data/navBarMenuItems";
import MultiComponents from "./SufbMultiComps";
import SocialMediaIcons from "./SocialMediaIcons";
import AuthButtons from "./AuthButtons";
import { validRoutes } from "../assets/validRoutes";

const Navbar = () => {
  const [hoverMenu, setHoverMenu] = useState(null); // Track which main menu is open
  const [activeSubMenu, setActiveSubMenu] = useState(null); // Track which sub-menu is open
  const [toggleMenu, setToggleMenu] = useState(false); // For mobile screens
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  // Close menu when routing
  const location = useLocation();

  useEffect(() => {
    if(validRoutes.includes(location.pathname)){
      setToggleMenu(false);
      setHoverMenu(null);
    }
  }, [location.pathname])

  // Detect screen size and touch capability
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 849); // Adjust breakpoint if needed
    };

    const detectTouch = () => {
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
    };

    handleResize(); // Initial check
    detectTouch();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = (id) => {
    if(isSmallScreen || isTouchDevice){
      setHoverMenu(hoverMenu === id ? null : id); // Toggle main menu
      setActiveSubMenu(null); // Close all sub-menus when toggling main menu
    }
  };

  const handleSubMenuClick = (subMenuId, e) => {
    e.stopPropagation(); // Prevent event from bubbling up to the main menu
    if(isSmallScreen || isTouchDevice){
      setActiveSubMenu(activeSubMenu === subMenuId ? null : subMenuId); // Toggle sub-menu
    }
  };

  const handleMouseEnter = (id) => {
    if (!isTouchDevice) setHoverMenu(id); // Show menu on hover for non-touch devices
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setHoverMenu(null); // Hide menu on hover leave for non-touch devices
  };

  return (
    <nav className="z-50">
      <div className="flex justify-between relative bg-[#fff]">
        <div>
          <Link to={"/"}>
            <img className="w-[180px]"
              src="/images/Art_Logo.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex items-center">
          {/* MAIN MENU */}
          <ul className={toggleMenu ? "menu active" : "menu"}>
            {menuItems.map((menuItem) => (
              <li className="relative block font-bold max-[1010px]:border-b-[1px] max-[1010px]:border-[#33333328]"
                key={menuItem.id}
                onClick={() => isTouchDevice && handleMenuClick(menuItem.id)} // Handle click for touch devices
                onMouseEnter={() => handleMouseEnter(menuItem.id)} // Handle hover for non-touch devices
                onMouseLeave={handleMouseLeave} // Handle hover leave for non-touch devices
              >
                <NavLink className="relative rounded-[2px]" 
                  to={menuItem.url}>
                  {menuItem.title}
                  {menuItem.subMenuItems && (
                    <i className={`ml-1 max-[1010px]:absolute right-0 fa-solid ${
                      hoverMenu === menuItem.id ? "fa-chevron-up" : "fa-chevron-down"}`}
                    ></i>
                  )}
                </NavLink>

                {/* SUB-MENU */}
                {menuItem.subMenuItems && hoverMenu === menuItem.id && (
                  <ul className="submenu min-[1011px]:absolute max-[1010px]:top-[100%] min-[1011px]:top-[100%]">
                    {menuItem.subMenuItems.map((subMenuItem, subIdx) => (
                      <li className={`${subMenuItem.activeClass} relative min-[1011px]:border-l-[5px] min-[1011px]:border-[#fff] min-[1011px]:hover:border-l-[5px] 
                        min-[1011px]:hover:border-[#ff5757]`}
                        key={subIdx}
                        onMouseEnter={() => !isSmallScreen && !isTouchDevice && setActiveSubMenu(`${menuItem.id}-${subIdx}`)}
                        onMouseLeave={() => !isSmallScreen && !isTouchDevice && setActiveSubMenu(null)}
                        onClick={(e) => handleSubMenuClick(`${menuItem.id}-${subIdx}`, e)} // Toggle sub-sub-menu
                      >
                        <NavLink to={subMenuItem.url}>
                          {subMenuItem.subTitle}
                          {subMenuItem.subSubMenuItems && (
                            <i className={`max-[1010px]:absolute right-[6%] fa-solid ${
                              activeSubMenu === `${menuItem.id}-${subIdx}` ? "fa-chevron-up" : "fa-chevron-down"}`}
                            ></i>
                          )}
                        </NavLink>

                        {/* SUB-SUB-MENU */}
                        {subMenuItem.subSubMenuItems &&
                          activeSubMenu === `${menuItem.id}-${subIdx}` && (
                            <ul className="sub-sub-menu">
                              {subMenuItem.subSubMenuItems.map((subSubMenuItem, subSubIdx) => (
                                <li className="min-[1011px]:border-l-[5px] min-[1011px]:border-[#fff] min-[1011px]:hover:border-l-[5px] 
                                  min-[1011px]:hover:border-red-400"
                                  key={subSubIdx}
                                >
                                  <NavLink to={subSubMenuItem.url}>
                                    {subSubMenuItem.subSubTitle}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="min-[1011px]:hidden">
              <AuthButtons/>
            </li>
            <li className="min-[1011px]:hidden">
              <h4 className="text-center font-bold text-[#068b4fc2]">
                Follow Us
              </h4>
              <SocialMediaIcons socialMediaIcons={socialMedia}/>
            </li>
          </ul>

          <div>
            <MultiComponents toggleSearchForm={toggleMenu} />
          </div>

          <div className="min-[1011px]:hidden text-[1.5rem] text-[#2c0202] w-[30px]">
            <i className={toggleMenu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
              onClick={() => setToggleMenu(!toggleMenu)}
            ></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;