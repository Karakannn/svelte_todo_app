import { writable } from "svelte/store";

export const items = writable([
    {
        id: 1,
        text: "Take out the bins",
        completed: false
    },
    {
        id: 2,
        text: "Go to School",
        completed: true
    }
])