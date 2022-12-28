import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: 'fake-id'
    },
    data: {
      duration: 300
    }
  })

  console.log(result);
}

main();