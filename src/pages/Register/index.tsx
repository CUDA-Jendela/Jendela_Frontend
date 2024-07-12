import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import illustrationImg from "@/assets/images/register_image.jpg";
import logo from "@/assets/logo_white.png";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RegisterRequest, RegisterResponse } from "@/types";
import useAuth from "@/contexts/AuthContext";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { AuthApi } from "@/api";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
    email: z.string().email({
        message: "Invalid email format."
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    role: z.string().min(1, {
        message: "Please select a role.",
    }),
})

const Register: React.FC = () => {
    const { isAuthenticated, update, setUpdate } = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            role: "",
        },
    });
        
    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            if (data.password === data.confirmPassword) {
                const payload: RegisterRequest = {
                    email: data.email,
                    password: data.password,
                    role: data.role,
                };
                setUpdate(true);
        
                // Submit the response
                const submitResponse: RegisterResponse = await AuthApi.register(payload);
                if (submitResponse.success) {
                    toast.success(submitResponse.message as string);
                }
            } else {
                console.log("Masuk sini?????");
                toast.error("Passwords do not match, please try again.");
            }
        } catch (error) {
            const err = error as AxiosError;
            toast.error((err.response?.data as { error: string })?.error || 'Server is unreachable. Please try again later.');
        } finally {
            setUpdate(false);
        }
    }

    return (
        <main className="flex flex-row w-full min-h-screen">
            <div className="relative w-[55%] h-screen">
                <img src={logo} className="absolute top-10 left-10 z-20 h-20" />
                <p className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-[90%] text-center font-figtree font-semibold italic text-white text-3xl z-20">
                    Lorem ipsum dolor sit amet kamu jamet lorem ipsum dolor sit amet
                </p>
                <div className="absolute inset-0 bg-green-gradient z-10 opacity-90" />
                <img src={illustrationImg} className="z-0 h-full w-full object-cover" alt="Illustration" />
            </div>
            
            <div className="w-[45%] h-screen bg-white content-center p-[10%]">
                <div className="flex flex-col w-full gap-3">
                    <p className="font-figtree text-4xl font-semibold">Create an Account</p>
                    <p className="font-figtree text-base font-normal mb-4">Register to create your account</p>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input type="email" placeholder="Email" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-left"/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input type="password" placeholder="Password" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-left"/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input type="password" placeholder="Confirm password" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-left"/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Who are you?" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="customer">I am looking for trainings and jobs</SelectItem>
                                                <SelectItem value="ngo">I am a foundation that provides trainings</SelectItem>
                                                <SelectItem value="business">I am a business that needs employees</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className="text-left"/>
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                    <Button type="submit" className="w-full color-green-50 text-white rounded-full hover:bg-color-green-60 transition-transform duration-300 transform hover:scale-105" disabled={update}>
                        {update ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Registering
                            </>
                        ) : (
                            'Register'
                        )}
                    </Button>
                    <div className="flex flex-row gap-1 justify-center">
                        <p className="text-sm">Already registered?</p>
                        <a className="text-sm text-green-50" href="/login">Login here</a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Register;
