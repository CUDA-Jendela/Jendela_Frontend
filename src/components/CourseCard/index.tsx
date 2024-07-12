import React from 'react';

import { CourseCardProps } from '@/types';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Card: React.FC<CourseCardProps> = ({ id, title, ngoName, location, startDate, endDate, quota, skills }) => {
    const formatDate = (dateString: string) => {
        return format(new Date(dateString), "dd MMM yyyy");
    };
    
    return (
        <Link to={`/courseDetail/${id}`}>
            <div
                key={id}
                className="border h-[250px] overflow-hidden border-2 rounded-lg flex cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg"
            >
                <div className="w-[100px] bg-green-yellow-gradient border rounded-lg">
                </div>
                <div className="w-full p-5">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-base pb-3 text-gray-500">{ngoName}</p>
                    <div className="flex items-center text-base">
                        <FaMapMarkerAlt className="mr-2 text-gray-500" />
                        {location}
                    </div>
                    <div className="flex items-center text-base">
                        <FaCalendarAlt className="mr-2 text-gray-500" />
                        {`${formatDate(startDate)} - ${formatDate(endDate)}`}
                    </div>
                    <div className="flex items-center text-base pb-2">
                        <FaUsers className="mr-2 text-gray-500" />
                        Quota: {quota}
                    </div>
                    <div className="mt-2">
                        {skills.map(skill => (
                            <span key={skill} className="bg-gray-200 px-2 py-1 rounded-full text-sm mr-2">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
