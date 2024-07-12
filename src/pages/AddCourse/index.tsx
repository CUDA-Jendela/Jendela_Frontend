import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Select from "react-select";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import illustrationImg from "@/assets/images/add_course_image.jpg";

const skills = [
    {
        id: "1",
        label: "Baking",
    },
    {
        id: "2",
        label: "Cooking",
    },
    {
        id: "3",
        label: "Housekeeping",
    },
    {
        id: "4",
        label: "Plumbing",
    },
    {
        id: "5",
        label: "Electrical Work",
    },
    {
        id: "6",
        label: "Knitting",
    },
    {
        id: "7",
        label: "Gardening",
    },
    {
        id: "8",
        label: "Driving",
    },
    {
        id: "9",
        label: "Tailoring",
    },
    {
        id: "10",
        label: "Computer Skills",
    },
];

interface SkillOption {
    id: string;
    label: string;
}

const AddCourse: React.FC = () => {
    const form = useForm({
        defaultValues: {
            name: "",
            description: "",
            skills: [],
            quota: "",
            dateStart: "",
            dateEnd: "",
        },
    });

    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
        
    function onSubmit(values: Record<string, unknown>) {
        console.log(values);
    }

    const handleSkillsChange = (selectedOptions: MultiValue<SkillOption>) => {
        setSelectedSkills(selectedOptions);
        form.setValue('skills', selectedOptions.map(option => option.id)); // Update form values
    };

    return (
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <img src={illustrationImg} className="absolute inset-0 h-full w-full object-cover z-0" alt="Background image by yanalya on Freepik https://www.freepik.com/free-photo/joiner-working-workbench-small-carpentry_1282153.htm#fromView=search&page=3&position=24&uuid=01b7c0a1-d34c-45a2-87b9-8738bd54f32f" />
            <div className="absolute inset-0 bg-green-yellow-gradient-2 opacity-75 z-10" />

            <div className="relative z-20 w-full max-w-2xl h-fit mt-10 mb-10 px-20 py-12 gap-3 bg-white rounded-lg shadow-md overflow-y-auto">
                <p className="font-figtree text-4xl font-semibold">Add a course</p>
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
                                    <textarea className="h-24 w-full border border-gray-300 rounded-md p-2" {...field}  />
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
                                            onChange={(selectedOptions) => handleSkillsChange(selectedOptions as unknown as SkillOption[])}
                                            value={selectedSkills.map(skill => ({ value: skill.id, label: skill.label }))}
                                            getOptionLabel={(option) => option.label}
                                            getOptionValue={(option) => option.value}
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
                            rules={{ required: "Date start is required" }}
                        />
                        <Button type="submit" className="w-full color-green-50 text-white rounded-full">Add course</Button>
                    </form>
                </Form>
            </div>
        </main>
    );
}

export default AddCourse;
