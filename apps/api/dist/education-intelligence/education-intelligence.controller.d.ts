import { EducationIntelligenceService } from './education-intelligence.service.js';
export declare class EducationIntelligenceController {
    private readonly service;
    constructor(service: EducationIntelligenceService);
    createMistakeLog(userId: string, data: any): Promise<{
        concept: string | null;
        id: string;
        createdAt: Date;
        userId: string;
        explanation: string | null;
        question: string;
        userAnswer: string | null;
        correctAnswer: string;
    }>;
    getMistakeLogs(userId: string): Promise<{
        concept: string | null;
        id: string;
        createdAt: Date;
        userId: string;
        explanation: string | null;
        question: string;
        userAnswer: string | null;
        correctAnswer: string;
    }[]>;
    getMistakeLog(userId: string, id: string): Promise<{
        concept: string | null;
        id: string;
        createdAt: Date;
        userId: string;
        explanation: string | null;
        question: string;
        userAnswer: string | null;
        correctAnswer: string;
    }>;
    updateMistakeLog(userId: string, id: string, data: any): Promise<{
        concept: string | null;
        id: string;
        createdAt: Date;
        userId: string;
        explanation: string | null;
        question: string;
        userAnswer: string | null;
        correctAnswer: string;
    }>;
    deleteMistakeLog(userId: string, id: string): Promise<{
        concept: string | null;
        id: string;
        createdAt: Date;
        userId: string;
        explanation: string | null;
        question: string;
        userAnswer: string | null;
        correctAnswer: string;
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
    solveStudyProblem(body: {
        problem: string;
        level: string;
    }): Promise<{
        message: string;
    }>;
}
