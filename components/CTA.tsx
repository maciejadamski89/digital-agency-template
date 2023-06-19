import React from "react";

export default function CTA() {
  return (
    <section className="border-b border-gray-700 z-40  text-gray-50 py-8 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto relative">
      <div className="p-8 lg:w-9/12 mx-auto rounded-lg bg-gradient-to-r from-indigo-700 to-fuchsia-700 flex flex-col lg:flex-row justify-between items-center">
        <h2 className="text-center lg:text-left mb-4 lg:mb-0 text-2xl text-white lg:w-1/2 font-medium">
          Take your content creation to the next level
        </h2>
        <button className="capitalize px-4 py-3 bg-white hover:cursor-pointer text-gray-700 rounded-lg block">
          Start your 14 day free trail
        </button>
      </div>
    </section>
  );
}
