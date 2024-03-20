import type { UpdateProfileForm } from '$lib/types';
import userService from '$server/services/user.service';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	return {
		user: await userService.getUserByEmail(event.locals.email)
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		try {
			const form = Object.fromEntries(
				(await event.request.formData()).entries()
			) as UpdateProfileForm;

			const response = await userService.updateUser(
				event.locals.email,
				event.locals.id,
				{
					name: form.name,
					lastName: form.lastName,
					email: form.email,
					profile: {
						update: {
							gender: form.gender,
							phoneNumber: form.phoneNumber,
							nacionality: form.country,
							identification: form.identification,
							universityId: form.universityId,
							career: form.career
						}
					}
				},
				form.email
			);

			console.log('◉ ▶ default: ▶ response:', response);
			return {
				status: 200,
				body: 'Profile Updated'
			};
		} catch (error) {

			console.log('◉ ▶ default: ▶ error:', error);
			return {
				status: 500,
				body: 'Error Editin Profile. Please try again.'
			};
		}
	}
};
