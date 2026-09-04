import { DocumentService } from './document.service.js';
export declare class DocumentController {
    private readonly documentService;
    constructor(documentService: DocumentService);
    create(userId: string, body: any, file?: Express.Multer.File): Promise<{
        error: string | null;
        id: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        filename: string;
        fileType: string;
        fileSize: number;
        storagePath: string;
        extractedText: string | null;
        aiSummary: string | null;
    }>;
    findAll(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        error: string | null;
        id: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        filename: string;
        fileType: string;
        fileSize: number;
        storagePath: string;
        extractedText: string | null;
        aiSummary: string | null;
    }[]>;
    findOne(userId: string, id: string): import(".prisma/client").Prisma.Prisma__DocumentClient<({
        importantDates: {
            id: string;
            description: string;
            createdAt: Date;
            date: Date;
            source: string | null;
            confidence: string;
            documentId: string;
        }[];
        suggestedActions: {
            id: string;
            title: string;
            createdAt: Date;
            source: string | null;
            actionType: string;
            deadline: Date | null;
            documentId: string;
        }[];
    } & {
        error: string | null;
        id: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        filename: string;
        fileType: string;
        fileSize: number;
        storagePath: string;
        extractedText: string | null;
        aiSummary: string | null;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(userId: string, id: string, updateData: any): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    remove(userId: string, id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
}
