import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class FinanceIntelligenceService {
  constructor(private prisma: PrismaService) {}

  async getCashFlow(userId: string) {
    // Return a mock hardcoded projection explicitly formatted for these DB models
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

  // Account methods
  async createAccount(userId: string, data: any) {
    return this.prisma.financialAccount.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  async getAccounts(userId: string) {
    return this.prisma.financialAccount.findMany({
      where: { userId },
      include: { transactions: true },
    });
  }

  async getAccount(userId: string, id: string) {
    const account = await this.prisma.financialAccount.findFirst({
      where: { id, userId },
      include: { transactions: true },
    });
    if (!account) throw new NotFoundException('Account not found');
    return account;
  }

  async updateAccount(userId: string, id: string, data: any) {
    const account = await this.prisma.financialAccount.findFirst({ where: { id, userId } });
    if (!account) throw new NotFoundException('Account not found');
    return this.prisma.financialAccount.update({
      where: { id },
      data,
    });
  }

  async deleteAccount(userId: string, id: string) {
    const account = await this.prisma.financialAccount.findFirst({ where: { id, userId } });
    if (!account) throw new NotFoundException('Account not found');
    return this.prisma.financialAccount.delete({
      where: { id },
    });
  }

  // Subscription methods
  async createSubscription(userId: string, data: any) {
    return this.prisma.subscription.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  async getSubscriptions(userId: string) {
    return this.prisma.subscription.findMany({
      where: { userId },
    });
  }

  async getSubscription(userId: string, id: string) {
    const subscription = await this.prisma.subscription.findFirst({
      where: { id, userId },
    });
    if (!subscription) throw new NotFoundException('Subscription not found');
    return subscription;
  }

  async updateSubscription(userId: string, id: string, data: any) {
    const subscription = await this.prisma.subscription.findFirst({ where: { id, userId } });
    if (!subscription) throw new NotFoundException('Subscription not found');
    return this.prisma.subscription.update({
      where: { id },
      data,
    });
  }

  async deleteSubscription(userId: string, id: string) {
    const subscription = await this.prisma.subscription.findFirst({ where: { id, userId } });
    if (!subscription) throw new NotFoundException('Subscription not found');
    return this.prisma.subscription.delete({
      where: { id },
    });
  }

  // Loan methods
  async createLoan(userId: string, data: any) {
    return this.prisma.loan.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  async getLoans(userId: string) {
    return this.prisma.loan.findMany({
      where: { userId },
    });
  }

  async getLoan(userId: string, id: string) {
    const loan = await this.prisma.loan.findFirst({
      where: { id, userId },
    });
    if (!loan) throw new NotFoundException('Loan not found');
    return loan;
  }

  async updateLoan(userId: string, id: string, data: any) {
    const loan = await this.prisma.loan.findFirst({ where: { id, userId } });
    if (!loan) throw new NotFoundException('Loan not found');
    return this.prisma.loan.update({
      where: { id },
      data,
    });
  }

  async deleteLoan(userId: string, id: string) {
    const loan = await this.prisma.loan.findFirst({ where: { id, userId } });
    if (!loan) throw new NotFoundException('Loan not found');
    return this.prisma.loan.delete({
      where: { id },
    });
  }

  // Asset methods
  async createAsset(userId: string, data: any) {
    return this.prisma.asset.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  async getAssets(userId: string) {
    return this.prisma.asset.findMany({
      where: { userId },
    });
  }

  async getAsset(userId: string, id: string) {
    const asset = await this.prisma.asset.findFirst({
      where: { id, userId },
    });
    if (!asset) throw new NotFoundException('Asset not found');
    return asset;
  }

  async updateAsset(userId: string, id: string, data: any) {
    const asset = await this.prisma.asset.findFirst({ where: { id, userId } });
    if (!asset) throw new NotFoundException('Asset not found');
    return this.prisma.asset.update({
      where: { id },
      data,
    });
  }

  async deleteAsset(userId: string, id: string) {
    const asset = await this.prisma.asset.findFirst({ where: { id, userId } });
    if (!asset) throw new NotFoundException('Asset not found');
    return this.prisma.asset.delete({
      where: { id },
    });
  }

  // Net Worth Snapshot
  async createNetWorthSnapshot(userId: string) {
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
}
