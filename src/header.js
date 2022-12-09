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
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  console.log("pressed");

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

    return (
      <div className="bg-emerald-500 mb-3 ">
        <a
        className="mx-8 text-2xl font-mono font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
        href="#placelinkhere">
        JustFarmerThings
        </a>
        <button className="bg-yellow-300 absolute right-10 top-3 toggle-dark hover:bg-gray-600 rounded-xl toggle-dark" onClick={handleThemeSwitch}>
          <p className="px-1 py-1 text-slate-600  hover:text-gray-100">
          Change Theme</p>
        </button>
      </div>
    )
  }

