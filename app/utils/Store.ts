import { atom } from "jotai";

// This is how we store the user object (This runs on the client, obviously)
const user = atom<User>({
    id: -1,
    name: "",
    email: "",
    image_id: -1,
    image: null,
    password: null,
    role: "user",
    createdAt: "",
    updatedAt: "",
})