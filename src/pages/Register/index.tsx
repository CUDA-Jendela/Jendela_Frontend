import React from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

const Register: React.FC = () => {
    return (
        <main className="flex flex-row w-full min-h-screen">
            <div className="w-[55%] h-screen bg-green-50">
                Picture
            </div>
            <div className="w-[45%] h-screen bg-white content-center p-[10%]">
                <div className="flex flex-col w-full gap-3">
                    <p className="font-figtree text-4xl font-semibold">Create an account</p>
                    <p className="font-figtree text-sm font-normal">Join us today and grab your chance!</p>
                    <div className="flex flex-col mb-4 mt-4 gap-3">
                        <Input type="email" placeholder="Email"></Input>
                        <Input type="password" placeholder="Password"></Input>
                        <Input type="password" placeholder="ConfirmPassword"></Input>
                    </div>
                    <Button className="color-green-50 text-white rounded-full">Register</Button>
                    <div className="flex flex-row gap-1 justify-center">
                        <p className="text-xs">Already have an account?</p>
                        <a className="text-xs text-green-50" href="/login">Login</a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Register;