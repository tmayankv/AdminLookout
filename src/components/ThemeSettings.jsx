import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';
import { themeColors } from '../data/dummy';

function ThemeSettings() {
  const { ThemeSetter, handleColor, ThemeSet, currentColor } = useStateContext();
  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0">
      <div className={`float-right h-screen ${localStorage.getItem('theme') === 'Dark' ? 'dark' : ''} bg-white dark:bg-secondary-dark-bg dark:text-white w-400 `}>
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="text-lg text-bold">Settings</p>
          {/* <TooltipComponent constent="Close" position="BottomCenter">
            <button type="button">
              <MdOutlineCancel onClick={() => { setThemeOpen(false); }} />
            </button>
          </TooltipComponent> */}
          <TooltipComponent content="Menu" position="BottomCenter">
            <button
              type="button"
              className="text-xl rounded-full p-3 hover:bg-dark-100 mt-4 block"
            >
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className="border-t-2 border-gray-500 mx-10" />
        <div className="flex flex-col p-4 ml-4">
          <p className="text-sm text-gray-700 dark:text-white text-semibold">Theme Selection</p>
          <div className="mt-5">
            <input type="radio" id="light" name="theme" checked={ThemeSet !== 'Dark'} onChange={ThemeSetter} value="Light" />
            <label htmlFor="light" className="cursor-pointer pl-1">Light</label>
          </div>
          <div className="mt-5">
            <input type="radio" id="dark" name="theme" checked={ThemeSet === 'Dark'} onChange={ThemeSetter} value="Dark" />
            <label htmlFor="dark" className="cursor-pointer pl-1">Dark</label>
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
