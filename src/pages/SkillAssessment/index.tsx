import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { ProfileApi, SkillApi } from "@/api";
import { SkillData, SkillResponse } from "@/types";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import useAuth from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";

const SkillAssessment: React.FC = () => {
    const [skills, setSkills] = useState<SkillData[]>([]);
    const { update, setUpdate } = useAuth();

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const skillData : SkillResponse = await SkillApi.all();
                setSkills(skillData.data);
            } catch (error) {
                console.error('Failed to fetch skills:', error);
            }
        };

        fetchSkills();
    }, []);

    const form = useForm({
        defaultValues: {
            skills: [] as string[],
        },
    });
        
    async function onSubmit(data: Record<string, unknown>) {
        // Token
        const jwtToken = Cookies.get("j-token");
        const payload = {
            skills: data.skills as string[]
        };

        setUpdate(true);

        // Submit the response
        await ProfileApi.customer2(payload, jwtToken as string)
        .then(() => {
            toast.success("Registration successful!");
            window.location.href = "/";
        })
        .catch((error) => {
            // Optionally handle errors
            console.error("Registration failed:", error);
            toast.error("Registration failed. Please try again.");
        })
        .finally(() => {
            setUpdate(false);
        });
    }

    return (
        <main className="flex flex-row w-full min-h-screen p-10 bg-green-yellow-gradient justify-center">
            <div className="flex flex-col w-[45%] h-fit px-20 py-12 bg-white rounded-lg gap-3">
                <p className="font-figtree text-4xl font-semibold">Skill assessment</p>
                {/* <p className="font-figtree text-base font-normal mb-4">What are you interested in? What are you good at?</p> */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="skills"
                            render={() => (
                                <FormItem>
                                    <div className="mb-4">
                                        <FormDescription>
                                            Select all skills you're interested in or good at.
                                        </FormDescription>
                                    </div>
                                    {skills.map((skill) => (
                                        <FormField
                                            key={skill.id}
                                            control={form.control}
                                            name="skills"
                                            render={({ field }) => {
                                                const isChecked = field.value.includes(skill.id);
                                                return (
                                                    <FormItem key={skill.id} className="flex flex-row items-start space-x-3 space-y-0">
                                                        <FormControl>
                                                            <Checkbox
                                                                checked={isChecked}
                                                                onCheckedChange={(checked: any) => {
                                                                    const newValue = checked
                                                                        ? [...field.value, skill.id]
                                                                        : field.value.filter((value) => value !== skill.id);
                                                                    field.onChange(newValue);
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            {skill.name}
                                                        </FormLabel>
                                                    </FormItem>
                                                );
                                            }}
                                        />
                                    ))}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full color-green-50 text-white rounded-full hover:bg-color-green-60 transition-transform duration-300 transform hover:scale-105" disabled={update}>
                            {update ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Next
                                </>
                            ) : (
                                'Next'
                            )}
                        </Button>
                    </form>
                </Form>
            </div>
        </main>
    );
}

export default SkillAssessment;
