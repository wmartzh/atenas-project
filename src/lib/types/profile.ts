export type CreateAccountForm = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	phoneNumber: string;
	lastName: string;
	identification: string;
	universityId: string;
	country: string;
	gender: 'MALE' | 'FEMALE';
};

export type UpdateProfileForm = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	phoneNumber: string;
	lastName: string;
	identification: string;
	universityId: string;
	country: string;
	gender: 'MALE' | 'FEMALE';
};