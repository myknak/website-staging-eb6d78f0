import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names using clsx and tailwind-merge
 * This is a utility function commonly used in Radix UI and shadcn/ui patterns
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
