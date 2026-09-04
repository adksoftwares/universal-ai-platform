import { PrismaService } from '../prisma.service.js';
export declare class HealthService {
    private prisma;
    constructor(prisma: PrismaService);
    getHealthProfile(userId: string): import(".prisma/client").Prisma.Prisma__HealthProfileClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        bloodGroup: string | null;
        allergies: string | null;
        conditions: string | null;
        providers: string | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    upsertHealthProfile(userId: string, data: any): import(".prisma/client").Prisma.Prisma__HealthProfileClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        bloodGroup: string | null;
        allergies: string | null;
        conditions: string | null;
        providers: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getMedications(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        notes: string | null;
        dose: string | null;
        schedule: string | null;
    }[]>;
    createMedication(userId: string, data: any): import(".prisma/client").Prisma.Prisma__MedicationClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        notes: string | null;
        dose: string | null;
        schedule: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateMedication(userId: string, id: string, data: any): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    deleteMedication(userId: string, id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    getAppointments(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        status: string;
        provider: string;
        location: string | null;
    }[]>;
    createAppointment(userId: string, data: any): import(".prisma/client").Prisma.Prisma__HealthAppointmentClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        status: string;
        provider: string;
        location: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateAppointment(userId: string, id: string, data: any): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    deleteAppointment(userId: string, id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    getWellnessRecords(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        activity: string | null;
        sleepHours: number | null;
        waterIntake: number | null;
        mood: string | null;
    }[]>;
    createWellnessRecord(userId: string, data: any): import(".prisma/client").Prisma.Prisma__WellnessRecordClient<{
        id: string;
        createdAt: Date;
        userId: string;
        notes: string | null;
        date: Date;
        activity: string | null;
        sleepHours: number | null;
        waterIntake: number | null;
        mood: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateWellnessRecord(userId: string, id: string, data: any): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    deleteWellnessRecord(userId: string, id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
}
