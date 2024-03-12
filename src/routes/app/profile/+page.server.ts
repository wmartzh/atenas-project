import userService from '../../../server/services/user.service';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {

    return {
        user : await userService.getUserByEmail(event.locals.email)
    };
}) satisfies PageServerLoad;


export const actions = {
    default: async (event) => {

        console.log('◉ ▶ default: ▶ event:', event);
        
    }
}