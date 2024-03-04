import { redirect, type Cookies } from '@sveltejs/kit';
import { getFirebaseServer } from '../firebase.server';
import admin from 'firebase-admin';
export class AuthService {
	private admin: typeof admin;
	constructor() {
		const firebaseServer = getFirebaseServer();
		if (firebaseServer.error) {
			throw firebaseServer.error;
		}

		if (!firebaseServer.data) {
			throw new Error('Firebase server data is not available');
		}

		this.admin = firebaseServer.data;
	}

	async authenticate(token: string, cookies: Cookies) {
   
		const expiresIn = 60 * 60 * 24 * 5;
		let sessionCookie: string;
		try {
			sessionCookie = await this.admin
				.auth()
				.createSessionCookie(token, { expiresIn: expiresIn * 1000 });
		} catch (error) {
			console.error(error);
			throw redirect(303, '/auth');
		}

		cookies.set('session', sessionCookie, {
			maxAge: expiresIn,
			path: '/',
			httpOnly: true,
			secure: true,
			sameSite: 'lax'
		});
	}
}

export default new AuthService();