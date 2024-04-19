"use server";

import { db, token, user } from "@/src/schema";
import { eq } from "drizzle-orm";

export async function VerifyTokenAction(authToken: string): Promise<boolean> {
    const tokens = await db.select().from(token).where(eq(token.token, authToken)).limit(1).execute();

    return tokens.length > 0;
}