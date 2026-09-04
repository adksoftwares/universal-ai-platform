import { LearningService } from './learning.service.js';
export declare class LearningController {
    private readonly learningService;
    constructor(learningService: LearningService);
    createGoal(userId: string, data: any): Promise<{
        plans: ({
            stages: {
                id: string;
                title: string;
                description: string | null;
                createdAt: Date;
                updatedAt: Date;
                status: string;
                order: number;
                learningPlanId: string;
            }[];
        } & {
            id: string;
            title: string;
            createdAt: Date;
            updatedAt: Date;
            learningGoalId: string;
        })[];
    } & {
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        targetDate: Date | null;
        currentLevel: string | null;
        desiredLevel: string | null;
        preferredStyle: string | null;
    }>;
    getGoals(userId: string): Promise<({
        plans: ({
            stages: {
                id: string;
                title: string;
                description: string | null;
                createdAt: Date;
                updatedAt: Date;
                status: string;
                order: number;
                learningPlanId: string;
            }[];
        } & {
            id: string;
            title: string;
            createdAt: Date;
            updatedAt: Date;
            learningGoalId: string;
        })[];
    } & {
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        targetDate: Date | null;
        currentLevel: string | null;
        desiredLevel: string | null;
        preferredStyle: string | null;
    })[]>;
    getGoal(userId: string, id: string): Promise<({
        plans: ({
            stages: {
                id: string;
                title: string;
                description: string | null;
                createdAt: Date;
                updatedAt: Date;
                status: string;
                order: number;
                learningPlanId: string;
            }[];
        } & {
            id: string;
            title: string;
            createdAt: Date;
            updatedAt: Date;
            learningGoalId: string;
        })[];
    } & {
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        targetDate: Date | null;
        currentLevel: string | null;
        desiredLevel: string | null;
        preferredStyle: string | null;
    }) | null>;
    updateGoal(userId: string, id: string, data: any): Promise<{
        plans: ({
            stages: {
                id: string;
                title: string;
                description: string | null;
                createdAt: Date;
                updatedAt: Date;
                status: string;
                order: number;
                learningPlanId: string;
            }[];
        } & {
            id: string;
            title: string;
            createdAt: Date;
            updatedAt: Date;
            learningGoalId: string;
        })[];
    } & {
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        targetDate: Date | null;
        currentLevel: string | null;
        desiredLevel: string | null;
        preferredStyle: string | null;
    }>;
    deleteGoal(userId: string, id: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        targetDate: Date | null;
        currentLevel: string | null;
        desiredLevel: string | null;
        preferredStyle: string | null;
    }>;
}
