var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
let FinancialIntelligenceService = class FinancialIntelligenceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createTransactionRule(userId, dto) {
        return this.prisma.transactionRule.create({
            data: { ...dto, userId },
        });
    }
    async getTransactionRules(userId) {
        return this.prisma.transactionRule.findMany({ where: { userId } });
    }
    async getTransactionRule(userId, id) {
        return this.prisma.transactionRule.findFirst({ where: { userId, id } });
    }
    async updateTransactionRule(userId, id, dto) {
        const rule = await this.prisma.transactionRule.findFirst({ where: { userId, id } });
        if (!rule)
            throw new Error('Rule not found');
        return this.prisma.transactionRule.update({
            where: { id },
            data: dto,
        });
    }
    async deleteTransactionRule(userId, id) {
        const rule = await this.prisma.transactionRule.findFirst({ where: { userId, id } });
        if (!rule)
            throw new Error('Rule not found');
        return this.prisma.transactionRule.delete({ where: { id } });
    }
    async createInvestmentAsset(userId, dto) {
        return this.prisma.investmentAsset.create({
            data: { ...dto, userId },
        });
    }
    async getInvestmentAssets(userId) {
        return this.prisma.investmentAsset.findMany({ where: { userId } });
    }
    async getInvestmentAsset(userId, id) {
        return this.prisma.investmentAsset.findFirst({ where: { userId, id } });
    }
    async updateInvestmentAsset(userId, id, dto) {
        const asset = await this.prisma.investmentAsset.findFirst({ where: { userId, id } });
        if (!asset)
            throw new Error('Asset not found');
        return this.prisma.investmentAsset.update({
            where: { id },
            data: dto,
        });
    }
    async deleteInvestmentAsset(userId, id) {
        const asset = await this.prisma.investmentAsset.findFirst({ where: { userId, id } });
        if (!asset)
            throw new Error('Asset not found');
        return this.prisma.investmentAsset.delete({ where: { id } });
    }
    async categorizeTransaction(userId, description) {
        return {
            category: 'Mocked AI Category',
            notes: `AI categorized "${description}". Note: AI never transfers money or cancels subscriptions automatically.`
        };
    }
};
FinancialIntelligenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], FinancialIntelligenceService);
export { FinancialIntelligenceService };
//# sourceMappingURL=financial-intelligence.service.js.map