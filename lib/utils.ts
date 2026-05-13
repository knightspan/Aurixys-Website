import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "Aurixys",
  tagline: "Autonomous River Intelligence",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aurixys.com",
  email: "info@aurixys.com",
  phone: "+91 70384 86909",
  address: "Nashik, Maharashtra, India",
} as const;
