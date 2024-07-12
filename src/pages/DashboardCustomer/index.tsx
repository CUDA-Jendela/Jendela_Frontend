import useAuth from "@/contexts/AuthContext";
import React from "react";
import { Courses } from "@/data";
import { CourseCard } from "@/components";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import dashboardHeader from "@/assets/svg/dashboard_header.svg";

const DashboardCustomer: React.FC = () => {
    const { username } = useAuth();
    const navigate = useNavigate();

    const navigateToCourse = () => {
        navigate('/course');
    };

    return (
        <main className="flex flex-col bg-white w-full min-h-screen overflow-x-hidden">
            <img src={dashboardHeader} className="w-full -mt-1" />
            
            <div className="px-16 pt-4 pb-20">
                <h1 className="text-6xl font-bold text-primary">Hello, {username}</h1>

                <h3 className="mt-8 text-4xl font-bold">Courses for you</h3>
                <p className="mt-3 text-base">We found some courses that match your interests!</p>
                <Carousel className="w-full max-w-full p-2 mt-2">
                    <CarouselContent className="flex space-x-0">
                        {Courses.map((course) => (
                            <CarouselItem key={course.id} className="flex-shrink-0 w-80 my-4 mx-3 md:basis-1/2 lg:basis-1/3">
                                <CourseCard {...course} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                
                <div className="flex flex-row items-center mt-16">
                    <div className="flex flex-col">
                        <h3 className="text-4xl font-bold">Explore more courses</h3>
                        <p className="mt-3 my-4 text-base">Let's find your passion and develop your skills!</p>
                        <Button 
                            onClick={navigateToCourse}
                            className="w-fit border rounded-3xl text-xl font-bold p-6 bg-white border-primary border-2 text-primary hover:bg-primary hover:text-white"
                        >
                                Explore courses
                        </Button>
                    </div>
                    <div className="flex flex-col w-[70%] gap-5 pt-16">
                        <div className="ml-[20%] w-[100%] h-8 rounded-l-full bg-green-yellow-gradient opacity-75 justify-self-end"></div>
                        <div className="ml-[5%] w-[150%] h-8 rounded-l-full bg-green-yellow-gradient opacity-75 justify-self-end"></div>
                    </div>
                    {/* <div className="ml-[14.5%] w-[60%] h-8 rounded-l-full bg-green-yellow-gradient opacity-75 justify-self-end"></div> */}
                </div>

                <div className="flex flex-row items-center mt-24">
                    <div className="flex flex-col w-[60%] gap-5 pt-16">
                        <div className="-ml-[10%] mr-[18%] w-[80%] h-8 rounded-r-full bg-green-yellow-gradient opacity-75 justify-self-start"></div>
                        <div className="-ml-[10%] mr-[14.5%] w-[105%] h-8 rounded-r-full bg-green-yellow-gradient opacity-75 justify-self-start"></div>
                    </div>
                    <div className="flex flex-col items-end">
                        <h3 className="text-4xl font-bold text-right">Seek job opportunities</h3>
                        <p className="mt-3 text-base text-right">Let's explore our business partners here.</p>
                        <p className="mt-0 my-4 text-base text-right">You may be hired by them and experience new things!</p>
                        <Button 
                            onClick={navigateToCourse}
                            className="w-fit border rounded-3xl text-xl font-bold p-6 bg-white border-primary border-2 text-primary hover:bg-primary hover:text-white"
                        >
                                Explore businesses
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default DashboardCustomer;
