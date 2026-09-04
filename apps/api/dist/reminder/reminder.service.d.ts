import { PrismaService } from '../prisma.service.js';
export declare class ReminderService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, data: any): import(".prisma/client").Prisma.Prisma__ReminderClient<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        time: string | null;
        isRecurring: boolean;
        recurrence: string | null;
        status: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        time: string | null;
        isRecurring: boolean;
        recurrence: string | null;
        status: string;
    }[]>;
    findOne(userId: string, id: string): import(".prisma/client").Prisma.Prisma__ReminderClient<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        time: string | null;
        isRecurring: boolean;
        recurrence: string | null;
        status: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(userId: string, id: string, data: any): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    remove(userId: string, id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
}
