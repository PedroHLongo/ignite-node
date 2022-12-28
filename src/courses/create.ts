import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de Java',
      duration: 500,
      description: 'Curso de Java 17',
      teacher: {
        connectOrCreate: { // Primeiro procura se existe, caso não exista, cria o professor
          where: {
            name: "Nome do professor"
          },
          create: {
            name: "Nome do professor"
          }
        }
      }
    }
  })

  console.log(result);
}

main();