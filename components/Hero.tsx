import React from "react";

export default function hero() {
    return (
        <section className="border-b border-gray-700 z-40 relative text-gray-50 py-32 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto relative">
            <h1 className="lg:leading-[5rem] text-4xl lg:text-7xl text-center w-full">
                Write better <br />
                content for your <br />
            </h1>
            <div className="w-max flex flex-col mx-auto mt-0">
                <span className="text-transparent bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text underline text-4xl lg:text-7xl">
                    Facebook Ads
                    <div className="h-1 w-full bg-gradient-to-r from-orange-600 to-yellow-500"></div>
                </span>
            </div>
            <p className="text-center max-w-2xl mx-auto mt-12 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem obcaecati sequi ex quisquam distinctio nihil
                libero rerum.
            </p>
            <button className="capitalize px-4 py-3 bg-gradient-to-r from-indigo-700 to-fuchsia-700 hover:cursor-pointer text-gray-50 rounded-lg mx-auto block mt-12">
                Start your 14 day free trail
            </button>
            <button className="flex items-center capitalize px-4 py-3 hover:cursor-pointer text-gray-50 rounded-lg mx-auto block">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1 w-4 h-4"
                >
                    <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                        clip-rule="evenodd"
                    />
                </svg>
                Watch a demo
            </button>
        </section>
    );
}
