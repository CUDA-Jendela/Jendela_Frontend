import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { NGORequest } from "@/types";
import { ProfileApi } from "@/api";
import { toast } from "react-toastify";
import useAuth from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";

const SetupProfileNGO: React.FC = () => {
    const { update, setUpdate } = useAuth();

    const form = useForm({
        defaultValues: {
            name: "",
            phone: "",
            address: "",
            city: "",
            description: "",
            logo: "",
        },
    });
        
    async function onSubmit(data: Record<string, unknown>) {
        // const profilePictureFile = data.profilePicture;

        // Upload the profile picture and get the URL
        // const profilePictureUrl = await handleFileUpload(profilePictureFile);
        const profilePictureUrl = "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffortmyersradon.com%2Ffort-myers-beach-fl-radon-mitigation-testing-test-system-gas%2Fdummy-user-img-1%2F&psig=AOvVaw1rgm_sGf2nk28wgXaPF3S7&ust=1720854518156000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKiMm-L4oIcDFQAAAAAdAAAAABAJ"

        // Token
        const jwtToken = Cookies.get("j-token");
        const payload: NGORequest = {
            name: data.name as string,
            address: data.address as string,
            city: data.city as string,
            description: data.description as string,
            phoneNumber: data.phone as string,
            logo: profilePictureUrl
        };

        setUpdate(true);

        // Submit the response
        await ProfileApi.ngo(payload, jwtToken as string)
        .then(() => {
            toast.success("Registration successful!");
            // Insert to cookies
            Cookies.set("j-token", jwtToken as string);
            window.location.href = "/";
        })
        .catch((error) => {
            // Optionally handle errors
            console.error("Registration failed:", error);
            toast.error((error.response?.data as { message: string })?.message || 'Server is unreachable. Please try again later.');
        })
        .finally(() => {
            setUpdate(false);
        });
    }

    return (
        <main className="flex flex-row w-full min-h-screen p-10 bg-green-yellow-gradient justify-center">
            <div className="flex flex-col w-[45%] h-fit px-20 py-12 bg-white rounded-lg gap-3">
                <p className="font-figtree text-4xl font-semibold">Setup your profile</p>
                <p className="font-figtree text-base font-normal mb-4">First things first! Tell us about your organization.</p>
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
                                    <textarea className="h-24 w-full border border-gray-300 rounded-md p-2" {...field}  />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            rules={{ required: "Description is required" }}
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

export default SetupProfileNGO;
