import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs:ClassValue[]){

    // tw do is it merges the styling like px-2 py-2 --> p-2  //
    return twMerge(clsx(inputs))
}