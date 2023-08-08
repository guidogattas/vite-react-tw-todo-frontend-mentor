import { useEffect, useState } from 'react'
import IconMoon from './icons/IconMoon'
import IconSun from './icons/IconSun'

const initialStateDarkMode = localStorage.getItem('theme') === 'dark'


const Header = () => {

  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);


  return (
    <header className="container px-4 pt-8 md:max-w-xl mx-auto font-semibold">
      <div className="flex justify-between">
        <h1 className="uppercase text-white text-3xl tracking-[0.3em]">
          Todo
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </header>
  )
}

export default Header