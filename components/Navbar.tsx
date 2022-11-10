import Link from 'next/link';
import {useEffect, useState} from 'react';

import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor('#ffffff');
      setTextColor('#000000');
    } else {
      setColor('transparent');
      setTextColor('white');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{backgroundColor: `${color}`}}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] flex justify-between  h-12 items-center p-4  text-white">
        <Link href="/">
          <h1 style={{color: `${textColor}`}} className="font-bold text-4xl ">
            Capture
          </h1>
        </Link>
        <ul
          style={{color: `${textColor}`}}
          className="hidden sm:flex sm:gap-10"
        >
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/portfolio">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* mobile Button */}

        <div className="block sm:hidden  cursor-pointer z-10 ">
          {isOpen ? (
            <AiOutlineClose
              style={{color: `${color}`}}
              size={20}
              onClick={handleNav}
            />
          ) : (
            <AiOutlineMenu
              style={{color: `${textColor}`}}
              size={20}
              onClick={handleNav}
            />
          )}
        </div>

        {/* mobile menu */}

        <div
          className={`sm:hidden absolute top-0 ${
            isOpen ? 'left-0' : 'left-[-100%]'
          } right-0  bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300`}
        >
          <ul className="">
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/portfolio">Work</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
