import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';
import { themeColors } from '../data/dummy';

function ThemeSettings() {
  const { setThemeOpen, ThemeSetter, handleColor, currentColor } = useStateContext();

  const handleThemeChange = (e) => {
    ThemeSetter(e);
  };

  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0">
      <div className={`float-right h-screen ${localStorage.getItem('theme') === 'Dark' ? 'dark' : ''} bg-white dark:bg-secondary-dark-bg dark:text-white w-400 `}>
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="text-lg text-bold">Settings</p>
          <TooltipComponent content="Close" position="BottomCenter">
            <button
              type="button"
              className="text-xl rounded-full p-3 hover:bg-dark-100 mt-4 block"
            >
              <MdOutlineCancel onClick={() => { setThemeOpen(false); }} />
            </button>
          </TooltipComponent>
        </div>
        <div className="border-t-2 border-gray-500 mx-10" />
        <div className="flex flex-col p-4 ml-4">
          <p className="text-sm text-gray-700 dark:text-white text-semibold">Theme Selection</p>
          <div className="mt-5">
            <input type="radio" id="light" name="theme" checked={localStorage.theme === 'Light'} onChange={handleThemeChange} value="Light" />
            <span className="cursor-pointer pl-1">Light</span>
          </div>
          <div className="mt-5">
            <input type="radio" id="dark" name="theme" checked={localStorage.theme !== 'Light'} onChange={handleThemeChange} value="Dark" />
            <span className="cursor-pointer pl-1">Dark</span>
          </div>
        </div>
        <div className="flex flex-col pt-2 p-4 ml-4">
          <p className="text-sm text-gray-700 dark:text-white text-semibold">Color Selection</p>
          <div className="flex gap-3 flex-row mt-3">
            {themeColors.map((item, i) => (
              <button type="button">
                <p className="w-8 h-7 rounded-xl flex justify-center items-center" key={i} style={{ backgroundColor: item.color }} onClick={() => handleColor(item.color)} >
                  <BsCheck className={`${currentColor === item.color ? '' : 'hidden'}`} />
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeSettings;
