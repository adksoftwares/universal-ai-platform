import { PrismaService } from '../prisma.service.js';
export declare class ConnectionIntelligenceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createTemplate(userId: string, data: any): Promise<{
        id: string;
        title: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        content: string;
    }>;
    getTemplates(userId: string): Promise<{
        id: string;
        title: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        content: string;
    }[]>;
    getTemplateById(userId: string, id: string): Promise<{
        id: string;
        title: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        content: string;
    } | null>;
    updateTemplate(userId: string, id: string, data: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteTemplate(userId: string, id: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    createBlockedContact(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        reason: string | null;
        identifier: string;
    }>;
    getBlockedContacts(userId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        reason: string | null;
        identifier: string;
    }[]>;
    getBlockedContactById(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        reason: string | null;
        identifier: string;
    } | null>;
    updateBlockedContact(userId: string, id: string, data: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteBlockedContact(userId: string, id: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    rewriteMessage(userId: string, content: string, tone: string): Promise<{
        rewrittenContent: string;
    }>;
}
