import React from 'react';

import { CardProps } from '@/types';

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
    return (
        <div className="max-w-xs bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 transform hover:scale-105">
            <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
            <div className="p-4">
                <h2 className="text-xl font-bold text-primary mb-2">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default Card;
