import React, { useEffect, useState } from 'react';
import AnimationTest1 from './AnimationTest1';
import { FaUser } from '@react-icons/all-files/fa/FaUser';
import Main from './Main';
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuLinks = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Courses',
      link: '/',
    },
    {
      title: 'Pages',
      link: '/',
    },
    {
      title: 'Blog',
      link: '/',
    },
    {
      title: 'Contact',
      link: '/',
    },
  ];
  return (
    <div className="header z-50 relative bg-transparent">
      <div className="anime">
        <AnimationTest1 />
      </div>
      <div
        className={`fixed z-50 top-0 py-3 ease-in left-0 w-full duration-200 ${
          isScrolled ? 'bg-blue-700' : 'bg-transparent'
        }`}
      >
        <div className="w-[1140px] xl:p-4 xl:flex xl:items-center xl:justify-between m-auto">
          <div className="flex items-center justify-between">
            <a href="/">
              <img
                className="object-cover"
                src="https://quomodosoft.com/html/bisy/assets/images/logo.png"
                alt=""
              />
            </a>
            <nav>
              {open && (
                <ul className="flex xl:hidden items-center gap-10">
                  {menuLinks.map((link) => (
                    <li className="py-4">
                      <a
                        className="text-white hover:text-gray-300 duration-150 capitalize font-semibold text-[16px]"
                        href={link.link}
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                  <FaUser className="text-white border-gray-400 border rounded-full w-8 h-8 p-2 cursor-pointer duration-150 hover:text-blue-900 hover:bg-gray-200" />
                  <button className="text-white rounded border-gray-500 p-3.5 text-[18px] duration-150 text-sm hover:bg-white  hover:text-blue-900 border">
                    Join for Free
                  </button>
                </ul>
              )}
            </nav>
          </div>
          <button className="hidden xl:flex">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      <Main />
    </div>
  );
}
