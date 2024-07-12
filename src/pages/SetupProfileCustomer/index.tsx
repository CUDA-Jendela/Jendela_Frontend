import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { CustomerRequest, CustomerResponse, JwtPayload } from "@/types";
import useAuth from "@/contexts/AuthContext";
import { ProfileApi } from "@/api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { AxiosError } from "axios";
import { Loader2 } from "lucide-react";
import { verifyToken } from "@/utils/util";

const SetupProfileCustomer: React.FC = () => {
    const { update, setUpdate } = useAuth();

    const form = useForm({
        defaultValues: {
            name: "",
            phone: "",
            birthdate: "",
            city: "",
            profilePicture: "",
        },
    });

    async function onSubmit(data: Record<string, unknown>) {
        try {
            const birthdate = new Date(data.birthdate as string).toISOString();
            // const profilePictureFile = data.profilePicture;

            // Upload the profile picture and get the URL
            // const profilePictureUrl = await handleFileUpload(profilePictureFile);
            const profilePictureUrl = "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffortmyersradon.com%2Ffort-myers-beach-fl-radon-mitigation-testing-test-system-gas%2Fdummy-user-img-1%2F&psig=AOvVaw1rgm_sGf2nk28wgXaPF3S7&ust=1720854518156000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKiMm-L4oIcDFQAAAAAdAAAAABAJ"

            // Token
            const jwtToken = Cookies.get("j-token");
            const decodedPayload: JwtPayload = verifyToken(jwtToken as string) as JwtPayload;
            const payload: CustomerRequest = {
                userID: decodedPayload.id,
                name: data.name as string,
                birthDate: birthdate,
                city: data.city as string,
                phoneNumber: data.phone as string,
                profilePicture: profilePictureUrl,
            };

            setUpdate(true);

            // Submit the response
            const customerResponse: CustomerResponse = await ProfileApi.customer1(payload, jwtToken as string);
            if (customerResponse.success) {
                toast.success(customerResponse.message as string);
                if (customerResponse.token) {
                    // Insert to cookies
                    Cookies.set("j-token", customerResponse.token as string);

                    // Re-route based on role
                    window.location.href = "/setup-cust-skill";
                }
            }
        } catch (error) {
            console.error("Submit error:", error);
            const err = error as AxiosError;
            toast.error((err.response?.data as { message: string })?.message || 'Server is unreachable. Please try again later.');
        } finally {
            setUpdate(false);
        }
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
                                        <Input type="file" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            rules={{ required: "Profile picture is required" }}
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

export default SetupProfileCustomer;