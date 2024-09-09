import { FastifyReply, FastifyRequest } from "fastify"
import { PrismaUsersRepository } from "@/repositories/prisma-users-repository"
import { request } from "http"
import { z } from "zod"



export default async function deleteUser (request: FastifyRequest, reply: FastifyReply) {

    const bodyRequestShcema = z.object({
        id: z.string()
    })

    const { id } = bodyRequestShcema.parse(request.body)

    try {
        const prismaUsersRepository = new PrismaUsersRepository()
        const userDeleted = await prismaUsersRepository.deleteById(id)
        if (!userDeleted) {
            throw new Error()
        }
        reply.status(200).send({userDeleted})
    } catch (err) {
        return reply.status(500).send()
    }

}