import type { Prisma } from "@prisma/client"
import prisma from "$server/prisma.client"

export class UserService {
  createUserWithProfile(user: Prisma.UserCreateInput, profile:Prisma.ProfileCreateInput) {
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
    })
  }
}

export default new UserService();