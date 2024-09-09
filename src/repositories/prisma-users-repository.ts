
import { Prisma, User, PrismaClient} from "@prisma/client"


const prisma = new PrismaClient()

export class PrismaUsersRepository  {
    async create (user: Prisma.UserCreateInput): Promise<User> {
        const newUser = await prisma.user.create({
            data: user
        })

        return newUser
    }

    async deleteById (id: string): Promise<User | null> {
        const deletedUser = await prisma.user.delete({
            where: {
                id
            }
        })

        return deletedUser
    }

    async getAllUser (): Promise<User[]>{
        const users = await prisma.user.findMany()

        return users
    }

    async findByUID (UID: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: {
                UID
            }
        })

        return user
    }
}