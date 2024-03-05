import userService from '../../../../server/services/user.service';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
        userList: await userService.getAllUsers()
    };
}) satisfies PageServerLoad;