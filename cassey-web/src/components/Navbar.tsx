'use client'
import { ReactNode } from "react"
import { FiUser, FiSearch, FiShoppingBag } from "react-icons/fi";
import { usePathname } from 'next/navigation'
import Logout from "@/actions/auth";

export const Navbar = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname()
  // 
  return (
    <>
      <nav className="bg-white/50 font-Montserrat border-gray-200 dark:bg-gray-900 backdrop-blur-xl w-full fixed top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
              /> */}
            <span className="self-center text-xl font-regular whitespace-nowrap dark:text-white">
              cassey
            </span>
          </a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex justify-around w-[15vh]">
              <button
                type="button"
                className="flex w-6 h-6"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <FiUser className="w-full h-full" />
                <span className="sr-only">Open user menu</span>
                <i className="bx bx-user bx-sm" />
              </button>
              <button className="w-6 h-6"> {/* Mengatur ukuran tombol */}
                <FiShoppingBag className="w-full h-full" /> {/* Mengatur ukuran ikon */}
              </button>
              <button className="w-6 h-6"> {/* Mengatur ukuran tombol */}
                <FiSearch className="w-full h-full" /> {/* Mengatur ukuran ikon */}
              </button>
            </div>
            {/* Dropdown menu */}
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block font-thin text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block font-thin text-sm text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="/register"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Register
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => Logout()}
                    className="block px-4 py-2 text-sm text-red-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="true"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-normal p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className={`${pathName === '/' ? 'text-blue-500' : ''} block font-thin py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className={`${pathName === '/products' ? 'text-blue-500' : ''} block font-thin py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Devices
                </a>
              </li>
              <li>
                <a
                  href="/wishlists"
                  className={`${pathName === '/wishlists' ? 'text-blue-500' : ''} block font-thin py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Wishlists
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className={`${pathName === '/login' ? 'text-blue-500' : ''} block font-thin py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/register"
                  className={`${pathName === '/register' ? 'text-blue-500' : ''} block font-thin py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Cassey Club!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </>
  )
}