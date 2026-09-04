import { ResearchIntelligenceService } from './research-intelligence.service.js';
export declare class ResearchIntelligenceController {
    private readonly researchIntelligenceService;
    constructor(researchIntelligenceService: ResearchIntelligenceService);
    createLesson(userId: string, data: any): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        courseId: string | null;
        objectives: string | null;
    }>;
    findAllLessons(userId: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        courseId: string | null;
        objectives: string | null;
    }[]>;
    findOneLesson(userId: string, id: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        courseId: string | null;
        objectives: string | null;
    } | null>;
    updateLesson(userId: string, id: string, data: any): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        courseId: string | null;
        objectives: string | null;
    }>;
    removeLesson(userId: string, id: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        courseId: string | null;
        objectives: string | null;
    }>;
    createStudyGroup(userId: string, data: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        subjectId: string | null;
    }>;
    findAllStudyGroups(userId: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        subjectId: string | null;
    }[]>;
    findOneStudyGroup(userId: string, id: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        subjectId: string | null;
    } | null>;
    updateStudyGroup(userId: string, id: string, data: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        subjectId: string | null;
    }>;
    removeStudyGroup(userId: string, id: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        subjectId: string | null;
    }>;
    createResearchPaper(userId: string, data: any): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        url: string | null;
        authors: string | null;
        abstract: string | null;
    }>;
    findAllResearchPapers(userId: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        url: string | null;
        authors: string | null;
        abstract: string | null;
    }[]>;
    findOneResearchPaper(userId: string, id: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        url: string | null;
        authors: string | null;
        abstract: string | null;
    } | null>;
    updateResearchPaper(userId: string, id: string, data: any): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        url: string | null;
        authors: string | null;
        abstract: string | null;
    }>;
    removeResearchPaper(userId: string, id: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        url: string | null;
        authors: string | null;
        abstract: string | null;
    }>;
    createCitation(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        format: string;
        paperId: string;
    }>;
    findAllCitations(userId: string): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        format: string;
        paperId: string;
    }[]>;
    findOneCitation(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        format: string;
        paperId: string;
    } | null>;
    updateCitation(userId: string, id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        format: string;
        paperId: string;
    }>;
    removeCitation(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        format: string;
        paperId: string;
    }>;
    socraticTutor(userId: string, question: string): Promise<{
        tutorResponse: string;
    }>;
}
