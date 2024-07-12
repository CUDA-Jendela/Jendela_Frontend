import { UserApi } from "@/api";
import { SelfResponse } from "@/types";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import profilePicturePlaceholder from "@/assets/images/profile_placeholder.png";
import { Mail } from "lucide-react";
import { FaBirthdayCake, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import CourseCard from "@/components/ProfileCourseCard";

const Profile: React.FC = () => {
    const [username, setUsername] = useState("user");
    
    useEffect(() => {
        const fetchUser = async () => {
            const token = Cookies.get("j-token");

            if (token) {
                try {
                    const user : SelfResponse = await UserApi.getSelf(token);
                    if (user) {
                        setUsername(user.user.name || "user");
                        // setProfilePicture(user.user.)
                    }
                    // setUser(userData.user);
                } catch (error) {
                    console.error('Failed to fetch user:', error);
                }
            }

        };

        fetchUser();
    }, []);

    return (
        <main className="flex flex-col bg-white w-full min-h-screen">
            <div className="px-16 py-12">
                <h1 className="text-4xl font-bold text-primary">My profile</h1>

                <div className="flex flex-row gap-5 mt-10">
                    <div className="flex flex-col gap-5 items-center content-center w-fit h-fit py-10 px-20 bg-neutral-90 shadow-lg rounded-2xl">
                        <img 
                            src={profilePicturePlaceholder} 
                            className="size-36 rounded-full border-4 border-primary object-cover" 
                            alt="Profile Picture"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800">{username}</h3>
                        <div className="flex flex-col gap-2 items-start">
                            <div className="flex items-center text-lg">
                                <Mail className="mr-2 text-gray-500" />
                                abcdfg@gmail.com
                            </div>
                            <div className="flex items-center text-lg">
                                <FaPhone className="mr-3 text-gray-500" />
                                081234567890
                            </div>
                            <div className="flex items-center text-lg">
                                <FaBirthdayCake className="mr-3 text-gray-500" />
                                9 January 2024
                            </div>
                            <div className="flex items-center text-lg">
                                <FaMapMarkerAlt className="mr-3 text-gray-500" />
                                Bandung
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 items-center w-full max-h-54 overflow-y-scroll py-8 px-10 bg-neutral-90 shadow-lg rounded-2xl">
                        <h3 className="text-2xl font-semibold text-gray-800 w-full text-left">Courses</h3>
                        <div className="grid grid-cols-3 gap-5 h-full">
                            <CourseCard id="1" name="Knitting" ngoCity="Bandung" quota={90} ngoName="DelaArts" startDate="9 Jan 2024" endDate="20 Jan 2024" skills={["Knitting"]} score="90" />
                            <CourseCard id="1" name="Knitting" ngoCity="Bandung" quota={90} ngoName="DelaArts" startDate="9 Jan 2024" endDate="20 Jan 2024" skills={["Knitting"]} score="90" />
                            <CourseCard id="1" name="Knitting" ngoCity="Bandung" quota={90} ngoName="DelaArts" startDate="9 Jan 2024" endDate="20 Jan 2024" skills={["Knitting"]} score="90" />
                            <CourseCard id="1" name="Knitting" ngoCity="Bandung" quota={90} ngoName="DelaArts" startDate="9 Jan 2024" endDate="20 Jan 2024" skills={["Knitting"]} score="90" />
                            <CourseCard id="1" name="Knitting" ngoCity="Bandung" quota={90} ngoName="DelaArts" startDate="9 Jan 2024" endDate="20 Jan 2024" skills={["Knitting"]} score="90" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Profile;
