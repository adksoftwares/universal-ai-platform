import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class FinanceService {
  constructor(private readonly prisma: PrismaService) {}

  async createExpense(userId: string, data: any) {
    return this.prisma.expense.create({
      data: { ...data, userId },
    });
  }

  async getExpenses(userId: string) {
    return this.prisma.expense.findMany({ where: { userId } });
  }

  async getExpensesSumByCategory(userId: string) {
    const expenses = await this.prisma.expense.findMany({ where: { userId } });
    const sumByCategory = expenses.reduce((acc: Record<string, number>, expense: { category: string; amount: number }) => {
      const cat = expense.category;
      if (!acc[cat]) acc[cat] = 0;
      acc[cat] += expense.amount;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(sumByCategory).map(([category, sum]) => ({
      category,
      total: sum,
    }));
  }

  async createBudget(userId: string, data: any) {
    return this.prisma.budget.create({
      data: { ...data, userId },
    });
  }

  async getBudgets(userId: string) {
    return this.prisma.budget.findMany({ where: { userId } });
  }

  async createBill(userId: string, data: any) {
    return this.prisma.bill.create({
      data: { ...data, userId },
    });
  }

  async getBills(userId: string) {
    return this.prisma.bill.findMany({ where: { userId } });
  }

  async createSavingsGoal(userId: string, data: any) {
    return this.prisma.savingsGoal.create({
      data: { ...data, userId },
    });
  }

  async getSavingsGoals(userId: string) {
    return this.prisma.savingsGoal.findMany({ where: { userId } });
  }
}
