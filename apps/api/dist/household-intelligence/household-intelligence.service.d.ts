import { PrismaService } from '../prisma.service.js';
export declare class HouseholdIntelligenceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    verifyHouseholdMembership(userId: string, householdId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        role: string;
        permissions: string | null;
        householdId: string;
    }>;
    getHouseholds(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        address: string | null;
        country: string | null;
        timeZone: string | null;
    }[]>;
    getHouseholdById(userId: string, householdId: string): Promise<({
        members: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            role: string;
            permissions: string | null;
            householdId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        address: string | null;
        country: string | null;
        timeZone: string | null;
    }) | null>;
    createHousehold(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        address: string | null;
        country: string | null;
        timeZone: string | null;
    }>;
    getChores(userId: string, householdId: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        schedule: string | null;
        householdId: string;
        assignedToId: string | null;
    }[]>;
    createChore(userId: string, householdId: string, data: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        schedule: string | null;
        householdId: string;
        assignedToId: string | null;
    }>;
    getShoppingLists(userId: string, householdId: string): Promise<({
        items: {
            id: string;
            category: string | null;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            quantity: string | null;
            isPurchased: boolean;
            listId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        type: string;
        householdId: string;
    })[]>;
    createShoppingList(userId: string, householdId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        type: string;
        householdId: string;
    }>;
    createShoppingItem(userId: string, listId: string, data: any): Promise<{
        id: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        quantity: string | null;
        isPurchased: boolean;
        listId: string;
    }>;
    getInventory(userId: string, householdId: string): Promise<{
        id: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        notes: string | null;
        location: string | null;
        householdId: string;
        quantity: number;
        purchaseDate: Date | null;
    }[]>;
    createInventoryItem(userId: string, householdId: string, data: any): Promise<{
        id: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        notes: string | null;
        location: string | null;
        householdId: string;
        quantity: number;
        purchaseDate: Date | null;
    }>;
    getMaintenanceRecords(userId: string, householdId: string): Promise<{
        task: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        provider: string | null;
        householdId: string;
        appliance: string;
        lastService: Date | null;
        nextService: Date | null;
    }[]>;
    createMaintenanceRecord(userId: string, householdId: string, data: any): Promise<{
        task: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        provider: string | null;
        householdId: string;
        appliance: string;
        lastService: Date | null;
        nextService: Date | null;
    }>;
    getBriefing(userId: string, householdId: string): Promise<{
        chores: {
            id: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            schedule: string | null;
            householdId: string;
            assignedToId: string | null;
        }[];
        unpurchasedShoppingItems: any[];
    }>;
}
