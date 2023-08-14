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

  const transitionLetter = "transition-transform duration-300 ease-in-out origin-top group-hover:scale-y-0";
  const bottomTransitionLetter = "transition-transform duration-300 ease-in-out origin-bottom scale-y-0 group-hover:scale-y-100";


  return (
    <header className="container px-4 pt-8 mx-auto font-semibold md:max-w-xl">
      <div className="flex justify-between">
        <div className="items-center ">
          <div className="relative p-4 text-white transition duration-500 ease-in-out bg-transparent border border-none rounded-full cursor-pointer group ">
            <div className="relative flex items-center text-6xl uppercase">
              <div className={`${transitionLetter}`} style={{ transitionDelay: "0ms" }}>T</div>
              <div className={`${transitionLetter}`} style={{ transitionDelay: "75ms" }}>O</div>
              <div className={`${transitionLetter}`} style={{ transitionDelay: "150ms" }}>D</div>
              <div className={`${transitionLetter}`} style={{ transitionDelay: "225ms" }}>O</div>
            </div>
            <div className="absolute flex items-center text-6xl uppercase bottom-[18px]">
              <div className={`${bottomTransitionLetter}`} style={{ transitionDelay: "0ms" }}>T</div>
              <div className={`${bottomTransitionLetter}`} style={{ transitionDelay: "75ms" }}>O</div>
              <div className={`${bottomTransitionLetter}`} style={{ transitionDelay: "150ms" }}>D</div>
              <div className={`${bottomTransitionLetter}`} style={{ transitionDelay: "225ms" }}>O</div>
            </div>
          </div>
        </div>



        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </header >
  )
}

export default Header
