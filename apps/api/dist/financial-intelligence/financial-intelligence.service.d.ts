import { PrismaService } from '../prisma.service.js';
import { CreateTransactionRuleDto, UpdateTransactionRuleDto } from './dto/transaction-rule.dto.js';
import { CreateInvestmentAssetDto, UpdateInvestmentAssetDto } from './dto/investment-asset.dto.js';
export declare class FinancialIntelligenceService {
    private prisma;
    constructor(prisma: PrismaService);
    createTransactionRule(userId: string, dto: CreateTransactionRuleDto): Promise<{
        id: string;
        category: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        isActive: boolean;
        merchantPattern: string;
    }>;
    getTransactionRules(userId: string): Promise<{
        id: string;
        category: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        isActive: boolean;
        merchantPattern: string;
    }[]>;
    getTransactionRule(userId: string, id: string): Promise<{
        id: string;
        category: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        isActive: boolean;
        merchantPattern: string;
    } | null>;
    updateTransactionRule(userId: string, id: string, dto: UpdateTransactionRuleDto): Promise<{
        id: string;
        category: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        isActive: boolean;
        merchantPattern: string;
    }>;
    deleteTransactionRule(userId: string, id: string): Promise<{
        id: string;
        category: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        isActive: boolean;
        merchantPattern: string;
    }>;
    createInvestmentAsset(userId: string, dto: CreateInvestmentAssetDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        currency: string;
        currentValue: number | null;
        quantity: number;
        accountId: string | null;
        assetSymbol: string;
        purchasePrice: number;
    }>;
    getInvestmentAssets(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        currency: string;
        currentValue: number | null;
        quantity: number;
        accountId: string | null;
        assetSymbol: string;
        purchasePrice: number;
    }[]>;
    getInvestmentAsset(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        currency: string;
        currentValue: number | null;
        quantity: number;
        accountId: string | null;
        assetSymbol: string;
        purchasePrice: number;
    } | null>;
    updateInvestmentAsset(userId: string, id: string, dto: UpdateInvestmentAssetDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        currency: string;
        currentValue: number | null;
        quantity: number;
        accountId: string | null;
        assetSymbol: string;
        purchasePrice: number;
    }>;
    deleteInvestmentAsset(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        currency: string;
        currentValue: number | null;
        quantity: number;
        accountId: string | null;
        assetSymbol: string;
        purchasePrice: number;
    }>;
    categorizeTransaction(userId: string, description: string): Promise<{
        category: string;
        notes: string;
    }>;
}
