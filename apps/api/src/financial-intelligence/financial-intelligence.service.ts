import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { CreateTransactionRuleDto, UpdateTransactionRuleDto } from './dto/transaction-rule.dto.js';
import { CreateInvestmentAssetDto, UpdateInvestmentAssetDto } from './dto/investment-asset.dto.js';

@Injectable()
export class FinancialIntelligenceService {
  constructor(private prisma: PrismaService) {}

  async createTransactionRule(userId: string, dto: CreateTransactionRuleDto) {
    return this.prisma.transactionRule.create({
      data: { ...dto, userId },
    });
  }

  async getTransactionRules(userId: string) {
    return this.prisma.transactionRule.findMany({ where: { userId } });
  }

  async getTransactionRule(userId: string, id: string) {
    return this.prisma.transactionRule.findFirst({ where: { userId, id } });
  }

  async updateTransactionRule(userId: string, id: string, dto: UpdateTransactionRuleDto) {
    // Ensuring it belongs to user
    const rule = await this.prisma.transactionRule.findFirst({ where: { userId, id } });
    if (!rule) throw new Error('Rule not found');
    return this.prisma.transactionRule.update({
      where: { id },
      data: dto,
    });
  }

  async deleteTransactionRule(userId: string, id: string) {
    const rule = await this.prisma.transactionRule.findFirst({ where: { userId, id } });
    if (!rule) throw new Error('Rule not found');
    return this.prisma.transactionRule.delete({ where: { id } });
  }

  async createInvestmentAsset(userId: string, dto: CreateInvestmentAssetDto) {
    return this.prisma.investmentAsset.create({
      data: { ...dto, userId },
    });
  }

  async getInvestmentAssets(userId: string) {
    return this.prisma.investmentAsset.findMany({ where: { userId } });
  }

  async getInvestmentAsset(userId: string, id: string) {
    return this.prisma.investmentAsset.findFirst({ where: { userId, id } });
  }

  async updateInvestmentAsset(userId: string, id: string, dto: UpdateInvestmentAssetDto) {
    const asset = await this.prisma.investmentAsset.findFirst({ where: { userId, id } });
    if (!asset) throw new Error('Asset not found');
    return this.prisma.investmentAsset.update({
      where: { id },
      data: dto,
    });
  }

  async deleteInvestmentAsset(userId: string, id: string) {
    const asset = await this.prisma.investmentAsset.findFirst({ where: { userId, id } });
    if (!asset) throw new Error('Asset not found');
    return this.prisma.investmentAsset.delete({ where: { id } });
  }

  async categorizeTransaction(userId: string, description: string) {
    // Mocked AI string
    return {
      category: 'Mocked AI Category',
      notes: `AI categorized "${description}". Note: AI never transfers money or cancels subscriptions automatically.`
    };
  }
}
