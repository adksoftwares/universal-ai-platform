import { LifeIntelligenceService } from './life-intelligence.service.js';
export declare class LifeIntelligenceController {
    private readonly service;
    constructor(service: LifeIntelligenceService);
    getAssistantPlan(userId: string, body: {
        goal: string;
    }): Promise<{
        plan: string;
    }>;
    getRoutines(userId: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        isActive: boolean;
    }[]>;
    createRoutine(userId: string, data: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        isActive: boolean;
    }>;
    updateRoutine(userId: string, id: string, data: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        isActive: boolean;
    }>;
    deleteRoutine(userId: string, id: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        isActive: boolean;
    }>;
    getRecipes(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        instructions: string;
        ingredients: string;
        prepTimeMinutes: number | null;
    }[]>;
    createRecipe(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        instructions: string;
        ingredients: string;
        prepTimeMinutes: number | null;
    }>;
    updateRecipe(userId: string, id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        instructions: string;
        ingredients: string;
        prepTimeMinutes: number | null;
    }>;
    deleteRecipe(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        instructions: string;
        ingredients: string;
        prepTimeMinutes: number | null;
    }>;
    getMealPlans(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        mealType: string;
        householdId: string;
        recipeId: string | null;
    }[]>;
    createMealPlan(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        mealType: string;
        householdId: string;
        recipeId: string | null;
    }>;
    updateMealPlan(userId: string, id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        mealType: string;
        householdId: string;
        recipeId: string | null;
    }>;
    deleteMealPlan(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        mealType: string;
        householdId: string;
        recipeId: string | null;
    }>;
    getSmartDevices(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        status: string;
        type: string;
        householdId: string;
    }[]>;
    createSmartDevice(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        status: string;
        type: string;
        householdId: string;
    }>;
    updateSmartDevice(userId: string, id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        status: string;
        type: string;
        householdId: string;
    }>;
    deleteSmartDevice(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        status: string;
        type: string;
        householdId: string;
    }>;
    getWarranties(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        provider: string | null;
        expiryDate: Date | null;
        purchaseDate: Date | null;
        product: string;
    }[]>;
    createWarranty(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        provider: string | null;
        expiryDate: Date | null;
        purchaseDate: Date | null;
        product: string;
    }>;
    updateWarranty(userId: string, id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        provider: string | null;
        expiryDate: Date | null;
        purchaseDate: Date | null;
        product: string;
    }>;
    deleteWarranty(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        provider: string | null;
        expiryDate: Date | null;
        purchaseDate: Date | null;
        product: string;
    }>;
}
