import { User } from "@/index";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// This is how we store the user object (This runs on the client, obviously)
export const userAtom = atomWithStorage("user", null as unknown as User)