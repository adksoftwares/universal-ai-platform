import { PrismaService } from '../prisma.service.js';
export declare class EducationIntelligenceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createMistakeLog(userId: string, data: any): Promise<{
        concept: string | null;
        id: string;
        createdAt: Date;
        userId: string;
        question: string;
        userAnswer: string | null;
        correctAnswer: string;
        explanation: string | null;
    }>;
    getMistakeLogs(userId: string): Promise<{
        concept: string | null;
        id: string;
        createdAt: Date;
        userId: string;
        question: string;
        userAnswer: string | null;
        correctAnswer: string;
        explanation: string | null;
    }[]>;
    getMistakeLog(userId: string, id: string): Promise<{
        concept: string | null;
        id: string;
        createdAt: Date;
        userId: string;
        question: string;
        userAnswer: string | null;
        correctAnswer: string;
        explanation: string | null;
    }>;
    updateMistakeLog(userId: string, id: string, data: any): Promise<{
        concept: string | null;
        id: string;
        createdAt: Date;
        userId: string;
        question: string;
        userAnswer: string | null;
        correctAnswer: string;
        explanation: string | null;
    }>;
    deleteMistakeLog(userId: string, id: string): Promise<{
        concept: string | null;
        id: string;
        createdAt: Date;
        userId: string;
        question: string;
        userAnswer: string | null;
        correctAnswer: string;
        explanation: string | null;
    }>;
    createPracticeSession(userId: string, data: any): Promise<{
        topic: string;
        id: string;
        createdAt: Date;
        userId: string;
        durationMinutes: number | null;
        score: number | null;
    }>;
    getPracticeSessions(userId: string): Promise<{
        topic: string;
        id: string;
        createdAt: Date;
        userId: string;
        durationMinutes: number | null;
        score: number | null;
    }[]>;
    getPracticeSession(userId: string, id: string): Promise<{
        topic: string;
        id: string;
        createdAt: Date;
        userId: string;
        durationMinutes: number | null;
        score: number | null;
    }>;
    updatePracticeSession(userId: string, id: string, data: any): Promise<{
        topic: string;
        id: string;
        createdAt: Date;
        userId: string;
        durationMinutes: number | null;
        score: number | null;
    }>;
    deletePracticeSession(userId: string, id: string): Promise<{
        topic: string;
        id: string;
        createdAt: Date;
        userId: string;
        durationMinutes: number | null;
        score: number | null;
    }>;
    createCertificate(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        provider: string;
        expiryDate: Date | null;
        credentialId: string | null;
        issueDate: Date | null;
        credentialUrl: string | null;
    }>;
    getCertificates(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        provider: string;
        expiryDate: Date | null;
        credentialId: string | null;
        issueDate: Date | null;
        credentialUrl: string | null;
    }[]>;
    getCertificate(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        provider: string;
        expiryDate: Date | null;
        credentialId: string | null;
        issueDate: Date | null;
        credentialUrl: string | null;
    }>;
    updateCertificate(userId: string, id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        provider: string;
        expiryDate: Date | null;
        credentialId: string | null;
        issueDate: Date | null;
        credentialUrl: string | null;
    }>;
    deleteCertificate(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        provider: string;
        expiryDate: Date | null;
        credentialId: string | null;
        issueDate: Date | null;
        credentialUrl: string | null;
    }>;
    solveStudyProblem(problem: string, level: string): Promise<{
        message: string;
    }>;
}
