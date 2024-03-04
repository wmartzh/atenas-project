import { redirect } from '@sveltejs/kit';

import authService from '$server/services/auth.service';
export const actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();

		const token = form.get('token');

		try {
			if (!token || typeof token !== 'string') {
				throw Error('Token not found');
			}

			await authService.authenticate(token, cookies);
		} catch (error) {
			throw redirect(303, '/auth');
		}

		throw redirect(303, '/app');
	}
};
