import React from 'react'
import { useState, useEffect } from "react";


export default function Header() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

    return (
      <div className="sticky top-0 bg-emerald-500 ">
        <a
        className=" mx-8 lg:text-3xl font-mono font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white sm:text- "
        href="#placelinkhere">
        JustFarmerThings
        </a>
        <button className="bg-gray-600 px-2 absolute right-5 top-1.5  dark:bg-yellow-300 rounded-xl hover:animate-pulse" onClick={handleThemeSwitch}>
          <p className="px-1 py-1 text-gray-100 text-sm lg:text-lg  dark:text-slate-600">
          Change Theme</p>
        </button>
      </div>
    )
  }

