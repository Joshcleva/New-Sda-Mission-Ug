import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { getCategories } from "../services";
import Link from "next/link";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const goToHome = () => {
    document
      .getElementById("home")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const goToAbout = () => {
    document.getElementById("about_us").scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const goToHistory = () => {
    document.getElementById("our_history").scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const goToPrivate = () => {
    document
      .getElementById("private_dining")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const goToBeachCafe = () => {
    document
      .getElementById("beach_shack")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const goToContact = () => {
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="top-0 relative mb-3 items-center">
      <nav
        className="bg-absolute w-screen"
        style={{
          backgroundImage:
            "url(https://www.lmcbuyinggroups.co.uk/admin/resources/shutterstock364346705.jpg)",
          opacity: "0.9",
        }}
      >-
        <div className="md:justify-center max-w-7xl mx-auto px-6 md:px-0">
          <div
            className="flex items-center justify-between md:justify-center h-14 uppercase"
            style={{ fontWeight: 600 }}
          >
            <div className="flex items-center justify-between w-11/12 ">
              <div className="cursor-pointer mt-2 text-4xl flex-shrink-0 -mx-12">
                <Link href="/">
                  <img
                    height="100 px"
                    width="160 px"
                    src="/images/smlogo.png"
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="flex items-center text-xs lg:text-sm">
                <div className="hidden md:float-left md:contents">
                  {categories.map((category, index) => (
                    <Link key={index} href={`/category/${category.slug}`}>
                      <span
                        className="text-black hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-semibold cursor-pointer"
                      >
                        {category.name}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="md:absolute md:mt-16">
                  <Link href="/SearchSdaMissionUg">
                    <span className="flex transition duration-500 ease transform hover:-translate-y-1 inline-block mt-8 mb-8 bg-green-400 text-sm font-small rounded-full text-white md:py-0 px-4 py-3 cursor-pointer md: mx-20">
                      Search
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-1 px-3 py-2 text-base font-semibold cursor-pointer rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
                ) : (
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
          enter="transition ease-out duration-500 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {categories.map((category, index) => (
                  <Link key={index} href={`/category/${category.slug}`}>
                    <span className="text-black hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-semibold cursor-pointer">
                      {category.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavBar;
