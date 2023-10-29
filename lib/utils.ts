import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 *
 * @param inputs ClassValue[]
 * @returns string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
