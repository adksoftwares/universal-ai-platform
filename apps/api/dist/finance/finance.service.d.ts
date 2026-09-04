import { PrismaService } from '../prisma.service.js';
export declare class FinanceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createExpense(userId: string, data: any): Promise<{
        id: string;
        description: string | null;
        category: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        date: Date;
        amount: number;
        currency: string;
        paymentMethod: string | null;
        note: string | null;
    }>;
    getExpenses(userId: string): Promise<{
        id: string;
        description: string | null;
        category: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        date: Date;
        amount: number;
        currency: string;
        paymentMethod: string | null;
        note: string | null;
    }[]>;
    getExpensesSumByCategory(userId: string): Promise<{
        category: string;
        total: number;
    }[]>;
    createBudget(userId: string, data: any): Promise<{
        id: string;
        category: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        amount: number;
        currency: string;
        period: string;
    }>;
    getBudgets(userId: string): Promise<{
        id: string;
        category: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        amount: number;
        currency: string;
        period: string;
    }[]>;
    createBill(userId: string, data: any): Promise<{
        id: string;
        dueDate: Date;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        status: string;
        frequency: string;
        amount: number;
        currency: string;
    }>;
    getBills(userId: string): Promise<{
        id: string;
        dueDate: Date;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        status: string;
        frequency: string;
        amount: number;
        currency: string;
    }[]>;
    createSavingsGoal(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        targetDate: Date | null;
        currency: string;
        targetAmount: number;
        currentAmount: number;
    }>;
    getSavingsGoals(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        targetDate: Date | null;
        currency: string;
        targetAmount: number;
        currentAmount: number;
    }[]>;
}
