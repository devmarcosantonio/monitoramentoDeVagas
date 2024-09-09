
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"
import { PrismaUsersRepository } from '../../repositories/prisma-users-repository'


export default  async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerUserSchema = z.object({
        name: z.string(),
        cpf: z.string(),
        UID: z.string()
    })

    const {name, cpf, UID} = registerUserSchema.parse(request.body) // parse = gera erro automático, safeparse não
    
    try {
        const prismaUsersRepository = new PrismaUsersRepository()
        const user = await prismaUsersRepository.create({name, cpf, UID})
        if (!user) {
            throw Error
        }
        reply.status(201).send()

    } catch (err) {
        reply.status(500).send()
    }
    
    return reply.status(201).send()
}