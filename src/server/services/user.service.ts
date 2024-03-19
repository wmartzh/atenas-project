import type { Prisma } from '@prisma/client';
import prisma from '$server/prisma.client';
import { getFirebaseServer } from '../firebase.server';

export class UserService {
	createUserWithProfile(user: Prisma.UserCreateInput, profile: Prisma.ProfileCreateInput) {
		return prisma.user.create({
			data: {
				...user,
				profile: {
					create: profile
				}
			},
			include: {
				profile: true
			}
		});
	}
	async getAllUsers() {
		try {
			return prisma.user.findMany({
				include: {
					profile: true
				}
			});
		} catch (error) {
			return [];
		}
	}

	getUserByEmail(email: string) {
		return prisma.user.findUnique({
			where: {
				email
			},
			include: {
				profile: true
			}
		});
	}

	updateUser(email: string, uuid: string, data: Prisma.UserUpdateInput, replaceEmail?: string) {
		const firebaseServer = getFirebaseServer();
		if (firebaseServer.error) {
			throw firebaseServer.error;
		}

		if (!firebaseServer.data) {
			throw new Error('Firebase server data is not available');
		}
		if (replaceEmail) {
			firebaseServer.data.auth().updateUser(uuid, {
				email:replaceEmail
			});
		}

		return prisma.user.update({
			where: {
				email
			},
			data
		});
	}
}

export default new UserService();
