import { PrismaService } from '../prisma.service.js';
export declare class CareerIntelligenceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getResumes(userId: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        summary: string | null;
    }[]>;
    getResume(userId: string, id: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        summary: string | null;
    }>;
    createResume(userId: string, data: any): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        summary: string | null;
    }>;
    updateResume(userId: string, id: string, data: any): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        summary: string | null;
    }>;
    deleteResume(userId: string, id: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        summary: string | null;
    }>;
    tailorResume(userId: string, resumeId: string, jobDescription: string): Promise<{
        message: string;
        suggestedKeywords: string[];
        improvements: string[];
    }>;
    getPortfolioProjects(userId: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        role: string | null;
        technologies: string | null;
        links: string | null;
    }[]>;
    getPortfolioProject(userId: string, id: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        role: string | null;
        technologies: string | null;
        links: string | null;
    }>;
    createPortfolioProject(userId: string, data: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        role: string | null;
        technologies: string | null;
        links: string | null;
    }>;
    updatePortfolioProject(userId: string, id: string, data: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        role: string | null;
        technologies: string | null;
        links: string | null;
    }>;
    deletePortfolioProject(userId: string, id: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        role: string | null;
        technologies: string | null;
        links: string | null;
    }>;
    getNetworkingRecords(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        organization: string | null;
        lastInteraction: Date | null;
        contactName: string;
        context: string | null;
    }[]>;
    getNetworkingRecord(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        organization: string | null;
        lastInteraction: Date | null;
        contactName: string;
        context: string | null;
    }>;
    createNetworkingRecord(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        organization: string | null;
        lastInteraction: Date | null;
        contactName: string;
        context: string | null;
    }>;
    updateNetworkingRecord(userId: string, id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        organization: string | null;
        lastInteraction: Date | null;
        contactName: string;
        context: string | null;
    }>;
    deleteNetworkingRecord(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        organization: string | null;
        lastInteraction: Date | null;
        contactName: string;
        context: string | null;
    }>;
}
