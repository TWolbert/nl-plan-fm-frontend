"use client"

import { useEffect } from "react";
import { useFormStatus } from "react-dom";

export default function SubmitBtn(props: { neutralText: string, activeText: string}) {
    const { pending } = useFormStatus();

    useEffect(() => {
        console.clear();
    }, [pending])
    
    return (
        <button type="submit" disabled={pending} className="bg-pink text-white font-bold rounded-xl px-3 py-2">
            {pending ? props.activeText : props.neutralText}
        </button>
    );
}