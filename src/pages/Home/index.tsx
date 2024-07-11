import React from "react";

import { Button } from "@/components/ui/button";
import { featureCardData } from "@/data";

import logoWhite from "@/assets/logo_white.png";
import { Card } from "@/components";

const Home: React.FC = () => {
    return (
        <main className="flex flex-col bg-white w-full min-h-screen">
            {/* Hero Section */}
            <div className="bg-custom-gradient w-full bg-full bg-no-repeat h-[90vh]">
                <div className="w-1/2 flex flex-col align-center pl-20 pt-20">
                    <img src={logoWhite} className="w-64 pb-4"></img>
                    <h3 className="text-white text-lg">Jendela empowers ex-prisoners by providing skill development through NGO training and connecting them with job opportunities, ensuring they can contribute positively to society.</h3>
                </div>
                <div className="pl-20 pt-10">
                    <Button className="border rounded-3xl text-xl p-6 border-white text-white hover:bg-white hover:text-primary hover:font-bold">Get to know more</Button>
                </div>
            </div>

            {/* Separator */}
            <div className="h-[150px] overflow-hidden">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
                    <path d="M0.00,50.10 C150.00,150.33 271.29,-50.10 501.31,87.12 L500.00,-0.00 L0.00,-0.00 Z" className="stroke-none fill-current text-primary"></path>
                </svg>
            </div>

            {/* Main content */}
            <div className="w-full pt-5 pb-20">
                {/* Opening */}
                <div className="w-full flex flex-col space-y-3 justify-center items-center text-center">
                    <h1 className="text-5xl font-bold text-primary">Why Jendela?</h1>
                    <h3 className="text-xl">Unlock potential, transform lives, and build a brighter future</h3>
                </div>

                {/* Benefit Cards */}
                <div className="mt-10 px-52 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
                    {featureCardData.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Home;