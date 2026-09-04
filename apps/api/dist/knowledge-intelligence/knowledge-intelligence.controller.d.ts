import { KnowledgeIntelligenceService } from './knowledge-intelligence.service.js';
export declare class KnowledgeIntelligenceController {
    private readonly service;
    constructor(service: KnowledgeIntelligenceService);
    createCollection(userId: string, body: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
    }>;
    getCollections(userId: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
    }[]>;
    updateCollection(userId: string, id: string, body: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
    }>;
    deleteCollection(userId: string, id: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
    }>;
    createNote(userId: string, body: any): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        content: string;
        collectionId: string | null;
    }>;
    getNotes(userId: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        content: string;
        collectionId: string | null;
    }[]>;
    updateNote(userId: string, id: string, body: any): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        content: string;
        collectionId: string | null;
    }>;
    deleteNote(userId: string, id: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        content: string;
        collectionId: string | null;
    }>;
    createQuiz(userId: string, body: any): Promise<{
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
    updateQuiz(userId: string, id: string, body: any): Promise<{
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
    askDocument(userId: string, body: {
        documentId: string;
        prompt: string;
    }): Promise<{
        answer: string;
    }>;
}
