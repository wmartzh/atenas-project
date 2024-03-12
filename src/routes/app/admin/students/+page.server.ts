import type { PageServerLoad } from './$types';
import  ProfileService  from '../../../../server/services/profile.service'; // Import ProfileService from the correct file path
import userService from '../../../../server/services/user.service';

export const load: PageServerLoad = async () => {
    try {
        const userList = await userService.getAllUsers();
        const profile = await ProfileService.getAllProfiles();
        return { profile };
    } catch (error) {
        console.error('Error fetching students:', error);
        throw new Error('Error fetching students. Please try again.');
    }
};

