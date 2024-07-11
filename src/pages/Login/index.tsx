import React from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

const Login: React.FC = () => {
    return (
        <main className="flex flex-row w-full min-h-screen">
            <div className="w-[55%] h-screen bg-green-50">
                Picture
            </div>
            <div className="w-[45%] h-screen bg-white content-center p-[10%]">
                <div className="flex flex-col w-full gap-3">
                    <p className="font-figtree text-4xl font-semibold">Welcome back!</p>
                    <p className="font-figtree text-sm font-normal">Login to your account</p>
                    <div className="flex flex-col mb-4 mt-4 gap-3">
                        <Input type="email" placeholder="Email"></Input>
                        <Input type="password" placeholder="Password"></Input>
                    </div>
                    <Button className="color-green-50 text-white rounded-full">Login</Button>
                    <div className="flex flex-row gap-1 justify-center">
                        <p className="text-xs">Not registered yet?</p>
                        <a className="text-xs text-green-50" href="/register">Create an account</a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;