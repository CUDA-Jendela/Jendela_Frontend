import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import illustrationImg from "@/assets/images/login_image.jpg";
import logo from "@/assets/logo_white.png";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import useAuth from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { LoginRequest } from "@/types";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
 
const formSchema = z.object({
    email: z.string().email({
        message: "Invalid email format."
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
})

const Login: React.FC = () => {
    const { isAuthenticated, login, update, setUpdate } = useAuth();
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
        },
    })
        
    function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            const payload: LoginRequest = {
                email: data.email,
                password: data.password
            };
            setUpdate(true);

            login(payload);

            toast.success("Login successful");
        } catch (error) {
            console.error("Submit error:", error);
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
                    Your window to a brighter tomorrow. Everyone deserves a second chance.
                </p>
                <div className="absolute inset-0 bg-green-gradient z-10 opacity-90" />
                <img src={illustrationImg} className="z-0 h-full w-full object-cover" alt="Illustration" />
            </div>

            <div className="w-[45%] h-screen bg-white content-center p-[10%]">
                <div className="flex flex-col w-full gap-3">
                    <p className="font-figtree text-4xl font-semibold">Welcome back!</p>
                    <p className="font-figtree text-base font-normal mb-4">Login to your account</p>
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
                                    <FormMessage />
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
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full color-green-50 text-white rounded-full hover:bg-color-green-60 transition-transform duration-300 transform hover:scale-105" disabled={update}>
                                {update ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Logging In
                                    </>
                                ) : (
                                    'Login'
                                )}
                            </Button>
                        </form>
                        </Form>
                    <div className="flex flex-row gap-1 justify-center">
                        <p className="text-sm">Not registered yet?</p>
                        <a className="text-sm text-green-50" href="/register">Create an account</a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;