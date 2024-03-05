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
  async getAllUsers() {
    try {
      return prisma.user.findMany({
        include: {
          profile: true
        }
      })
      
    } catch (error) {
       return []
    }
  }
}

export default new UserService();