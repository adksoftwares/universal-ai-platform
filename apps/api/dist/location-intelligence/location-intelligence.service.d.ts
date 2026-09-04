import { PrismaService } from '../prisma.service.js';
export declare class LocationIntelligenceService {
    private prisma;
    constructor(prisma: PrismaService);
    createGeofenceRule(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        isActive: boolean;
        triggerAction: string;
        triggerCondition: string;
        metadata: string | null;
        placeId: string | null;
    }>;
    getGeofenceRules(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        isActive: boolean;
        triggerAction: string;
        triggerCondition: string;
        metadata: string | null;
        placeId: string | null;
    }[]>;
    getGeofenceRule(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        isActive: boolean;
        triggerAction: string;
        triggerCondition: string;
        metadata: string | null;
        placeId: string | null;
    }>;
    updateGeofenceRule(userId: string, id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        isActive: boolean;
        triggerAction: string;
        triggerCondition: string;
        metadata: string | null;
        placeId: string | null;
    }>;
    deleteGeofenceRule(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        isActive: boolean;
        triggerAction: string;
        triggerCondition: string;
        metadata: string | null;
        placeId: string | null;
    }>;
    planItinerary(destination: string, budget: string | number): Promise<{
        recommendation: string;
        warning: string;
    }>;
}
