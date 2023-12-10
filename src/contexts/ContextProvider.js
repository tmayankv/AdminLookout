import React, { createContext, useContext, useState, useMemo } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setactiveMenu] = useState(true);
  const [isClicked, setisClicked] = useState(initialState);
  const [screenSize, setscreenSize] = useState(undefined);
  const [currentColor, setcurrentColor] = useState(localStorage.getItem('currentcolor'));
  const [ThemeSet, setThemeSet] = useState(localStorage.getItem('theme'));
  const [ThemeOpen, setThemeOpen] = useState(false);

  const ThemeSetter = (e) => {
    setThemeSet(e.target.values);
    localStorage.setItem('theme', e.target.value);
    setThemeOpen(false);
  };
  const handleColor = (co) => {
    setcurrentColor(co);
    localStorage.setItem('currentcolor', co);
    setThemeOpen(false);
  };

  function handleClick(clicked) {
    setisClicked({ ...initialState, [clicked]: true });
  }
  function handlefalseClick(clicked) {
    setisClicked({ ...initialState, [clicked]: false });
  }
  const contextValue = useMemo(() => (
    {
      activeMenu,
      setactiveMenu,
      isClicked,
      setisClicked,
      handleClick,
      screenSize,
      setscreenSize,
      ThemeOpen,
      setThemeOpen,
      currentColor,
      ThemeSet,
      ThemeSetter,
      handleColor,
      handlefalseClick,
    }), [activeMenu, isClicked, screenSize, ThemeOpen, currentColor, ThemeSet]);

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
