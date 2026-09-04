import { LearningIntelligenceService } from './learning-intelligence.service.js';
export declare class LearningIntelligenceController {
    private readonly learningIntelligenceService;
    constructor(learningIntelligenceService: LearningIntelligenceService);
    private getUserId;
    getTopics(headers: Record<string, string>): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        subjectId: string;
        masteryLevel: number;
    }[]>;
    getTopicById(id: string, headers: Record<string, string>): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        subjectId: string;
        masteryLevel: number;
    }>;
    createTopic(headers: Record<string, string>, data: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        subjectId: string;
        masteryLevel: number;
    }>;
    updateTopic(id: string, headers: Record<string, string>, data: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        subjectId: string;
        masteryLevel: number;
    }>;
    deleteTopic(id: string, headers: Record<string, string>): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        subjectId: string;
        masteryLevel: number;
    }>;
    getStudySessions(headers: Record<string, string>): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        subjectId: string;
        durationMinutes: number;
    }[]>;
    getStudySessionById(id: string, headers: Record<string, string>): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        subjectId: string;
        durationMinutes: number;
    }>;
    createStudySession(headers: Record<string, string>, data: any): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        subjectId: string;
        durationMinutes: number;
    }>;
    updateStudySession(id: string, headers: Record<string, string>, data: any): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        subjectId: string;
        durationMinutes: number;
    }>;
    deleteStudySession(id: string, headers: Record<string, string>): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        subjectId: string;
        durationMinutes: number;
    }>;
    getFlashcards(headers: Record<string, string>): Promise<{
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
    getFlashcardById(id: string, headers: Record<string, string>): Promise<{
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
    createFlashcard(headers: Record<string, string>, data: any): Promise<{
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
    updateFlashcard(id: string, headers: Record<string, string>, data: any): Promise<{
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
    deleteFlashcard(id: string, headers: Record<string, string>): Promise<{
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
    getAssessments(headers: Record<string, string>): Promise<{
        topic: string | null;
        id: string;
        title: string;
        createdAt: Date;
        userId: string;
        date: Date;
        score: number | null;
        totalPoints: number | null;
    }[]>;
    getAssessmentById(id: string, headers: Record<string, string>): Promise<{
        topic: string | null;
        id: string;
        title: string;
        createdAt: Date;
        userId: string;
        date: Date;
        score: number | null;
        totalPoints: number | null;
    }>;
    createAssessment(headers: Record<string, string>, data: any): Promise<{
        topic: string | null;
        id: string;
        title: string;
        createdAt: Date;
        userId: string;
        date: Date;
        score: number | null;
        totalPoints: number | null;
    }>;
    updateAssessment(id: string, headers: Record<string, string>, data: any): Promise<{
        topic: string | null;
        id: string;
        title: string;
        createdAt: Date;
        userId: string;
        date: Date;
        score: number | null;
        totalPoints: number | null;
    }>;
    deleteAssessment(id: string, headers: Record<string, string>): Promise<{
        topic: string | null;
        id: string;
        title: string;
        createdAt: Date;
        userId: string;
        date: Date;
        score: number | null;
        totalPoints: number | null;
    }>;
    getSubjectGraph(id: string, headers: Record<string, string>): Promise<{
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
