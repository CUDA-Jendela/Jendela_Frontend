import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { format } from "date-fns";
import { CourseCardProps } from "@/types";
import { Courses } from "@/data";
import { Button } from "@/components/ui/button";

const CourseDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    // const [course, setCourse] = useState<CourseCardProps>();
    const course = Courses.find((course) => course.id === id);

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

    if (!course) {
        return <div>Loading...</div>;
    }

    const formatDate = (dateString: string) => {
        return format(new Date(dateString), "dd MMM yyyy");
    };

    return (
        <main className="flex flex-col bg-white w-full min-h-screen">
            <div className="px-16 py-12">
                <h1 className="text-4xl font-bold text-primary mb-6">Course Detail</h1>
                <div className="flex flex-row gap-8 h-50">
                    <div className="h-50 w-[30%] bg-green-yellow-gradient rounded-lg"></div>

                    <div className="flex flex-col gap-2 py-5 h-full w-[60%] justify-center">
                        <h2 className="text-3xl font-bold">{course.title}</h2>
                        <p className="text-base text-gray-500">{course.ngoName}</p>

                        <div className="flex items-center text-base">
                            <FaMapMarkerAlt className="mr-2 text-gray-500" />
                            {course.location}
                        </div>
                        <div className="flex items-center text-base">
                            <FaCalendarAlt className="mr-2 text-gray-500" />
                            {`${formatDate(course.startDate)} - ${formatDate(course.endDate)}`}
                        </div>
                        <div className="flex items-center text-base">
                            <FaUsers className="mr-2 text-gray-500" />
                            Quota: {course.quota}
                        </div>
                    </div>

                    <div className="mt-5">
                        <Button className="text-lg text-white py-6 px-6">Enroll now</Button>
                    </div>
                </div>
                <h3 className="mt-6 text-xl font-bold">Skills</h3>
                <div className="mt-2">
                    {course.skills.map((skill: string) => (
                        <span key={skill} className="bg-gray-200 px-2 py-1 rounded-full text-sm mr-2">
                            {skill}
                        </span>
                    ))}
                </div>
                <h3 className="mt-6 text-xl font-bold">Description</h3>
                <div className="mt-2">
                    <p className="text-base">{course.description}</p>
                </div>
            </div>
        </main>
    );
};

export default CourseDetail;
