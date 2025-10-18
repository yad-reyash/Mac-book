import { create } from "zustand";

export const useMacbookStore = create((set) => ({
    color :"#2e2c2e",
    setColor : (color)=>set({color}),
    scale : 0.084,
    setScale : (scale)=>set({ scale}),

    reset: () => set({ color: "#2e2c2e", scale: 0.084 }),
}));