"use client"

import { RegisterAction } from "@/app/_actions/Register";
import SubmitBtn from "../_components/submitbtn";
import { toast } from "react-toastify";
import { useAtom } from "jotai";
import { userAtom } from "@/app/utils/Store";
import { useRef } from "react";

export default function Register() {
    const [user, setUser] = useAtom(userAtom)
    const formRef = useRef<HTMLFormElement>(null);

    async function handleRegisterClient(formData: FormData) {
        console.log("Registering...")

        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        if (!name || !email || !password) {
            toast.error("Invalid name, email or password");
            return;
        }

        const res = await RegisterAction(formData);

        if (res.success && res.data) {
            setUser(res.data);
            toast.success("Registered successfully");
            document.location.href = "/auth/login";
        }
        else {
            toast.error(res.error || "Something went wrong whilst registering");
            formRef.current?.reset();
        }
    }

    return(
        <div className=" flex h-full w-full items-center justify-center flex-col gap-5">
            <h1 className=" font-bold text-xl">Register</h1>
            <form ref={formRef} action={handleRegisterClient} className=" flex flex-col gap-2 p-3 rounded-xl bg-neutral-100">
                <input autoComplete="false" name="hidden" type="text" style={{ display: 'none '}} />
                <input type="text" name="name" placeholder="Name" className=" px-3 py-2 rounded-xl shadow-md focus:outline-none focus:border-pink border-2 border-transparent" />
                <input type="text" name="email" placeholder="E-mail" className=" px-3 py-2 rounded-xl shadow-md focus:outline-none focus:border-pink border-2 border-transparent" />
                <input type="password" name="password" placeholder="Password" className=" px-3 py-2 rounded-xl shadow-md focus:outline-none focus:border-pink border-2 border-transparent"  />
                <SubmitBtn neutralText="Register" activeText="Registering..." />
            </form>
        </div>
    )
}