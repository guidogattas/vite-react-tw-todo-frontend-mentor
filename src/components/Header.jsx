import MoonIcon from './icons/MoonIcon'


const Header = () => {
  return (
      <header className="container px-4 pt-8 mx-auto font-semibold">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl tracking-[0.3em]">
            Todo
          </h1>
          <button>
            <MoonIcon
              className="fill-white"
            />
          </button>
        </div>
      </header>
  )
}

export default Header