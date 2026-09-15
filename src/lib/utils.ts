import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// shadcn/ui components use this helper to combine Tailwind class names.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
