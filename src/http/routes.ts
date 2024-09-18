import { FastifyInstance } from "fastify"
import fastify from "fastify"
import register from "./controllers/register"
import authenticate from "./controllers/authenticate"
import getAllUsers from "./controllers/getAllUsers"
import deleteUser from "./controllers/delete"



export async function AppRoutes(app: FastifyInstance) {
    app.get('/', getAllUsers)
    app.get('/api/users', getAllUsers)
    app.delete('/api/users', deleteUser)
    app.post('/api/users', register)
    app.post('/api/authenticate', authenticate)

}

