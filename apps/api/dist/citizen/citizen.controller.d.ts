import { CitizenService } from './citizen.service.js';
export declare class CitizenController {
    private readonly citizenService;
    constructor(citizenService: CitizenService);
    getServices(): Promise<({
        jurisdiction: {
            id: string;
            createdAt: Date;
            region: string | null;
            country: string;
            countryCode: string;
            level: string;
        };
        sources: {
            id: string;
            createdAt: Date;
            status: string;
            url: string;
            serviceId: string;
            lastVerified: Date;
        }[];
        requirements: {
            id: string;
            description: string;
            createdAt: Date;
            type: string;
            serviceId: string;
            isMandatory: boolean;
        }[];
    } & {
        id: string;
        description: string;
        category: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        jurisdictionId: string;
        authority: string;
        eligibility: string | null;
        processingTime: string | null;
        fees: string | null;
    })[]>;
    verifySource(sourceId: string): Promise<{
        id: string;
        createdAt: Date;
        status: string;
        url: string;
        serviceId: string;
        lastVerified: Date;
    }>;
    getBookmarks(userId: string): Promise<({
        service: {
            id: string;
            description: string;
            category: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            jurisdictionId: string;
            authority: string;
            eligibility: string | null;
            processingTime: string | null;
            fees: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        serviceId: string;
    })[]>;
    addBookmark(userId: string, body: any): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        serviceId: string;
    }>;
    removeBookmark(userId: string, id: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getApplications(userId: string): Promise<({
        service: {
            id: string;
            description: string;
            category: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            jurisdictionId: string;
            authority: string;
            eligibility: string | null;
            processingTime: string | null;
            fees: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        serviceId: string;
        referenceNumber: string | null;
        submittedAt: Date | null;
    })[]>;
    createApplication(userId: string, body: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        serviceId: string;
        referenceNumber: string | null;
        submittedAt: Date | null;
    }>;
    updateApplication(userId: string, id: string, body: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    removeApplication(userId: string, id: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
