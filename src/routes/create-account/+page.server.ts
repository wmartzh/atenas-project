import { redirect, type RequestEvent } from '@sveltejs/kit';
import type { CreateAccountForm } from '$lib/types/';
import profileService from '../../server/services/profile.service.js';

export const actions = {
	default: async (event: RequestEvent) => {
		try {
			const formData = Object.fromEntries(
				(await event.request.formData()).entries()
			) as CreateAccountForm;

			await profileService.createAccount(formData);
		} catch (error) {
			return {
				status: 500,
				body: 'Error creating account. Please try again.'
			};
		}
		return redirect(303, '/app');
	}
};
