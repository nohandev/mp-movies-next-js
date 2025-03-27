import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
const urlSearchParams = new URLSearchParams()

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
