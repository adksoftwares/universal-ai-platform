import { PrismaService } from '../prisma.service.js';
export declare class DevelopmentService {
    private prisma;
    constructor(prisma: PrismaService);
    createHabit(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        frequency: string;
    }>;
    getHabits(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        frequency: string;
    }[]>;
    updateHabit(userId: string, id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        frequency: string;
    }>;
    deleteHabit(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        frequency: string;
    }>;
}
