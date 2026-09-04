import { LocationIntelligenceService } from './location-intelligence.service.js';
export declare class LocationIntelligenceController {
    private readonly locationIntelligenceService;
    constructor(locationIntelligenceService: LocationIntelligenceService);
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
    planItinerary(payload: {
        destination: string;
        budget: string | number;
    }): Promise<{
        recommendation: string;
        warning: string;
    }>;
}
