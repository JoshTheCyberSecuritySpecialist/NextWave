import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'es', 'fr'] as const;
export const defaultLocale = 'en';

export type Locale = (typeof locales)[number];

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });