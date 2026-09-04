import { AlertService } from './alert.service.js';
export declare class AlertController {
    private readonly alertService;
    constructor(alertService: AlertService);
    getSubscriptions(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        userId: string;
        region: string;
        severity: string;
    }[]>;
    createSubscription(userId: string, data: any): import(".prisma/client").Prisma.Prisma__AlertSubscriptionClient<{
        id: string;
        createdAt: Date;
        userId: string;
        region: string;
        severity: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateSubscription(userId: string, id: string, data: any): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    deleteSubscription(userId: string, id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    getDisasterAlerts(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        description: string;
        createdAt: Date;
        source: string;
        region: string;
        severity: string;
        alertType: string;
        issuedAt: Date;
        expiresAt: Date | null;
        referenceUrl: string | null;
    }[]>;
}
