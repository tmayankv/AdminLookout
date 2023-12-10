import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

function Sidebar() {
  const { activeMenu, setactiveMenu, screenSize, currentColor } = useStateContext();

  const handleSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setactiveMenu(false);
    } else {
      setactiveMenu(true);
    }
  };

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
      <>
        <div className="flex justify-between items-center">
          <Link
            to="/"
            onClick={handleSidebar}
            className="mt-4 items-center flex text-xl font-extrabold tracking-tight dark:text-white gap-3"
          >
            <SiShopware /> <span>AdminLookout</span>
          </Link>
          <TooltipComponent content="Menu" position="BottomCenter">
            <button
              type="button"
              onClick={() => setactiveMenu(!activeMenu)}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className="mt-10">
          {links.map((item) => (
            <div className="text-gray-400 dark:text-gray-500 m-3 mt-4 uppercase flex flex-col">
              {item.title}
              {item.links.map((i) => (
                <NavLink
                  to={`/${i.name}`}
                  key={i.name}
                  onClick={handleSidebar}
                  className={`text-black dark:text-white font-semibold m-2 p-3  rounded-xl text-sm items-center flex flex-row gap-3 capitalize hover:bg-[${currentColor}] dark:text-slate-300`}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                    transform: isActive ? 'scale(1.1)' : '',
                    transition: 'transform 0.7s',
                    boxShadow: isActive ? '2px 2px 10px black' : '',
                  })}
                >
                  <span>
                    {i.icon}
                  </span>
                  <span>
                    {i.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>
      )}
    </div>
  );
}

export default Sidebar;
