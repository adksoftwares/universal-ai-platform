import { PrismaService } from '../prisma.service.js';
export declare class MemoryService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, data: any): import(".prisma/client").Prisma.Prisma__MemoryClient<{
        id: string;
        category: string | null;
        createdAt: Date;
        userId: string;
        content: string;
        type: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        category: string | null;
        createdAt: Date;
        userId: string;
        content: string;
        type: string;
    }[]>;
    findOne(userId: string, id: string): import(".prisma/client").Prisma.Prisma__MemoryClient<{
        id: string;
        category: string | null;
        createdAt: Date;
        userId: string;
        content: string;
        type: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(userId: string, id: string, data: any): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    remove(userId: string, id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
}
