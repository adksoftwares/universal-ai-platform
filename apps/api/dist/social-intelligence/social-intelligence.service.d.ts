import { PrismaService } from '../prisma.service.js';
export declare class SocialIntelligenceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createGroup(userId: string, data: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        type: string;
    }>;
    getGroups(userId: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        type: string;
    }[]>;
    updateGroup(userId: string, id: string, data: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteGroup(userId: string, id: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    createEvent(userId: string, data: any): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        date: Date;
        location: string | null;
        isPrivate: boolean;
        groupId: string | null;
    }>;
    getEvents(userId: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        date: Date;
        location: string | null;
        isPrivate: boolean;
        groupId: string | null;
    }[]>;
    updateEvent(userId: string, id: string, data: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteEvent(userId: string, id: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    createGiftPlan(userId: string, data: any): Promise<{
        budget: number | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        recipient: string;
        occasion: string | null;
        ideas: string | null;
    }>;
    getGiftPlans(userId: string): Promise<{
        budget: number | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        recipient: string;
        occasion: string | null;
        ideas: string | null;
    }[]>;
    updateGiftPlan(userId: string, id: string, data: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteGiftPlan(userId: string, id: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    createSafetyPlan(userId: string, data: any): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        meetingPoint: string | null;
        instructions: string | null;
    }>;
    getSafetyPlans(userId: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        meetingPoint: string | null;
        instructions: string | null;
    }[]>;
    updateSafetyPlan(userId: string, id: string, data: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteSafetyPlan(userId: string, id: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    createLocationShare(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        expiresAt: Date | null;
        isActive: boolean;
        targetPerson: string;
    }>;
    getLocationShares(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        expiresAt: Date | null;
        isActive: boolean;
        targetPerson: string;
    }[]>;
    updateLocationShare(userId: string, id: string, data: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteLocationShare(userId: string, id: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    suggestPlanning(userId: string, eventDetails: any): Promise<{
        suggestion: string;
    }>;
}
