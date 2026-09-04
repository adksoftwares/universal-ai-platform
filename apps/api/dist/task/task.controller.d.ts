import { TaskService } from './task.service.js';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(userId: string, data: any): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: string;
        title: string;
        description: string | null;
        isCompleted: boolean;
        dueDate: Date | null;
        priority: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        title: string;
        description: string | null;
        isCompleted: boolean;
        dueDate: Date | null;
        priority: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }[]>;
    findOne(userId: string, id: string): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: string;
        title: string;
        description: string | null;
        isCompleted: boolean;
        dueDate: Date | null;
        priority: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(userId: string, id: string, data: any): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    remove(userId: string, id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
}
