
import BusinessCard from "@/components/BusinessCard";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import { businesses } from "@/data";

const ExploreBusiness: React.FC = () => {
    const [search, setSearch] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    const [industryFilter, setIndustryFilter] = useState("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
    const handleLocationFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => setLocationFilter(e.target.value);
    const handleIndustryFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => setIndustryFilter(e.target.value);

    const filteredBusinesses = businesses.filter(business =>
        business.name.toLowerCase().includes(search.toLowerCase()) &&
        business.city.toLowerCase().includes(locationFilter.toLowerCase()) &&
        business.industry.toLowerCase().includes(industryFilter.toLowerCase())
    );

    return (
        <main className="flex flex-col bg-white w-full min-h-screen px-16 py-12">
            <div className="flex flex-col">
                <h1 className="text-4xl font-bold text-primary">Explore Businesses</h1>
                <p className="text-xl">Find opportunities here</p>

                <div className="mt-6 flex justify-between gap-4">
                    <div className="relative w-1/3">
                        <AiOutlineSearch className="absolute top-3 left-3 text-gray-400" />
                        <Input
                            placeholder="Search by name"
                            value={search}
                            onChange={handleSearchChange}
                            className="border border-gray-300 rounded-md p-2 pl-10"
                        />
                    </div>
                    <div className="flex space-x-4">
                        <Input
                            placeholder="Filter by location"
                            value={locationFilter}
                            onChange={handleLocationFilterChange}
                            className="border border-gray-300 rounded-md p-2"
                        />
                        <Input
                            placeholder="Filter by industry"
                            value={industryFilter}
                            onChange={handleIndustryFilterChange}
                            className="border border-gray-300 rounded-md p-2"
                        />
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredBusinesses.map((card, index) => (
                        <BusinessCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default ExploreBusiness;
