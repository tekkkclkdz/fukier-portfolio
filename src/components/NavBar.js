'use client'
import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Popover, Transition } from '@headlessui/react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);


  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsScrolled(scrollTop > 0);
  };

  const handlePanelToggle = () => {
    setIsPanelOpen(!isPanelOpen);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);






  return (
    <Popover
      className={`flex justify-between z-10 h-32 items-center fixed top-0 left-0 w-screen ${isScrolled ? 'transition duration-300 text-fukier-text bg-fukier-background' : 'transition duration-300 bg-transparent text-fukier-background'
        }`}
    >
      <div>
        <div className="object-contain mx-8 font-bold text-3xl h-15 w-40">Est 2023</div>
      </div>
      <div className="hidden sm:flex space-x-4 mr-8 text-3xl font-light items-center">
        <a href="portfolio">Portfolio</a>
        <a href="contact">Contact</a>
      </div>
      <div className="absolute sm:hidden font-bold right-0 mx-8 z-10">
        <Popover.Button onClick={handlePanelToggle}>
          {isPanelOpen ? (
            <XMarkIcon className="h-6 w-6 text-black z-20" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </Popover.Button>
      </div>
      <Transition 
        show={isPanelOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <Popover.Panel className="fixed inset-x-0 top-0 h-screen bg-fukier-background">
            <div className='flex flex-col items-center justify-center h-full text-fukier-text font-bold text-3xl space-y-8'>
              <a href="/portfolio" className=''>Portfolio</a>
              <h2>Contact</h2>
            </div>

        </Popover.Panel>
      </Transition>

    </Popover>
  );
};

export default NavBar;


