import { FastifyInstance } from "fastify";

export const healthRoute = async (app: FastifyInstance) => {
  app.get("/health", async (request, reply) => {
    return reply.status(200).send({
      status: "ok!!",
    });
  });
};
