import { FinancialIntelligenceService } from './financial-intelligence.service.js';
import { CreateTransactionRuleDto, UpdateTransactionRuleDto } from './dto/transaction-rule.dto.js';
import { CreateInvestmentAssetDto, UpdateInvestmentAssetDto } from './dto/investment-asset.dto.js';
export declare class FinancialIntelligenceController {
    private readonly financialIntelligenceService;
    constructor(financialIntelligenceService: FinancialIntelligenceService);
    createRule(userId: string, dto: CreateTransactionRuleDto): Promise<{
        id: string;
        category: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        isActive: boolean;
        merchantPattern: string;
    }>;
    getRules(userId: string): Promise<{
        id: string;
        category: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        isActive: boolean;
        merchantPattern: string;
    }[]>;
    getRule(userId: string, id: string): Promise<{
        id: string;
        category: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        isActive: boolean;
        merchantPattern: string;
    } | null>;
    updateRule(userId: string, id: string, dto: UpdateTransactionRuleDto): Promise<{
        id: string;
        category: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        isActive: boolean;
        merchantPattern: string;
    }>;
    deleteRule(userId: string, id: string): Promise<{
        id: string;
        category: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        isActive: boolean;
        merchantPattern: string;
    }>;
    createAsset(userId: string, dto: CreateInvestmentAssetDto): Promise<{
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
    getAssets(userId: string): Promise<{
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
    getAsset(userId: string, id: string): Promise<{
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
    updateAsset(userId: string, id: string, dto: UpdateInvestmentAssetDto): Promise<{
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
    deleteAsset(userId: string, id: string): Promise<{
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
