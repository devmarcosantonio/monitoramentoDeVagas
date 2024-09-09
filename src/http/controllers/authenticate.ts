import { FastifyReply, FastifyRequest } from "fastify"
import { PrismaUsersRepository } from "@/repositories/prisma-users-repository"
import { z } from "zod"


export default async function authenticate(request: FastifyRequest, reply: FastifyReply) {
    const authenticateUIDSchema = z.object({
        UID: z.string()
    })

    const {UID} = authenticateUIDSchema.parse(request.body) // parse = gera erro automático, safeparse não
    
    try {
        const prismaUsersRepository = new PrismaUsersRepository()
        const authenticate = await prismaUsersRepository.findByUID(UID)
        if (!authenticate) {
            throw new Error()
        }

        reply.status(200).send()
    } catch (err) {
        return reply.status(500).send()
    }
    
    return reply.status(200).send()
}