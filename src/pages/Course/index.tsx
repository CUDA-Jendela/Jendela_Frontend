import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import CourseCard from "@/components/CourseCard";
import { AiOutlineSearch } from "react-icons/ai";
import { CourseApi, SkillApi } from "@/api";
import { CourseCardProps, CoursesResponse, SkillResponse } from "@/types";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import useAuth from "@/contexts/AuthContext";

const Course: React.FC = () => {
    const { role } = useAuth();
    const [search, setSearch] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    const [skillsFilter, setSkillsFilter] = useState("");
    const [courses, setCourses] = useState<CourseCardProps[]>([]);
    const [locations, setLocations] = useState<string[]>([]);
    const [skills, setSkills] = useState<string[]>([]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
    const handleLocationFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => setLocationFilter(e.target.value);
    const handleSkillsFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSkillsFilter(e.target.value);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const jwtToken = Cookies.get("j-token");
                const courseData: CoursesResponse = await CourseApi.getAll(jwtToken as string);
                setCourses(courseData.data);
                
                // Assuming CourseApi provides methods to fetch locations and skills
                const locationData = await CourseApi.getLocation(jwtToken as string);
                setLocations(locationData.data);
                
                const skillsResponse: SkillResponse = await SkillApi.all();
                const skillNames = skillsResponse.data.map(skill => skill.name);
                setSkills(skillNames);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchCourses();
    }, []);

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(search.toLowerCase()) &&
        (locationFilter === "" || course.ngoCity === locationFilter) &&
        (skillsFilter === "" || course.skills.includes(skillsFilter))
    );

    return (
        <main className="flex flex-col bg-white w-full min-h-screen">
            <div className="px-16 py-12">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold text-primary">Explore Courses</h1>
                        <p className="text-xl">Discover the perfect course to unlock your potential.</p>
                    </div>
                    { role == "ngo" && (<div className="">
                        <Link to="/add-course">
                            <button
                                className="w-fit border rounded-3xl text-lg font-bold p-2 px-6 bg-primary border-primary border-2 text-white hover:bg-primary-dark hover:text-white transition-transform duration-300 transform hover:scale-105"
                            >
                                Add Course
                            </button>
                        </Link>
                    </div>) }
                </div>

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
                        <select
                            value={locationFilter}
                            onChange={handleLocationFilterChange}
                            className="border border-gray-300 rounded-md p-2"
                        >
                            <option value="">All Locations</option>
                            {locations.map((location, index) => (
                                <option key={index} value={location}>
                                    {location}
                                </option>
                            ))}
                        </select>
                        <select
                            value={skillsFilter}
                            onChange={handleSkillsFilterChange}
                            className="border border-gray-300 rounded-md p-2"
                        >
                            <option value="">All Skills</option>
                            {skills.map((skill, index) => (
                                <option key={index} value={skill}>
                                    {skill}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map((card, index) => (
                        <CourseCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Course;