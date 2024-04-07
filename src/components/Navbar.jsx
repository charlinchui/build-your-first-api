import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const dropdownStyles = {
  Language: "bg-slate-100 text-gray-900 focus:outline-red-500 hover:border-red-500 hover:bg-gray-800 hover:text-gray-100 transition-colors",
  JavaScript: "bg-yellow-300 text-gray-900 focus:outline-orange-500",
  TypeScript: "bg-blue-500 text-white",
  Ruby: "bg-red-600 text-white focus:outline-red-300",
  Go: "bg-cyan-400 text-gray-900 focus:outline-blue-500",
};

const Navbar = (props) => {

  return (
    <nav className="navbar w-screen absolute right-0 top-0 flex flex-row justify-between mx-auto p-4 bg-white border-gray-200 dark:bg-gray-900">
      <span className="text-center content-center">Build Your First API</span>
      <div className="flex flex-row text-center content-center">
        <span className="text-center content-center px-5 cursor-pointer" onClick={() => console.log("clicked!")}>What's an API?</span>
        <span className="px-5 text-center content-center cursor-pointer">Contribute</span>
        <span className="px-5 text-center content-center cursor-pointer">Purpose</span>
        <Menu as={"div"} className="cursor-pointer pl-5">
          <Menu.Button className={dropdownStyles[props.language] + " font-bold w-44"}>
            <span>{props.language}</span>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800">
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/javascript"
                      className={classNames(
                        active
                          ? "bg-gray-100 dark:text-white dark:bg-gray-500"
                          : "",
                        "block px-4 py-2 text-sm text-gray-700 dark:text-white hover:text-yellow-200",
                      )}
                    >
                      JavaScript
                    </Link>
                  )}
                </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to="/typescript"
                      className={classNames(
                        active
                          ? "bg-gray-100 dark:text-white dark:bg-gray-500"
                          : "",
                        "block px-4 py-2 text-sm text-gray-700 dark:text-white hover:text-blue-300",
                      )}
                    >
                      TypeScript
                    </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to="/go"
                      className={classNames(
                        active
                          ? "bg-gray-100 dark:text-white dark:bg-gray-500"
                          : "",
                        "block px-4 py-2 text-sm text-gray-700 dark:text-white hover:text-cyan-400",
                      )}
                    >
                      Go
                    </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to="/ruby"
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:text-white dark:bg-gray-500"
                      : "",
                    "block px-4 py-2 text-sm text-gray-700 dark:text-white hover:text-red-300",
                  )}
                >
                  Ruby
                </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
