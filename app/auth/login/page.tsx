"use client"

import { LoginAction } from "@/app/_actions/Login";
import SubmitBtn from "../_components/submitbtn";
import { toast } from "react-toastify";
import { useAtom } from "jotai";
import { userAtom } from "@/app/utils/Store";
import { useRef } from "react";

export default function Login() {
    const [user, setUser] = useAtom(userAtom)
    const formRef = useRef<HTMLFormElement>(null);

    async function handleLoginClient(formData: FormData) {
        console.log("Logging in...")

        const name = formData.get("name") as string;
        const password = formData.get("password") as string;

        if (!name || !password) {
            toast.error("Invalid name or password");
            return;
        }

        const res = await LoginAction(formData);

        if (res.success && res.data) {
            setUser(res.data);
            toast.success("Logged in successfully");
        }
        else {
            toast.error(res.error || "Something went wrong whilst logging you in.");
            formRef.current?.reset();
        }
    }

    return(
        <div className=" flex h-full w-full items-center justify-center flex-col gap-5">
            <h1 className=" font-bold text-xl">Login</h1>
            <form ref={formRef} action={handleLoginClient} className=" flex flex-col gap-2 p-3 rounded-xl bg-neutral-100">
                <input autoComplete="false" name="hidden" type="text" style={{ display: 'none '}} />
                <input type="text" name="name" placeholder="Name" className=" px-3 py-2 rounded-xl shadow-md focus:outline-none focus:border-pink border-2 border-transparent" />
                <input type="password" name="password" placeholder="Password" className=" px-3 py-2 rounded-xl shadow-md focus:outline-none focus:border-pink border-2 border-transparent"  />
                <SubmitBtn neutralText="Login" activeText="Logging in..." />
            </form>
        </div>
    )
}