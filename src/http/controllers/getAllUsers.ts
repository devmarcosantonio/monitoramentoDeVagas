import { FastifyReply, FastifyRequest } from "fastify"
import { PrismaUsersRepository } from "@/repositories/prisma-users-repository"



export default async function getAllUsers(request: FastifyRequest, reply: FastifyReply) {

    try {
        const prismaUsersRepository = new PrismaUsersRepository()
        const users = await prismaUsersRepository.getAllUser()
        if (!users) {
            throw new Error()
        }
        reply.status(200).send({users})
    } catch (err) {
        return reply.status(500).send()
    }
    
    return reply.status(200).send()
}