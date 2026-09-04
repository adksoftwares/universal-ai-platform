import { PrismaService } from '../prisma.service.js';
export declare class EmergencyService {
    private prisma;
    constructor(prisma: PrismaService);
    getProfile(userId: string): import(".prisma/client").Prisma.Prisma__EmergencyProfileClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        enabled: boolean;
        visibleFields: string | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    upsertProfile(userId: string, data: any): import(".prisma/client").Prisma.Prisma__EmergencyProfileClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        enabled: boolean;
        visibleFields: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getContacts(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        priority: number;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        relationship: string | null;
        phone: string;
        email: string | null;
    }[]>;
    createContact(userId: string, data: any): import(".prisma/client").Prisma.Prisma__EmergencyContactClient<{
        id: string;
        priority: number;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        relationship: string | null;
        phone: string;
        email: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateContact(userId: string, id: string, data: any): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    deleteContact(userId: string, id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    getPlans(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        hazardType: string;
        meetingPoint: string | null;
        supplies: string | null;
        evacuationInfo: string | null;
    }[]>;
    createPlan(userId: string, data: any): import(".prisma/client").Prisma.Prisma__EmergencyPlanClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        hazardType: string;
        meetingPoint: string | null;
        supplies: string | null;
        evacuationInfo: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updatePlan(userId: string, id: string, data: any): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    deletePlan(userId: string, id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    getSafetyCheckIns(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        scheduledTime: Date;
        escalationPlan: string | null;
    }[]>;
    createSafetyCheckIn(userId: string, data: any): import(".prisma/client").Prisma.Prisma__SafetyCheckInClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        scheduledTime: Date;
        escalationPlan: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateSafetyCheckIn(userId: string, id: string, data: any): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    deleteSafetyCheckIn(userId: string, id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
}
