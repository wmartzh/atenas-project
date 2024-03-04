// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { PrismaClient } from '@prisma/client';

import { addMessages, getLocaleFromNavigator, init } from 'svelte-i18n';

import en from './locale/en.json';
import es from './locale/es.json';

addMessages('en', en);
addMessages('es', es);

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator()
});

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			id: string;
			email: string;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		
	}
	let prisma: PrismaClient
}

export {};
