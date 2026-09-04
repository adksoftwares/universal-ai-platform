import { CareerService } from './career.service.js';
export declare class CareerController {
    private readonly careerService;
    constructor(careerService: CareerService);
    getProfile(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        education: string | null;
        experience: string | null;
        certifications: string | null;
        careerGoals: string | null;
    } | null>;
    updateProfile(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        education: string | null;
        experience: string | null;
        certifications: string | null;
        careerGoals: string | null;
    }>;
    createSkill(userId: string, data: any): Promise<{
        id: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        currentLevel: string;
        targetLevel: string | null;
    }>;
    getSkills(userId: string): Promise<{
        id: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        currentLevel: string;
        targetLevel: string | null;
    }[]>;
    updateSkill(userId: string, id: string, data: any): Promise<{
        id: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        currentLevel: string;
        targetLevel: string | null;
    }>;
    deleteSkill(userId: string, id: string): Promise<{
        id: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        currentLevel: string;
        targetLevel: string | null;
    }>;
    createProject(userId: string, data: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        skillsUsed: string | null;
        role: string | null;
        outcomes: string | null;
        url: string | null;
    }>;
    getProjects(userId: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        skillsUsed: string | null;
        role: string | null;
        outcomes: string | null;
        url: string | null;
    }[]>;
    updateProject(userId: string, id: string, data: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        skillsUsed: string | null;
        role: string | null;
        outcomes: string | null;
        url: string | null;
    }>;
    deleteProject(userId: string, id: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        skillsUsed: string | null;
        role: string | null;
        outcomes: string | null;
        url: string | null;
    }>;
}
