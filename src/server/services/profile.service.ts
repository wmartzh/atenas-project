import type { CreateAccountForm } from '$lib/types';
import { Prisma } from '@prisma/client';
import prismaClient from '../prisma.client';
import { getFirebaseServer } from '../firebase.server';

export class ProfileService {
  async createProfile(profile: Prisma.ProfileCreateInput) {
    return prismaClient.profile.create({
      data: profile,
    });
  }

  async createAccount(formData: CreateAccountForm) {
    // Crear usuario en Firebase...
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
      displayName: `${formData.name} ${formData.lastName}`,
    });

    // Crear perfil en la base de datos...
    try {
      const profileResponse = await this.createProfile({
        nacionality: formData.country,
        phoneNumber: formData.phoneNumber,
        gender: formData.gender,
        identification: formData.identification,
        universityId: formData.noCarnet,
        career: 'undef',
        user: {
          create: {
            email: formData.email,
            lastName: formData.lastName,
            name: formData.name,
            status: 'ACTIVE',
          },
        },
      });
      console.log('Profile created:', profileResponse);
    } catch (error) {
      console.error('Error creating profile:', error);
      throw new Error('Error creating profile. Please try again.');
    }

    return { email: formData.email, password: formData.password };
  }

  async getAllProfiles() {
    try {
      return prismaClient.profile.findMany({
        include: {
          user: true,
        },
      });
    } catch (error) {
      console.error('Error fetching profiles:', error);
      throw new Error('Error fetching profiles. Please try again.');
    }
  }

  async updateProfile(profileId: number, updatedProfileData: Prisma.ProfileUpdateInput) {
    try {
      const updatedProfile = await prismaClient.profile.update({
        where: { id: profileId },
        data: updatedProfileData,
      });
      console.log('Profile updated:', updatedProfile);
      return updatedProfile;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw new Error('Error updating profile. Please try again.');
    }
  }
}

export default new ProfileService();
