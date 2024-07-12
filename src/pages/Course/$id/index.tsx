import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { format } from "date-fns";
import { CourseCardProps2, CourseResponse } from "@/types";
// import { Courses } from "@/data";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { CourseApi } from "@/api";

const CourseDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [course, setCourse] = useState<CourseCardProps2>();

    useEffect(() => {
        // Replace with actual API endpoint
        const fetchCourse = async () => {
            try {
                const jwtToken = Cookies.get("j-token");
                const courseData: CourseResponse = await CourseApi.getById(jwtToken as string, id as string);
                setCourse(courseData.data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchCourse();
    }, [id]);

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
                        <h2 className="text-3xl font-bold">{course.name}</h2>
                        <p className="text-lg text-gray-500">{course.ngoName}</p>

                        <div className="flex items-center text-lg">
                            <FaMapMarkerAlt className="mr-2 text-gray-500" />
                            {course.ngoCity}
                        </div>
                        <div className="flex items-center text-lg">
                            <FaCalendarAlt className="mr-2 text-gray-500" />
                            {`${formatDate(course.startDate)} - ${formatDate(course.endDate)}`}
                        </div>
                        <div className="flex items-center text-lg">
                            <FaUsers className="mr-2 text-gray-500" />
                            Quota: {course.quota}
                        </div>
                    </div>

                    <div className="mt-5">
                        <Button className="text-lg text-white py-6 px-6">Enroll now</Button>
                    </div>
                </div>
                <h3 className="mt-6 text-2xl font-bold">Skills</h3>
                <div className="mt-2">
                    {course.skills.map((skill: string) => (
                        <span key={skill} className="bg-gray-200 px-3 py-2 rounded-full text-base mr-2">
                            {skill}
                        </span>
                    ))}
                </div>
                <h3 className="mt-6 text-2xl font-bold">Description</h3>
                <div className="mt-2 mb-4">
                    <p className="text-lg">{course.description}</p>
                </div>
            </div>
        </main>
    );
};

export default CourseDetail;
