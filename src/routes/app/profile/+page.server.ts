import userService from '../../../server/services/user.service';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	return {
		user: await userService.getUserByEmail(event.locals.email)
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		try {
			const formData = Object.fromEntries((await event.request.formData()).entries());

			console.log('◉ ▶ default: ▶ formData:', formData);
		} catch (error) {
			return {
				status: 500,
				body: 'Error Editin Profile. Please try again.'
			};
		}
	}
};
