import * as fastify from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'

const server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({})

server.get('/', (request, reply) => {
    reply.send('Hello, World!')
})

export default server