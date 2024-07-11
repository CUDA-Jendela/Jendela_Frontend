import React from "react";

import { Button } from "@/components/ui/button";
import { FAQItem, featureCardData } from "@/data";

import logoWhite from "@/assets/logo_white.png";
import { Card } from "@/components";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
                    <h1 className="text-4xl font-bold text-primary">Why Jendela?</h1>
                    <h3 className="text-xl">Unlock potential, transform lives, and build a brighter future</h3>
                </div>

                {/* Benefit Cards */}
                <div className="mt-10 px-52 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
                    {featureCardData.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>

            {/* FAQ */}
            <div className="flex flex-col items-center justify-center text-center w-full py-6 md:px-20 px-10 md:mb-10 mb-6">
                <div className="font-bold text-4xl text-primary pb-3">Frequently Asked Question</div>
                <h3 className="text-xl">Find answers to your burning questions.</h3>
                <Accordion type="single" collapsible className="w-full lg:px-32 mt-10">
                    {FAQItem.map(({ question, answer }, index) => (
                        <AccordionItem value={index.toString()} key={index} className="mb-5 md:px-8 px-6 card-glow rounded-xl shadow-lg">
                            <AccordionTrigger className="font-semibold text-left text-lg text-primary">{question}</AccordionTrigger>
                            <AccordionContent className="text-left text-base">{answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </main>
    );
};

export default Home;