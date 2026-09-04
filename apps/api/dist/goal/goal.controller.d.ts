import { GoalService } from './goal.service.js';
export declare class GoalController {
    private readonly goalService;
    constructor(goalService: GoalService);
    create(userId: string, data: any): import(".prisma/client").Prisma.Prisma__GoalClient<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        targetDate: Date | null;
        progress: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(userId: string): import(".prisma/client").Prisma.PrismaPromise<({
        milestones: {
            id: string;
            title: string;
            isCompleted: boolean;
            createdAt: Date;
            goalId: string;
        }[];
    } & {
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        targetDate: Date | null;
        progress: number;
    })[]>;
    findOne(userId: string, id: string): import(".prisma/client").Prisma.Prisma__GoalClient<({
        milestones: {
            id: string;
            title: string;
            isCompleted: boolean;
            createdAt: Date;
            goalId: string;
        }[];
    } & {
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        targetDate: Date | null;
        progress: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(userId: string, id: string, data: any): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    remove(userId: string, id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
}
