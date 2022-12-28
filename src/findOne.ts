import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const course1 = await prisma.courses.findFirst(); //Encontra o primeiro por ordem de criação
  const course2 = await prisma.courses.findFirst({
    take: -1,
  });  //Encontra o primeiro por ordem de criação ao inverso
  
  console.log(course1);
  console.log(course2);
}

main();