import type { CreateAccountForm } from '$lib/types';
import { Prisma, $Enums } from '@prisma/client';
import { getFirebaseServer } from '../firebase.server';
import prismaClient from '../prisma.client';

export class ProfileService {
	async createProfile(profile: Prisma.ProfileCreateInput) {
		return prismaClient.profile.create({
			data: profile
		});
	}

	async createAccount(formData: CreateAccountForm) {
		//Create User on Firebase

		const firebaseServer = getFirebaseServer();
		if (firebaseServer.error) {
			throw firebaseServer.error;
		}

		if (!firebaseServer.data) {
			throw new Error('Firebase server data is not available');
		}

		const user = await firebaseServer.data.auth().createUser({
			email: formData.email,
			password: formData.password,
			displayName: `${formData.name} ${formData.lastName}`
		});

		console.log('◉ ▶ ProfileService ▶ user ▶ user:', user);

		const profileResponse = await this.createProfile({
			nacionality: formData.country,
			phoneNumber: formData.phoneNumber,
			gender: $Enums.Gender[formData.gender],
			identification: formData.identification,
			universityId: formData.noCarnet,
			career: 'undef',
			user: {
        create: {
          email: formData.email,
					lastName: formData.lastName,
					name: formData.name,
          status: 'ACTIVE',
				}
			}
		});

		console.log('◉ ▶ ProfileService ▶ createAccount ▶ profileResponse:', profileResponse);

		return {email: formData.email, password: formData.password};
		//Create User on Prisma
	}
}

export default new ProfileService();
