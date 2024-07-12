import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import CourseCard from "@/components/CourseCard";
import { AiOutlineSearch } from "react-icons/ai";
import { CourseApi } from "@/api";
import { CourseCardProps, CoursesResponse } from "@/types";
import Cookies from "js-cookie";

const Course: React.FC = () => {
    const [search, setSearch] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    const [skillsFilter, setSkillsFilter] = useState("");
    const [courses, setCourses] = useState<CourseCardProps[]>();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
    const handleLocationFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => setLocationFilter(e.target.value);
    const handleSkillsFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => setSkillsFilter(e.target.value);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const jwtToken = Cookies.get("j-token");
                const courseData : CoursesResponse = await CourseApi.getAll(jwtToken as string);
                setCourses(courseData.data);
            } catch (error) {
                console.error('Failed to fetch skills:', error);
            }
        };

        fetchCourses();
    }, []);

    const filteredCourses = courses!.filter(course =>
        course.name.toLowerCase().includes(search.toLowerCase()) &&
        course.ngoCity.toLowerCase().includes(locationFilter.toLowerCase()) &&
        course.skills.some((skill: string) => skill.toLowerCase().includes(skillsFilter.toLowerCase()))
    );

    return (
        <main className="flex flex-col bg-white w-full min-h-screen">
            <div className="px-16 py-12">
                <h1 className="text-4xl font-bold text-primary">Explore Courses</h1>
                <p className="text-xl">Discover the perfect course to unlock your potential.</p>

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
                            placeholder="Filter by skills"
                            value={skillsFilter}
                            onChange={handleSkillsFilterChange}
                            className="border border-gray-300 rounded-md p-2"
                        />
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