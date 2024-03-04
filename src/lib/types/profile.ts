export type CreateAccountForm = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	phoneNumber: string;
	lastName: string;
	identification: string;
	noCarnet: string;
	country: string;
	gender: 'MALE' | 'FEMALE';
};
