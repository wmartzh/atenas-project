import userService from '$server/services/user.service.js';

export async function GET(event) {
	const search = new URL(event.request.url).searchParams.get('search');
	if (!search) {
		return new Response(JSON.stringify(await userService.getAllUsers()));
	}

	return new Response(JSON.stringify(await userService.searchUsers(search)));
}
