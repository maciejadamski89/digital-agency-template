import React from "react";
import Logo from "./Logo";

export default function Header() {
    return (
        <header className="z-50 bg-gray-900 w-full">
            <div className="mx-auto container p-4 grid lg:flex lg:justify-between grid-cols-2">
                <nav className="flex items-center">
                    <Logo />

                    <ul className="lg:flex hidden">
                        <li className="mr-8">
                            <a className="hover:text-gray-300" href="#">
                                All courses
                            </a>
                        </li>
                        <li className="mr-8">
                            <a className="hover:text-gray-300" href="#">
                                Student Portal
                            </a>
                        </li>
                        <li className="mr-8">
                            <a className="hover:text-gray-300" href="#">
                                Support
                            </a>
                        </li>
                        <li className="mr-8">
                            <a className="hover:text-gray-300" href="#">
                                Contact us
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="hidden lg:block">
                    <button className="px-4 py-2.5 bg-transparent border border-gray-500 hover:cursor-pointer hover:text-gray-300 rounded-lg mr-2">
                        Sign In
                    </button>
                    <button className="px-4 py-3 bg-gradient-to-r from-indigo-700 to-fuchsia-700 hover:cursor-pointer text-gray-50 rounded-lg">
                        Get Your Card
                    </button>
                </div>

                <button
                    type="button"
                    className="lg:hidden justify-self-end inline-flex items-center justify-center rounded-lg p-2 focus:outline-none"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>

                    <svg
                        className="lock h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>

                    <svg
                        className="hidden h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <div
                    id="mobile-menu"
                    className="col-span-2 p-2 mt-4 rounded-lg lg:hidden z-50"
                >
                    <ul className="w-full py-2">
                        <li className="bg-gray-800 hover:bg-gray-700 text-gray-50 focus:bg-gray-700 hover:text-gray-50 focus:text-gray-50 p-2 rounded-lg">
                            <a
                                className="font-medium hover:text-gray-900"
                                href="#"
                            >
                                Demos
                            </a>
                        </li>
                        <li className="hover:bg-gray-700 focus:bg-gray-700 hover:text-gray-50 focus:text-gray-50t p-2 rounded-lg">
                            <a
                                className="font-medium hover:text-gray-900"
                                href="#"
                            >
                                About
                            </a>
                        </li>
                        <li className="hover:bg-gray-700 focus:bg-gray-700 hover:text-gray-50 focus:text-gray-50 p-2 rounded-lg">
                            <a
                                className="font-medium hover:text-gray-900"
                                href="#"
                            >
                                Blog
                            </a>
                        </li>
                        <li className="hover:bg-gray-700 focus:bg-gray-700 hover:text-gray-50 focus:text-gray-50 p-2 rounded-lg">
                            <a
                                className="font-medium hover:text-gray-900"
                                href="#"
                            >
                                Pages
                            </a>
                        </li>
                        <li className="hover:bg-gray-700 focus:bg-gray-700 hover:text-gray-50 focus:text-gray-50 p-2 rounded-lg">
                            <a
                                className="font-medium hover:text-gray-900"
                                href="#"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="border-t border-gray-700 pt-4">
                        <button className="w-full px-4 py-3 bg-gradient-to-r from-indigo-700 to-fuchsia-700 hover:cursor-pointer text-gray-50 font-medium rounded-lg-lg">
                            Get Started now
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
