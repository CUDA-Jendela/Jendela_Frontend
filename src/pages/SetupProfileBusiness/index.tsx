import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SetupProfileBusiness: React.FC = () => {
    const form = useForm({
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            address: "",
            city: "",
            description: "",
            industry: "",
            logo: "",
        },
    });
        
    function onSubmit(values: Record<string, any>) {
        console.log(values);
    }

    return (
        <main className="flex flex-row w-full min-h-screen p-10 bg-green-yellow-gradient justify-center">
            <div className="flex flex-col w-[45%] h-fit px-20 py-12 bg-white rounded-lg gap-3">
                <p className="font-figtree text-4xl font-semibold">Setup your profile</p>
                <p className="font-figtree text-base font-normal mb-4">First things first! Tell us about your business.</p>
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
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            rules={{ required: "Email is required" }}
                        />
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Input type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            rules={{ required: "Address is required" }}
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
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            rules={{ required: "Description is required" }}
                        />
                        <FormField
                            control={form.control}
                            name="industry"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Field of industry</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a field" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Healthcare">Healthcare</SelectItem>
                                            <SelectItem value="Food and beverage">Food and beverage</SelectItem>
                                            <SelectItem value="Education">Education</SelectItem>
                                            <SelectItem value="Hospitality and tourism">Hospitality and tourism</SelectItem>
                                            <SelectItem value="Media and entertainment">Media and entertainment</SelectItem>
                                            <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                                            <SelectItem value="Retail and consumer goods">Retail and consumer goods</SelectItem>
                                            <SelectItem value="Engineering and construction">Engineering and construction</SelectItem>
                                            <SelectItem value="Transportation and logistics">Transportation and logistics</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="logo"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Your logo</FormLabel>
                                <FormControl>
                                    <Input type="file" placeholder="Your logo" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            rules={{ required: "Logo is required" }}
                        />
                        <Button type="submit" className="w-full color-green-50 text-white rounded-full">Next</Button>
                    </form>
                </Form>
            </div>
        </main>
    );
}

export default SetupProfileBusiness;
