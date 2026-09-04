import { PrismaService } from '../prisma.service.js';
export declare class LearningIntelligenceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getTopics(userId: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        subjectId: string;
        masteryLevel: number;
    }[]>;
    getTopicById(id: string, userId: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        subjectId: string;
        masteryLevel: number;
    }>;
    createTopic(userId: string, data: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        subjectId: string;
        masteryLevel: number;
    }>;
    updateTopic(id: string, userId: string, data: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        subjectId: string;
        masteryLevel: number;
    }>;
    deleteTopic(id: string, userId: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        subjectId: string;
        masteryLevel: number;
    }>;
    getStudySessions(userId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        subjectId: string;
        durationMinutes: number;
    }[]>;
    getStudySessionById(id: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        subjectId: string;
        durationMinutes: number;
    }>;
    createStudySession(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        subjectId: string;
        durationMinutes: number;
    }>;
    updateStudySession(id: string, userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        subjectId: string;
        durationMinutes: number;
    }>;
    deleteStudySession(id: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        subjectId: string;
        durationMinutes: number;
    }>;
    getFlashcards(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        source: string | null;
        topicId: string | null;
        front: string;
        back: string;
        difficulty: string;
        nextReview: Date | null;
    }[]>;
    getFlashcardById(id: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        source: string | null;
        topicId: string | null;
        front: string;
        back: string;
        difficulty: string;
        nextReview: Date | null;
    }>;
    createFlashcard(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        source: string | null;
        topicId: string | null;
        front: string;
        back: string;
        difficulty: string;
        nextReview: Date | null;
    }>;
    updateFlashcard(id: string, userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        source: string | null;
        topicId: string | null;
        front: string;
        back: string;
        difficulty: string;
        nextReview: Date | null;
    }>;
    deleteFlashcard(id: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        source: string | null;
        topicId: string | null;
        front: string;
        back: string;
        difficulty: string;
        nextReview: Date | null;
    }>;
    getAssessments(userId: string): Promise<{
        topic: string | null;
        id: string;
        title: string;
        createdAt: Date;
        userId: string;
        date: Date;
        score: number | null;
        totalPoints: number | null;
    }[]>;
    getAssessmentById(id: string, userId: string): Promise<{
        topic: string | null;
        id: string;
        title: string;
        createdAt: Date;
        userId: string;
        date: Date;
        score: number | null;
        totalPoints: number | null;
    }>;
    createAssessment(userId: string, data: any): Promise<{
        topic: string | null;
        id: string;
        title: string;
        createdAt: Date;
        userId: string;
        date: Date;
        score: number | null;
        totalPoints: number | null;
    }>;
    updateAssessment(id: string, userId: string, data: any): Promise<{
        topic: string | null;
        id: string;
        title: string;
        createdAt: Date;
        userId: string;
        date: Date;
        score: number | null;
        totalPoints: number | null;
    }>;
    deleteAssessment(id: string, userId: string): Promise<{
        topic: string | null;
        id: string;
        title: string;
        createdAt: Date;
        userId: string;
        date: Date;
        score: number | null;
        totalPoints: number | null;
    }>;
    getSubjectGraph(id: string, userId: string): Promise<{
        topics: ({
            concepts: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                topicId: string;
                explanation: string | null;
            }[];
        } & {
            id: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            subjectId: string;
            masteryLevel: number;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        notes: string | null;
        courseId: string;
    }>;
}
