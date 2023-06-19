import React from "react";

export default function Pricing() {
    return (
        <section className="z-40 relative text-gray-50 py-32 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto ">
            <h2 className="text-4xl text-center w-full font-medium">
                Make the wise descision <br />
                for your business
            </h2>
            <p className="py-8 text-gray-500 font-light max-w-md text-center mx-auto">
                Choose from 3 affordable packages
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 mt-12 gap-4 mx-auto  items-stretch text-left text-gray-400 lg:h-[500px]">
                <div className="bg-gray-800 rounded-lg p-8 xl:col-start-2 flex flex-col">
                    <small className="mb-8 block">Starter Plan</small>
                    <p className="text-4xl text-white mb-4">
                        $29<span className="text-sm">/month</span>
                    </p>
                    <small className="mb-8 block">
                        This plan is suitable for teams of 1-15 people
                    </small>
                    <p className="mb-4 text-white">What&apos;s included</p>
                    <p className="mb-2 block">10 Dedicated hosting</p>
                    <p className="mb-2 block">Great for freelancers</p>
                    <p className="mb-2 block">1 Year support</p>
                    <button className="w-full text-white px-4 py-2.5 bg-transparent border border-gray-500 hover:cursor-pointer hover:text-gray-300 rounded-lg mr-2 mt-auto">
                        Get Started
                    </button>
                </div>
                <div className="bg-gray-800 rounded-lg p-8 flex flex-col">
                    <small className="mb-8 block">Basic Plan</small>
                    <p className="text-4xl text-white mb-4">
                        $79<span className="text-sm">/month</span>
                    </p>
                    <small className="mb-8 block">
                        This plan is suitable for teams of 15-100 people
                    </small>
                    <p className="mb-4 text-white">What&apos;s included</p>
                    <p className="mb-2 block">50 Dedicated hosting</p>
                    <p className="mb-2 block">Great for Businesses</p>
                    <p className="mb-2 block">2 Year support</p>
                    <button className="w-full text-white px-4 py-2.5 bg-gradient-to-r from-indigo-700 to-fuchsia-700 hover:cursor-pointer hover:text-gray-300 rounded-lg mr-2 mt-auto">
                        Get Started
                    </button>
                </div>
                <div className="bg-gray-800 rounded-lg p-8 flex flex-col">
                    <small className="mb-8 block">Premuim Plan</small>
                    <p className="text-4xl text-white mb-4">
                        $129<span className="text-sm">/month</span>
                    </p>
                    <small className="mb-8 block">
                        This plan is suitable for teams of 100+ people
                    </small>
                    <p className="mb-4 text-white">What&apos;s included</p>
                    <p className="mb-2 block">100 Dedicated hosting</p>
                    <p className="mb-2 block">Great for enterprises</p>
                    <p className="mb-2 block">4 Year support</p>
                    <button className="w-full text-white px-4 py-2.5 bg-transparent border border-gray-500 hover:cursor-pointer hover:text-gray-300 rounded-lg mr-2 mt-auto">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
}
