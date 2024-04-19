"use server";

import { db, token, user } from "@/src/schema";
import { eq } from "drizzle-orm";
import { compare } from "bcrypt";
import { User } from "@/index";
import { cookies } from "next/headers";
import UIDGenerator from "uid-generator";

export async function LoginAction(formData: FormData): Promise<ActionResponse<User>> {
    const username = formData.get("name") as string;
    const password = formData.get("password") as string;

    if (!username || !password) {
        return { success: false, error: "Invalid username or password", data: null };
    }

    const users = await db.select().from(user).where(eq(user.name, username)).limit(1).execute();

    if (users.length === 0) {
        return { success: false, error: "Username does not exist", data: null };
    }

    const userData = users[0];

    const passwordMatch = await compare(password, userData.password!);

    if (!passwordMatch) {
        return { success: false, error: "Password does not match", data: null };
    }

    const uidGen = new UIDGenerator();
    const authToken = await uidGen.generate();

    await db.insert(token).values({ 
        token: authToken,
        user_id: userData.id   
    }).execute();

    cookies().set("authToken", authToken);

    return { success: true, error: null, data: userData };
}