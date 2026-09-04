import { CivicIntelligenceService } from './civic-intelligence.service.js';
export declare class CivicIntelligenceController {
    private readonly civicIntelligenceService;
    constructor(civicIntelligenceService: CivicIntelligenceService);
    createApplication(userId: string, body: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        authority: string;
        referenceNumber: string | null;
        appliedAt: Date | null;
        serviceName: string;
    }>;
    getApplications(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        authority: string;
        referenceNumber: string | null;
        appliedAt: Date | null;
        serviceName: string;
    }[]>;
    updateApplication(userId: string, id: string, body: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        authority: string;
        referenceNumber: string | null;
        appliedAt: Date | null;
        serviceName: string;
    }>;
    deleteApplication(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        authority: string;
        referenceNumber: string | null;
        appliedAt: Date | null;
        serviceName: string;
    }>;
    createLicencePermit(userId: string, body: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        authority: string;
        referenceNumber: string | null;
        expiryDate: Date | null;
        issueDate: Date | null;
    }>;
    getLicencePermits(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        authority: string;
        referenceNumber: string | null;
        expiryDate: Date | null;
        issueDate: Date | null;
    }[]>;
    updateLicencePermit(userId: string, id: string, body: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        authority: string;
        referenceNumber: string | null;
        expiryDate: Date | null;
        issueDate: Date | null;
    }>;
    deleteLicencePermit(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        authority: string;
        referenceNumber: string | null;
        expiryDate: Date | null;
        issueDate: Date | null;
    }>;
    createComplaint(userId: string, body: any): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        authority: string;
        referenceNumber: string | null;
    }>;
    getComplaints(userId: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        authority: string;
        referenceNumber: string | null;
    }[]>;
    updateComplaint(userId: string, id: string, body: any): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        authority: string;
        referenceNumber: string | null;
    }>;
    deleteComplaint(userId: string, id: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        authority: string;
        referenceNumber: string | null;
    }>;
    explainService(userId: string, serviceName: string): Promise<{
        serviceName: string;
        officialAuthority: string;
        necessaryDocuments: string[];
        explanation: string;
        disclaimer: string;
    }>;
}
