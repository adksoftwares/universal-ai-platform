import { PrismaService } from '../prisma.service.js';
export declare class DocumentProcessingService {
    private prisma;
    constructor(prisma: PrismaService);
    processDocument(documentId: string): void;
}
