import React from "react";

export default function Showcase() {
    return (
        <section className="border-b border-gray-700 z-40  text-gray-50 py-32 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto relative">
            <h2 className="text-4xl text-center w-full font-medium">
                Mixland helps you build <br className="hidden lg;block" />
                beautifull websites
            </h2>
            <div className="grid grid-cols-12 mt-12 xl:gap-12 mx-auto items-stretch">
                <div className="col-span-12 lg:col-span-4">
                    <div className="p-4 rounded-lg bg-gradient-to-r from-indigo-700 to-fuchsia-700 mb-4">
                        Blog Headlines
                    </div>
                    <div className="p-4 rounded-lg border hover:border-none border-gray-700 hover:cursor-pointer hover:bg-gradient-to-r from-indigo-700 to-fuchsia-700 mb-4">
                        Blog Intros
                    </div>
                    <div className="p-4 rounded-lg border hover:border-none border-gray-700 hover:cursor-pointer hover:bg-gradient-to-r from-indigo-700 to-fuchsia-700 mb-4">
                        Social Media Handles
                    </div>
                    <div className="p-4 rounded-lg border hover:border-none border-gray-700 hover:cursor-pointer hover:bg-gradient-to-r from-indigo-700 to-fuchsia-700 mb-4">
                        Facebook Ads
                    </div>
                    <div className="p-4 rounded-lg border hover:border-none border-gray-700 hover:cursor-pointer hover:bg-gradient-to-r from-indigo-700 to-fuchsia-700 mb-4">
                        Product Description
                    </div>
                    <div className="p-4 rounded-lg border hover:border-none border-gray-700 hover:cursor-pointer hover:bg-gradient-to-r from-indigo-700 to-fuchsia-700 mb-4">
                        PAS copywriting formulas
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-8 bg-gray-700 p-4 rounded-lg flex flex-col justify-start">
                    <div className="flex">
                        <div className="h-2 w-2 bg-green-400 rounded-full mr-1"></div>
                        <div className="h-2 w-2 bg-yellow-400 rounded-full mr-1"></div>
                        <div className="h-2 w-2 bg-red-400 rounded-full mr-1"></div>
                    </div>
                    <p className="text-gray-500 text-sm my-8 justify-self-start">
                        4 blog headlines generated
                    </p>
                    <div className="flex justify-between flex-col h-full">
                        <p className="mb-4 text-xl">
                            Create original content that ranks SEO
                        </p>
                        <p className="mb-4 text-xl">
                            Mechanic keayborad enthusiasts
                        </p>
                        <p className="mb-4 text-xl">
                            How to grow your side hustle to 10x MRR.
                        </p>
                        <p className="mb-4 text-xl">10 JSON API Generators.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
