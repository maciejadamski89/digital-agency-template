import React from "react";

export default function FeatureA() {
  return (
    <section className="grid grid-cols-12 gap-8 border-b border-gray-700 z-40  text-gray-50 py-32 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto relative">
      <div className="col-span-12 lg:col-span-6">
        <div className="relative bg-white rounded-lg p-4 lg:w-9/12 text-gray-700 flex flex-col gap-2">
          <p className="text-gray-900 font-medium">Result</p>
          <small className="bloc">Here&apos;s what our AI came up with</small>
          <div className="relative bg-gray-100 rounded-lg p-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem sed
            ab quam obcaecati. Consectetur dolor, dignissimos ratione error ipsa
            cumque, provident molestiae eveniet vitae, tempore iure nostrum quas
            nisi.
          </div>
          <div className="relative bg-gray-100 rounded-lg p-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem sed
            ab quam obcaecati. Consectetur dolor, dignissimos ratione error ipsa
            cumque, provident molestiae eveniet vitae, tempore iure nostrum quas
            nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            rem sed ab quam obcaecati. Consectetur dolor, dignissimos ratione
            error ipsa cumque, provident molestiae eveniet vitae, tempore iure
            nostrum quas nisi.
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <h2 className="text-4xl font-medium">
          Create content quickly <br />
          and efficiently with <br />
          great AI writing tools
        </h2>
        <p className="py-8 text-gray-500 font-light max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          repudiandae? Earum dignissimos corrupti amet eos tempore porro, fuga
          repellat quibusdam ad atque ex sequi officia iure in dolorum libero
          aperiam.
        </p>
        <button className="capitalize px-4 py-3 bg-gradient-to-r from-indigo-700 to-fuchsia-700 hover:cursor-pointer text-gray-50 rounded-lg block">
          Start your 14 day free trail
        </button>
      </div>
    </section>
  );
}
