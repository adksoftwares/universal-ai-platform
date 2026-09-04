import { WorkIntelligenceService } from './work-intelligence.service.js';
export declare class WorkIntelligenceController {
    private readonly workIntelligenceService;
    constructor(workIntelligenceService: WorkIntelligenceService);
    createInterview(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        type: string;
        role: string;
        company: string;
        applicationId: string | null;
        feedback: string | null;
    }>;
    getInterviews(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        type: string;
        role: string;
        company: string;
        applicationId: string | null;
        feedback: string | null;
    }[]>;
    getInterview(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        type: string;
        role: string;
        company: string;
        applicationId: string | null;
        feedback: string | null;
    } | null>;
    updateInterview(userId: string, id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        type: string;
        role: string;
        company: string;
        applicationId: string | null;
        feedback: string | null;
    } | null>;
    deleteInterview(userId: string, id: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    createFreelanceProject(userId: string, data: any): Promise<{
        budget: number | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        deadline: Date | null;
        clientName: string;
        projectName: string;
    }>;
    getFreelanceProjects(userId: string): Promise<({
        proposals: {
            id: string;
            createdAt: Date;
            status: string;
            content: string;
            projectId: string;
        }[];
        deliverables: {
            id: string;
            createdAt: Date;
            name: string;
            status: string;
            url: string | null;
            projectId: string;
        }[];
    } & {
        budget: number | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        deadline: Date | null;
        clientName: string;
        projectName: string;
    })[]>;
    getFreelanceProject(userId: string, id: string): Promise<({
        proposals: {
            id: string;
            createdAt: Date;
            status: string;
            content: string;
            projectId: string;
        }[];
        deliverables: {
            id: string;
            createdAt: Date;
            name: string;
            status: string;
            url: string | null;
            projectId: string;
        }[];
    } & {
        budget: number | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        deadline: Date | null;
        clientName: string;
        projectName: string;
    }) | null>;
    updateFreelanceProject(userId: string, id: string, data: any): Promise<({
        proposals: {
            id: string;
            createdAt: Date;
            status: string;
            content: string;
            projectId: string;
        }[];
        deliverables: {
            id: string;
            createdAt: Date;
            name: string;
            status: string;
            url: string | null;
            projectId: string;
        }[];
    } & {
        budget: number | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        deadline: Date | null;
        clientName: string;
        projectName: string;
    }) | null>;
    deleteFreelanceProject(userId: string, id: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    createBusiness(userId: string, data: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        industry: string | null;
        website: string | null;
    }>;
    getBusinesses(userId: string): Promise<({
        projects: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            status: string;
            deadline: Date | null;
            businessId: string;
        }[];
        products: {
            id: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            currency: string | null;
            businessId: string;
            price: number | null;
        }[];
    } & {
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        industry: string | null;
        website: string | null;
    })[]>;
    getBusiness(userId: string, id: string): Promise<({
        projects: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            status: string;
            deadline: Date | null;
            businessId: string;
        }[];
        products: {
            id: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            currency: string | null;
            businessId: string;
            price: number | null;
        }[];
    } & {
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        industry: string | null;
        website: string | null;
    }) | null>;
    updateBusiness(userId: string, id: string, data: any): Promise<({
        projects: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            status: string;
            deadline: Date | null;
            businessId: string;
        }[];
        products: {
            id: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            currency: string | null;
            businessId: string;
            price: number | null;
        }[];
    } & {
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        industry: string | null;
        website: string | null;
    }) | null>;
    deleteBusiness(userId: string, id: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    generateResumeMatch(userId: string, body: {
        resumeId: string;
        jobId: string;
    }): Promise<{
        strongMatches: string[];
        partialMatches: string[];
        missingRequirements: string[];
        suggestedImprovements: string[];
    }>;
}
