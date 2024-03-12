import { redirect, type Handle } from '@sveltejs/kit';
import { getFirebaseServer } from './server/firebase.server';
import type { DecodedIdToken } from 'firebase-admin/auth';

const  WHITE_LIST = ["/auth","/create-account"]

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.id = '';
	event.locals.email = '';

	if (WHITE_LIST.includes(event.url.pathname)) {
		event.cookies.set('session', '', {
			path: '/'
		});
		return await resolve(event);
	}

	const session = event.cookies.get('session') ?? '';

	const admin = getFirebaseServer();
	if (admin.error) {
		throw redirect(303, '/auth');
	}
	let decodedClaims: DecodedIdToken;
	try {
		decodedClaims = await admin.data.auth().verifySessionCookie(session, false);
	} catch (error) {
		console.error(error);
		throw redirect(303, '/auth');
	}
	const { uid, email } = decodedClaims;

	console.log('◉ ▶ consthandle:Handle= ▶ decodedClaims:', decodedClaims);
	event.locals.id = uid;
	event.locals.email = email ?? '';

	if (!event.locals.id) {
		throw redirect(303, '/auth');
	}

	return await resolve(event);
};
