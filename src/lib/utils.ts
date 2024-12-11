import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// used to merge css classes

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(path: string) {
  // Remove the leading '.' if it exists
  const cleanPath = path.startsWith('./') ? path.slice(2) : path;
  // Remove the leading '/' if it exists
  const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  return `/pascal-azubike-portfolio${normalizedPath}`;
}


