import React from "react";

import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/logo_white.png";

const Home: React.FC = () => {
    return (
        <main className="flex flex-col bg-white w-full min-h-screen">
            {/* Hero Section */}
            <div className="bg-custom-gradient w-full bg-full bg-no-repeat h-[100vh]">
                <div className="w-1/2 flex flex-col align-center pl-20 pt-20">
                    <img src={logoWhite} className="w-64 pb-4"></img>
                    <h3 className="text-white text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sagittis nunc. Etiam molestie at purus ac dignissim. Nunc nunc orci, luctus a luctus in, finibus eu arcu. Phasellus maximus ligula a ultricies eleifend.</h3>
                </div>
                <div className="pl-20 pt-10">
                    <Button className="border rounded-3xl text-xl p-6 border-white text-white hover:bg-white hover:text-primary hover:font-bold">Get to know more</Button>
                </div>
            </div>
            HALO INI HOME PAGE
        </main>
    );
};

export default Home;