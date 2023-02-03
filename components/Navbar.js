import Link from "next/link"
import React, {useState} from "react";
import {Transition} from "@headlessui/react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 
  return (
    <div>
      <nav className="bg-greenc-400 z-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="kz-logo.png"
                  alt=""
                />
              </div>
              <div className="hidden md:block">
                <ul className="ml-10 flex items-baseline space-x-4  "> 
                    <Link href = {"/"}>
                        <li className = " hover:bg-greenc-700 text-white px-3 py-2 rounded-md text-base font-medium">Home</li>
                    </Link>
                    <Link href = {"/projects"}>
                        <li className = " hover:bg-greenc-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Projects</li>
                    </Link>
                    <li className = " hover:bg-greenc-700 hover:text-white px-3 py-2 rounded-md text-base font-medium" >
                        <a className="btn content-download button-main button-scheme" href="Karlo_Zizic.pdf" download="Karlo_Zizic" >Resume</a>
                    </li>
                </ul>

              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="bg-greenc-800 inline-flex items-center justify-center p-2 rounded-md text-greenc-400 hover:text-white hover:bg-greenc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-greenc-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                ):(
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
        {(ref) => (<div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href = {"/"}>
                <li className = " hover:bg-greenc-700 text-white px-3 py-2 rounded-md text-base font-medium no-bullets list-none">Home</li>
            </Link>
            <Link href = {"/projects"}>
                <li className = " hover:bg-greenc-700 hover:text-white px-3 py-2 rounded-md text-base font-medium list-none">Projects</li>
            </Link>
            <li className = " hover:bg-greenc-700 hover:text-white px-3 py-2 rounded-md text-base font-medium list-none" >
                <a className="btn content-download button-main button-scheme" href="Karlo_Zizic.pdf" download="Karlo_Zizic" >Resume</a>
            </li>
          </div>
        </div>
        )}
        </Transition>
      </nav>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-greenc-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-greenc-200 rounded-lg h-96"></div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  );
}
