import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.user
  .create({
    data: {
      name: "Joao",
      email: "joao@gmail.com",
      Post: {
        create: [
          { email: "teste1@gmail.com" },
          { email: "teste2@gmail.com" },
          { email: "teste3@gmail.com" },
        ],
      },
    },
  })
  .then(() => {
    console.log("Usuario Cadastrado");
    return;
  })
  .finally(() => {
    console.log("Banco atualizado.");
    prisma.$disconnect();
  });
