import { PrismaClient } from '@prisma/client';
import { sizes } from "./seeds/sizes";

const prisma = new PrismaClient();

async function makeSeed() {
  await prisma.sizes.createMany({
    data: sizes,
  });
}

makeSeed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () =>{
    await prisma.$disconnect();
  });
