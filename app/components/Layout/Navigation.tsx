import NavigationButton from "@/app/components/UI/NavigationButton";
import NavigationItem from "@/app/components/UI/NavigationItem";
import { BreakpointValues, WindowSize } from "@/app/hooks/useWindowSize";
import { ReactElement, useState } from "react";

type NavigationChild = ReactElement<typeof NavigationItem> | ReactElement<typeof NavigationButton>;

export default function Navigation({
  children,
  windowSize,
}: Readonly<{
  children: NavigationChild | NavigationChild[];
  windowSize: WindowSize;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  if (windowSize.moreThan(BreakpointValues.MD)) {
    return (
      <nav className="bg-gray-800 py-2 h-20 flex items-center">
        <div className="container mx-auto flex justify-center items-center max-w-6xl">
          <ul className="flex justify-evenly text-base text-white pt-0 w-6/12">
            {children}
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="bg-gray-800 py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <a className="text-white text-lg font-bold" href="#">HOTEL PLANISPHERE</a>
          <button className="text-white focus:outline-none" type="button" onClick={toggleMenu} aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation">
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="block w-full h-0.5 bg-gray-400"></span>
                <span className="block w-full h-0.5 bg-gray-400"></span>
                <span className="block w-full h-0.5 bg-gray-400"></span>
              </div>
            </div>
          </button>
        </div>
        <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden w-full`} id="navbarNav">
          <ul className="h-40 flex flex-col justify-around">
            {children}
          </ul>
        </div>
      </nav>
    );
  }
}