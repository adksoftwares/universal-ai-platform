import { MobilityIntelligenceService } from './mobility-intelligence.service.js';
export declare class MobilityIntelligenceController {
    private readonly mobilityIntelligenceService;
    constructor(mobilityIntelligenceService: MobilityIntelligenceService);
    createVehicle(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        notes: string | null;
        type: string;
        isShared: boolean;
        make: string | null;
        model: string | null;
        year: number | null;
        licensePlate: string | null;
    }>;
    getVehicles(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        notes: string | null;
        type: string;
        isShared: boolean;
        make: string | null;
        model: string | null;
        year: number | null;
        licensePlate: string | null;
    }[]>;
    getVehicle(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        notes: string | null;
        type: string;
        isShared: boolean;
        make: string | null;
        model: string | null;
        year: number | null;
        licensePlate: string | null;
    }>;
    updateVehicle(userId: string, id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        notes: string | null;
        type: string;
        isShared: boolean;
        make: string | null;
        model: string | null;
        year: number | null;
        licensePlate: string | null;
    }>;
    deleteVehicle(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        notes: string | null;
        type: string;
        isShared: boolean;
        make: string | null;
        model: string | null;
        year: number | null;
        licensePlate: string | null;
    }>;
    createCommuteProfile(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        destination: string | null;
        origin: string | null;
        transportMode: string | null;
        departureTime: string | null;
        arrivalTarget: string | null;
        days: string | null;
    }>;
    getCommuteProfiles(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        destination: string | null;
        origin: string | null;
        transportMode: string | null;
        departureTime: string | null;
        arrivalTarget: string | null;
        days: string | null;
    }[]>;
    getCommuteProfile(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        destination: string | null;
        origin: string | null;
        transportMode: string | null;
        departureTime: string | null;
        arrivalTarget: string | null;
        days: string | null;
    }>;
    updateCommuteProfile(userId: string, id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        destination: string | null;
        origin: string | null;
        transportMode: string | null;
        departureTime: string | null;
        arrivalTarget: string | null;
        days: string | null;
    }>;
    deleteCommuteProfile(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        destination: string | null;
        origin: string | null;
        transportMode: string | null;
        departureTime: string | null;
        arrivalTarget: string | null;
        days: string | null;
    }>;
    searchRoutes(userId: string, query: any): Promise<{
        origin: any;
        destination: any;
        options: ({
            mode: string;
            duration: string;
            distance: string;
            ecoFriendly: boolean;
            details?: undefined;
        } | {
            mode: string;
            duration: string;
            distance: string;
            ecoFriendly: boolean;
            details: string;
        })[];
    }>;
}
