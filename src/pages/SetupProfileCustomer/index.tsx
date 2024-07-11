import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";

const SetupProfileCustomer: React.FC = () => {
    const form = useForm({
        defaultValues: {
            name: "",
            phone: "",
            birthdate: "",
            city: "",
            profilePicture: "",
        },
    });
        
    function onSubmit(values: Record<string, any>) {
        console.log(values);
    }

    return (
        <main className="flex flex-row w-full min-h-screen p-10 bg-green-yellow-gradient justify-center">
            <div className="flex flex-col w-[45%] h-fit px-20 py-12 bg-white rounded-lg gap-3">
                <p className="font-figtree text-4xl font-semibold">Setup your profile</p>
                <p className="font-figtree text-base font-normal mb-4">First things first! Tell us about yourself.</p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Full name</FormLabel>
                                <FormControl>
                                    <Input type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            rules={{ required: "Name is required" }}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Phone number</FormLabel>
                                <FormControl>
                                    <Input type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            rules={{ required: "Phone number is required" }}
                        />
                        <FormField
                            control={form.control}
                            name="birthdate"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Birthdate</FormLabel>
                                <FormControl>
                                    <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            rules={{ required: "Birthdate is required" }}
                        />
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                    <Input type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            rules={{ required: "City is required" }}
                        />
                        <FormField
                            control={form.control}
                            name="profilePicture"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Profile picture</FormLabel>
                                <FormControl>
                                    <Input type="file" placeholder="Profile picture" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            rules={{ required: "Profile picture is required" }}
                        />
                        <Button type="submit" className="w-full color-green-50 text-white rounded-full">Next</Button>
                    </form>
                </Form>
            </div>
        </main>
    );
}

export default SetupProfileCustomer;
