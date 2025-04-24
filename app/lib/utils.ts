import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function maskCreditCard(cardNumber: string): string {
	const digitsOnly = cardNumber.replace(/\D/g, "");

	if (digitsOnly.length < 12) {
		return digitsOnly;
	}

	const firstFour = digitsOnly.substring(0, 4);
	const lastFour = digitsOnly.substring(digitsOnly.length - 4);
	const maskedPart = " **** **** ";

	return `${firstFour}${maskedPart}${lastFour}`;
}
