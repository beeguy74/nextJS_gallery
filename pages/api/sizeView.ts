import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient();

async function db_view(size: string) {
    const data = await prisma.sizes.findFirst({where: {size_name: size}});
    
    return data;
}

export default async function sizeView( size: string ) {
    const res = await db_view(size)
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect()
    });
    return res;
}