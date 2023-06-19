import React from "react";

export default function FeatureB() {
  return (
    <section className="grid grid-cols-12 gap-8 border-b border-gray-700 z-40 text-gray-50 py-32 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto relative">
      <div className="col-span-12 lg:col-span-6">
        <h2 className="text-4xl font-medium">
          Write what you want to <br className="hidden lg:block" />
          convey through clear, & <br className="hidden lg:block" />
          authentic writing
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
      <div className="col-span-12 lg:col-span-6">
        <div className="relative bg-white rounded-lg p-4 lg:w-9/12 text-gray-700 flex gap-2">
          <div className="p-4 w-5/12">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-1 bg-slate-400 rounded w-1/2"></div>
                <div className="h-1 bg-slate-400 rounded w-3/4"></div>
                <div className="h-1 bg-slate-400 rounded w-1/2"></div>
                <div className="h-1 bg-slate-400 rounded w-3/4"></div>
                <div className="h-1 bg-slate-400 rounded w-1/2"></div>
                <div className="h-1 bg-slate-400 rounded w-3/4"></div>
                <div className="h-1 bg-slate-400 rounded w-1/2"></div>
                <div className="h-1 bg-slate-400 rounded w-3/4"></div>
                <div className="h-1 bg-slate-400 rounded w-1/2"></div>
                <div className="h-1 bg-slate-400 rounded w-3/4"></div>
                <div className="h-1 bg-slate-400 rounded w-1/2"></div>
                <div className="h-1 bg-slate-400 rounded w-3/4"></div>
                <div className="h-1 bg-slate-400 rounded w-1/2"></div>
                <div className="h-1 bg-slate-400 rounded w-3/4"></div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-gray-900 font-medium">Result</p>
            <small className="block">Here&apos;s what our AI came up with</small>
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-1 bg-slate-100 rounded w-12"></div>
                  <div className="h-1 bg-slate-100 rounded w-full"></div>
                  <div className="h-1 bg-slate-100 rounded w-full"></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-1 bg-slate-700 rounded w-12"></div>
                  <div className="h-1 bg-slate-700 rounded w-full"></div>
                  <div className="h-1 bg-slate-700 rounded w-full"></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-1 bg-slate-700 rounded w-12"></div>
                  <div className="h-1 bg-slate-700 rounded w-full"></div>
                  <div className="h-1 bg-slate-700 rounded w-full"></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-1 bg-slate-700 rounded w-12"></div>
                  <div className="h-1 bg-slate-700 rounded w-full"></div>
                  <div className="h-1 bg-slate-700 rounded w-full"></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-1 bg-slate-700 rounded w-12"></div>
                  <div className="h-1 bg-slate-700 rounded w-full"></div>
                  <div className="h-1 bg-slate-700 rounded w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
