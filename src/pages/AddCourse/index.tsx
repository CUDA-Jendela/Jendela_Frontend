import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Select from "react-select";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import illustrationImg from "@/assets/images/add_course_image.jpg";
import { CourseAddRequest, SkillResponse } from "@/types";
import Cookies from "js-cookie";
import useAuth from "@/contexts/AuthContext";
import { CourseApi, SkillApi } from "@/api";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

interface SkillOption {
    id: string;
    label: string;
}

interface FormData {
    name: string;
    description: string;
    skills: string[];
    quota: number;
    dateStart: string;
    dateEnd: string;
}

const AddCourse: React.FC = () => {
    const { update, setUpdate } = useAuth();
    const [skills, setSkills] = useState<SkillOption[]>([]);
    const [selectedSkills, setSelectedSkills] = useState<SkillOption[]>([]);

    const form = useForm<FormData>({
        defaultValues: {
            name: "",
            description: "",
            skills: [],
            quota: 0,
            dateStart: "",
            dateEnd: "",
        },
    });

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const skillsResponse: SkillResponse = await SkillApi.all();
                const skillOptions = skillsResponse.data.map(skill => ({ id: skill.id, label: skill.name }));
                setSkills(skillOptions);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchSkills();
    }, []);

    async function onSubmit(data: FormData) {
        const startDate = new Date(data.dateStart).toISOString();
        const endDate = new Date(data.dateEnd).toISOString();

        // Token
        const jwtToken = Cookies.get("j-token");
        const payload: CourseAddRequest = {
            name: data.name,
            description: data.description,
            skills: data.skills,
            quota: data.quota,
            startDate: startDate,
            endDate: endDate
        };

        setUpdate(true);

        // Submit the response
        await CourseApi.add(payload, jwtToken as string)
            .then(() => {
                toast.success("Course added successfully!");
                window.location.href = "/course";
            })
            .catch((error) => {
                console.error("Course failed to be added:", error);
                toast.error((error.response?.data as { message: string })?.message || 'Server is unreachable. Please try again later.');
            })
            .finally(() => {
                setUpdate(false);
            });
    }

    const handleSkillsChange = (selectedOptions: SkillOption[]) => {
        setSelectedSkills(selectedOptions);
        form.setValue('skills', selectedOptions.map(option => option.id));
    };

    return (
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <img src={illustrationImg} className="absolute inset-0 h-full w-full object-cover z-0" alt="Background image by yanalya on Freepik https://www.freepik.com/free-photo/joiner-working-workbench-small-carpentry_1282153.htm#fromView=search&page=3&position=24&uuid=01b7c0a1-d34c-45a2-87b9-8738bd54f32f" />
            <div className="absolute inset-0 bg-green-yellow-gradient-2 opacity-75 z-10" />

            <div className="relative z-20 w-full max-w-2xl h-fit mt-10 mb-10 px-20 py-12 gap-3 bg-white rounded-lg shadow-md overflow-y-auto">
                <p className="font-figtree text-4xl font-semibold text-primary">Add a course</p>
                <p className="font-figtree text-base font-normal mb-4">Build skills, build futures. Open your training programs today!</p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Course name</FormLabel>
                                    <FormControl>
                                        <Input type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            rules={{ required: "Course name is required" }}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <textarea className="h-24 w-full border border-gray-300 rounded-md p-2" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            rules={{ required: "Description is required" }}
                        />
                        <FormField
                            control={form.control}
                            name="skills"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Skills</FormLabel>
                                    <FormControl>
                                        <Select
                                            isMulti
                                            options={skills}
                                            onChange={(selectedOptions) => handleSkillsChange(selectedOptions as SkillOption[])}
                                            value={selectedSkills}
                                            getOptionLabel={(option) => option.label}
                                            getOptionValue={(option) => option.id}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="quota"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Quota</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            rules={{ required: "Quota is required" }}
                        />
                        <FormField
                            control={form.control}
                            name="dateStart"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Date start</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            rules={{ required: "Date start is required" }}
                        />
                        <FormField
                            control={form.control}
                            name="dateEnd"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Date end</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            rules={{ required: "Date end is required" }}
                        />
                        <Button type="submit" className="w-full color-green-50 text-white rounded-full hover:bg-color-green-60 transition-transform duration-300 transform hover:scale-105" disabled={update}>
                            {update ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Adding Course
                                </>
                            ) : (
                                'Add Course'
                            )}
                        </Button>
                    </form>
                </Form>
            </div>
        </main>
    );
}

export default AddCourse;