import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { businesses } from "@/data";
import { Button } from "@/components/ui/button";

const BusinessDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    // const [course, setCourse] = useState<CourseCardProps>();
    const business = businesses.find((business) => business.id === id);

    // useEffect(() => {
    //     // Replace with actual API endpoint
    //     const fetchCourse = async () => {
    //         try {
    //             const response = await fetch(`/api/courses/${id}`);
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const data = await response.json();
    //             setCourse(data);
    //         } catch (error) {
    //             console.error('Fetch error:', error);
    //         }
    //     };

    //     fetchCourse();
    // }, [id]);

    if (!business) {
        return <div>Loading...</div>;
    }

    return (
        <main className="flex flex-col bg-white w-full min-h-screen">
            <div className="px-16 py-12">
                <h1 className="text-4xl font-bold text-primary mb-6">Business Detail</h1>
                <div className="flex flex-row gap-8 h-50">
                    <div className="flex h-50 w-[30%] bg-gray-100 rounded-lg items-center p-8">
                        <img src={business.logo} className="w-full"></img>
                    </div>

                    <div className="flex flex-col gap-2 py-5 h-full w-[60%] justify-center">
                        <h2 className="text-3xl font-bold">{business.name}</h2>
                        <p className="text-lg text-gray-500">{business.industry}</p>

                        <div className="flex items-center text-lg">
                            <FaMapMarkerAlt className="mr-2 text-gray-500" />
                            {business.city}
                        </div>
                        <div className="flex items-center text-lg">
                            <FaPhone className="mr-2 text-gray-500" />
                            {business.phone}
                        </div>
                    </div>
                </div>
                
                <h3 className="mt-6 text-2xl font-bold">Description</h3>
                <div className="mt-2 mb-4">
                    <p className="text-lg">{business.description}</p>
                </div>
            </div>
        </main>
    );
};

export default BusinessDetail;
