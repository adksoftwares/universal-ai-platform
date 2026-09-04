import { PrismaService } from '../prisma.service.js';
export declare class KnowledgeIntelligenceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createKnowledgeCollection(userId: string, data: {
        name: string;
        description?: string;
    }): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
    }>;
    getKnowledgeCollections(userId: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
    }[]>;
    updateKnowledgeCollection(userId: string, id: string, data: {
        name?: string;
        description?: string;
    }): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
    }>;
    deleteKnowledgeCollection(userId: string, id: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
    }>;
    createKnowledgeNote(userId: string, data: {
        collectionId?: string;
        title: string;
        content: string;
    }): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        content: string;
        collectionId: string | null;
    }>;
    getKnowledgeNotes(userId: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        content: string;
        collectionId: string | null;
    }[]>;
    updateKnowledgeNote(userId: string, id: string, data: {
        title?: string;
        content?: string;
        collectionId?: string;
    }): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        content: string;
        collectionId: string | null;
    }>;
    deleteKnowledgeNote(userId: string, id: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        content: string;
        collectionId: string | null;
    }>;
    createQuiz(userId: string, data: {
        title: string;
        topic?: string;
        difficulty?: string;
    }): Promise<{
        topic: string | null;
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        difficulty: string | null;
    }>;
    getQuizzes(userId: string): Promise<{
        topic: string | null;
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        difficulty: string | null;
    }[]>;
    updateQuiz(userId: string, id: string, data: {
        title?: string;
        topic?: string;
        difficulty?: string;
    }): Promise<{
        topic: string | null;
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        difficulty: string | null;
    }>;
    deleteQuiz(userId: string, id: string): Promise<{
        topic: string | null;
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        difficulty: string | null;
    }>;
    askDocument(userId: string, documentId: string, prompt: string): Promise<{
        answer: string;
    }>;
}
