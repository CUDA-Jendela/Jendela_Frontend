import React from 'react';
import { BusinessCardProps } from '@/types';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BusinessCard: React.FC<BusinessCardProps> = ({ id, logo, name, industry, city }) => {
    return (
        <Link to={`/business/${id}`}>
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 transform hover:scale-105">
                <div className="h-48 flex items-center justify-center bg-gray-100">
                    <img className="max-h-full max-w-full object-contain" src={logo} alt={name} />
                </div>
                <div className="p-4">
                    <h2 className="text-2xl font-bold truncate text-ellipsis overflow-hidden ">{name}</h2>
                    <p className="text-base pb-1 text-gray-500">{industry}</p>
                    <div className="flex items-center text-base">
                        <FaMapMarkerAlt className="mr-2 text-gray-500" />
                        {city}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BusinessCard;
