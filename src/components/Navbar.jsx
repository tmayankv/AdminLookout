import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiNotification3Line } from 'react-icons/ri';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customfunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={customfunc} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-gray-300 text-blue">
      <span className="absolute inline-flex rounded-full w-2 h-2 right-2 top-2" style={{ background: dotColor }} />
      {icon}

    </button>
  </TooltipComponent>
);

function Navbar() {
  const { activeMenu, setactiveMenu, isClicked, handleClick, screenSize, setscreenSize } = useStateContext();

  useEffect(() => {
    const handleSize = () => setscreenSize(window.innerWidth);

    handleSize();

    window.addEventListener('resize', handleSize);

    return window.removeEventListener('resize', handleSize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setactiveMenu(false);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton title="Menu" customfunc={() => setactiveMenu(!activeMenu)} color={localStorage.currentcolor} icon={<AiOutlineMenu />} />
      <div className="flex gap-1 items-center">
        <NavButton title="Cart" customfunc={() => { handleClick('cart'); }} color={localStorage.currentcolor} icon={<FiShoppingCart />} dotColor={localStorage.theme === 'Dark' ? 'white' : 'black'} />
        <NavButton title="Chat" customfunc={() => { handleClick('chat'); }} color={localStorage.currentcolor} icon={<BsChatLeft />} dotColor={localStorage.theme === 'Dark' ? 'white' : 'black'} />
        <NavButton title="Notification" customfunc={() => { handleClick('notification'); }} color={localStorage.currentcolor} icon={<RiNotification3Line />} dotColor={localStorage.theme === 'Dark' ? 'white' : 'black'} />
        <TooltipComponent content="User Profile" position="BottomCenter">
          <div className={`flex items-center gap-1 p-2 rounded-lg hover:bg-gray-500 cursor-pointer text-${localStorage.theme === 'Dark' ? 'white' : 'black'}`} onClick={() => { handleClick('userProfile'); }}>
            <img src={avatar} className="w-10 h-10 rounded-full" alt="" />
            <p>Hi,</p>
            <p>Mayank</p>
            <MdKeyboardArrowDown />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}

      </div>
    </div>
  );
}

export default Navbar;
