import React from 'react';
import { CustomerCardProps } from '@/types';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CustomerCard: React.FC<CustomerCardProps> = ({ id, profilePicture, name, city, skills }) => {
    return (
        <Link to={`/hiring/${id}`}>
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 transform hover:scale-105 flex flex-row">
                <div className="w-[30%] pl-4 flex items-center justify-center bg-white">
                    <img className="max-h-full max-w-full object-contain" src={profilePicture} alt={name} />
                </div>
                <div className="w-[70%] px-6 py-4">
                    <h2 className="text-2xl font-bold truncate text-ellipsis overflow-hidden">{name}</h2>
                    <div className="flex items-center text-base">
                        <FaMapMarkerAlt className="mr-2 text-gray-500" />
                        {city}
                    </div>
                    <div className="flex mt-2 overflow-hidden">
                        {skills.map(skill => (
                            <span key={skill} className="bg-gray-200 px-2 py-1 rounded-full text-sm mr-2 whitespace-nowrap">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CustomerCard;
