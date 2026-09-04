import { PrismaService } from '../prisma.service.js';
export declare class TravelService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createTrip(userId: string, data: any): Promise<{
        budget: number | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        notes: string | null;
        currency: string;
        destination: string;
        startDate: Date;
        endDate: Date;
        travelers: number;
    }>;
    getTrips(userId: string): Promise<({
        itinerary: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            notes: string | null;
            date: Date;
            time: string | null;
            tripId: string;
            activity: string;
            location: string | null;
            estimatedCost: number | null;
        }[];
        checklists: {
            id: string;
            isCompleted: boolean;
            category: string | null;
            createdAt: Date;
            updatedAt: Date;
            tripId: string;
            item: string;
        }[];
    } & {
        budget: number | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        notes: string | null;
        currency: string;
        destination: string;
        startDate: Date;
        endDate: Date;
        travelers: number;
    })[]>;
    getTrip(userId: string, tripId: string): Promise<({
        itinerary: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            notes: string | null;
            date: Date;
            time: string | null;
            tripId: string;
            activity: string;
            location: string | null;
            estimatedCost: number | null;
        }[];
        checklists: {
            id: string;
            isCompleted: boolean;
            category: string | null;
            createdAt: Date;
            updatedAt: Date;
            tripId: string;
            item: string;
        }[];
    } & {
        budget: number | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        notes: string | null;
        currency: string;
        destination: string;
        startDate: Date;
        endDate: Date;
        travelers: number;
    }) | null>;
    updateTrip(userId: string, tripId: string, data: any): Promise<{
        budget: number | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        notes: string | null;
        currency: string;
        destination: string;
        startDate: Date;
        endDate: Date;
        travelers: number;
    }>;
    deleteTrip(userId: string, tripId: string): Promise<{
        budget: number | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        notes: string | null;
        currency: string;
        destination: string;
        startDate: Date;
        endDate: Date;
        travelers: number;
    }>;
}
