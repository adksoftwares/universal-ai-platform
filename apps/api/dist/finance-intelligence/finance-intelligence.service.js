var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
let FinanceIntelligenceService = class FinanceIntelligenceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getCashFlow(userId) {
        return {
            projectedIncome: 5000,
            projectedExpenses: 3000,
            netCashFlow: 2000,
            currency: "USD",
            period: "current_month",
            breakdown: {
                subscriptions: 100,
                loanPayments: 400,
                otherExpenses: 2500,
            }
        };
    }
    async createAccount(userId, data) {
        return this.prisma.financialAccount.create({
            data: {
                ...data,
                userId,
            },
        });
    }
    async getAccounts(userId) {
        return this.prisma.financialAccount.findMany({
            where: { userId },
            include: { transactions: true },
        });
    }
    async getAccount(userId, id) {
        const account = await this.prisma.financialAccount.findFirst({
            where: { id, userId },
            include: { transactions: true },
        });
        if (!account)
            throw new NotFoundException('Account not found');
        return account;
    }
    async updateAccount(userId, id, data) {
        const account = await this.prisma.financialAccount.findFirst({ where: { id, userId } });
        if (!account)
            throw new NotFoundException('Account not found');
        return this.prisma.financialAccount.update({
            where: { id },
            data,
        });
    }
    async deleteAccount(userId, id) {
        const account = await this.prisma.financialAccount.findFirst({ where: { id, userId } });
        if (!account)
            throw new NotFoundException('Account not found');
        return this.prisma.financialAccount.delete({
            where: { id },
        });
    }
    async createSubscription(userId, data) {
        return this.prisma.subscription.create({
            data: {
                ...data,
                userId,
            },
        });
    }
    async getSubscriptions(userId) {
        return this.prisma.subscription.findMany({
            where: { userId },
        });
    }
    async getSubscription(userId, id) {
        const subscription = await this.prisma.subscription.findFirst({
            where: { id, userId },
        });
        if (!subscription)
            throw new NotFoundException('Subscription not found');
        return subscription;
    }
    async updateSubscription(userId, id, data) {
        const subscription = await this.prisma.subscription.findFirst({ where: { id, userId } });
        if (!subscription)
            throw new NotFoundException('Subscription not found');
        return this.prisma.subscription.update({
            where: { id },
            data,
        });
    }
    async deleteSubscription(userId, id) {
        const subscription = await this.prisma.subscription.findFirst({ where: { id, userId } });
        if (!subscription)
            throw new NotFoundException('Subscription not found');
        return this.prisma.subscription.delete({
            where: { id },
        });
    }
    async createLoan(userId, data) {
        return this.prisma.loan.create({
            data: {
                ...data,
                userId,
            },
        });
    }
    async getLoans(userId) {
        return this.prisma.loan.findMany({
            where: { userId },
        });
    }
    async getLoan(userId, id) {
        const loan = await this.prisma.loan.findFirst({
            where: { id, userId },
        });
        if (!loan)
            throw new NotFoundException('Loan not found');
        return loan;
    }
    async updateLoan(userId, id, data) {
        const loan = await this.prisma.loan.findFirst({ where: { id, userId } });
        if (!loan)
            throw new NotFoundException('Loan not found');
        return this.prisma.loan.update({
            where: { id },
            data,
        });
    }
    async deleteLoan(userId, id) {
        const loan = await this.prisma.loan.findFirst({ where: { id, userId } });
        if (!loan)
            throw new NotFoundException('Loan not found');
        return this.prisma.loan.delete({
            where: { id },
        });
    }
    async createAsset(userId, data) {
        return this.prisma.asset.create({
            data: {
                ...data,
                userId,
            },
        });
    }
    async getAssets(userId) {
        return this.prisma.asset.findMany({
            where: { userId },
        });
    }
    async getAsset(userId, id) {
        const asset = await this.prisma.asset.findFirst({
            where: { id, userId },
        });
        if (!asset)
            throw new NotFoundException('Asset not found');
        return asset;
    }
    async updateAsset(userId, id, data) {
        const asset = await this.prisma.asset.findFirst({ where: { id, userId } });
        if (!asset)
            throw new NotFoundException('Asset not found');
        return this.prisma.asset.update({
            where: { id },
            data,
        });
    }
    async deleteAsset(userId, id) {
        const asset = await this.prisma.asset.findFirst({ where: { id, userId } });
        if (!asset)
            throw new NotFoundException('Asset not found');
        return this.prisma.asset.delete({
            where: { id },
        });
    }
    async createNetWorthSnapshot(userId) {
        const assets = await this.prisma.asset.findMany({ where: { userId } });
        const loans = await this.prisma.loan.findMany({ where: { userId } });
        const totalAssets = assets.reduce((sum, asset) => sum + (asset.currentValue || 0), 0);
        const totalLiabilities = loans.reduce((sum, loan) => sum + (loan.remainingBalance || 0), 0);
        const netWorth = totalAssets - totalLiabilities;
        return this.prisma.netWorthSnapshot.create({
            data: {
                userId,
                totalAssets,
                totalLiabilities,
                netWorth,
                currency: assets.length > 0 ? assets[0].currency : 'USD',
            },
        });
    }
};
FinanceIntelligenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], FinanceIntelligenceService);
export { FinanceIntelligenceService };
//# sourceMappingURL=finance-intelligence.service.js.map