import React from "react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";

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

const SkillAssessment: React.FC = () => {
    const form = useForm({
        defaultValues: {
            skills: [] as string[],
        },
    });
        
    function onSubmit(values: Record<string, unknown>) {
        console.log(values);
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
                                                    <FormItem
                                                        key={skill.id}
                                                        className="flex flex-row items-start space-x-3 space-y-0"
                                                    >
                                                        <FormControl>
                                                            <Checkbox
                                                                checked={isChecked}
                                                                onCheckedChange={(checked: any) => {
                                                                    const newValue = checked
                                                                        ? [...field.value, skill.id]
                                                                        : field.value.filter(
                                                                            (value) => value !== skill.id
                                                                        );
                                                                    field.onChange(newValue);
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            {skill.label}
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
                        <Button type="submit" className="w-full color-green-50 text-white rounded-full">Next</Button>
                    </form>
                </Form>
            </div>
        </main>
    );
}

export default SkillAssessment;
