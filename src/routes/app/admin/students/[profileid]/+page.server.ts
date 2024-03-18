import profileService from "$server/services/profile.service";
import { Prisma } from "@prisma/client";
import type { PageServerLoad } from "./$types";
import type { Actions } from "./$types";

export const load: PageServerLoad = async ({params}) => {
    const getProfile = async () => {
        const profile = await prisma.profile.findUnique({
            where: {
                id: Number(params.profileid)
            },
            
        })
        if (!profile) {
            throw new Error('Profile not found');

    }
    return profile;

    
    }
    return {
        profile: getProfile()
    }
};

export const actions: Actions = {
    updateProfile: async ({ params, request }) => {
        try {
            const formData = Object.fromEntries(
                (await request.formData()).entries()
            );
            await profileService.updateProfile(Number(params.profileid), formData);
        } catch (error) {
            return {
                status: 500,
                body: 'Error updating profile. Please try again.'
            };
        }

        return {
            status: 303,
            headers: {
                location: `/app/admin/students/${params.profileid}`
            }
        };

    }
};