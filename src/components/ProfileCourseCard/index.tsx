import React from 'react';
import { CourseCardProps } from '@/types';
import { FaCalendarAlt } from "react-icons/fa";
import { format } from "date-fns";

const CourseCard: React.FC<CourseCardProps> = ({ id, title, ngoName, startDate, endDate, skills, score }) => {
    const formatDate = (dateString: string) => {
        return format(new Date(dateString), "dd MMM yyyy");
    };
    
    return (
        <div
            key={id}
            className="max-w-sm h-fit overflow-hidden shadow-lg rounded-2xl flex cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg"
        >
            <div className="w-[85px] bg-green-yellow-gradient content-center">
                <p className="font-bold text-5xl text-center text-white">{score}</p>
            </div>
            <div className="max-w-[75%] p-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-sm pb-1 text-gray-500">{ngoName}</p>
                <p className="text-sm">
                    {`${formatDate(startDate)} - ${formatDate(endDate)}`}
                </p>
                <div className="flex mt-2 overflow-hidden">
                    {skills.map(skill => (
                        <span key={skill} className="bg-gray-200 px-2 py-1 rounded-full text-xs mr-2 whitespace-nowrap">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
