"use server";

import { User } from "@/index";
import { db, user } from "@/src/schema";
import { hash } from "bcrypt"
import { eq } from "drizzle-orm";

export async function RegisterAction(formData: FormData): Promise<ActionResponse<User>> {
    console.log("Registering... on server")
    const username = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!username || !password) {
        return { success: false, error: "Invalid username or password", data: null };
    }

    const passwordhash = await hash(password, 12);

    try {
        const nameExists = await db.select().from(user).where(eq(user.name, username)).limit(1).execute();
        if (nameExists.length > 0) {
            return { success: false, error: "Username already exists", data: null };
        }
        const emailExists = await db.select().from(user).where(eq(user.email, email)).limit(1).execute();
        if (emailExists.length > 0) {
            return { success: false, error: "Email already exists", data: null };
        }

        await db.insert(user).values({
            name: username,
            password: passwordhash,
            role: "user",
            email: email,
            image_id: 0
        }).execute();
    }
    catch {
        return { success: false, error: "Something went wrong whilst inserting the user.", data: null };
    }

    const newUser = await db.select().from(user).where(eq(user.name, username)).limit(1).execute();

    if (newUser) {
        return { success: true, error: null, data: newUser[0] };
    }
    
    return { success: false, error: "Something went wrong whilst fetching the user.", data: null };
}