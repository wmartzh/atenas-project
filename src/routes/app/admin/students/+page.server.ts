import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import  ProfileService  from '../../../../server/services/profile.service'; // Import ProfileService from the correct file path
import userService from '../../../../server/services/user.service';

export const load: PageServerLoad = async () => {
    try {
        
        const profileList = await ProfileService.getAllProfiles();
        const userList = await userService.getAllUsers();
        console.log(userList);
        const getProfileById = await ProfileService.getProfileById(profileList[0].id); // Access the id property of the first element in profileList
        console.log(getProfileById);
        return { userList};
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Error fetching users. Please try again.');
    }
};




/*
export const actions: Actions = {
    async editprofile(event) {
        try {
            const formData = Object.fromEntries(
                (await event.request.formData()).entries()
            );
            const profileId = Number(event); // Fix: Access the profileId property with the correct case-sensitive name
            await ProfileService.updateProfile(profileId, formData);
        } catch (error) {
            return {
                status: 500,
                body: 'Error updating profile. Please try again.'
            };
        }
        return {
            status: 303,
            headers: {
                location: '/app/admin/students'
            }
        };
    }
};

*/



