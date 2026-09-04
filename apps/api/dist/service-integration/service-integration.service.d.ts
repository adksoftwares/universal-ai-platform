import { PrismaService } from '../prisma.service.js';
export declare class ServiceIntegrationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createConnectedService(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        provider: string;
        lastConnection: Date;
    }>;
    getConnectedServices(userId: string): Promise<({
        permissions: {
            id: string;
            createdAt: Date;
            serviceId: string;
            scope: string;
            granted: boolean;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        provider: string;
        lastConnection: Date;
    })[]>;
    deleteConnectedService(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        provider: string;
        lastConnection: Date;
    }>;
    logExternalAction(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        status: string;
        actionType: string;
        service: string;
        details: string | null;
    }>;
    getExternalActions(userId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        status: string;
        actionType: string;
        service: string;
        details: string | null;
    }[]>;
}
