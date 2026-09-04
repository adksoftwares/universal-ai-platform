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
let FinanceService = class FinanceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createExpense(userId, data) {
        return this.prisma.expense.create({
            data: { ...data, userId },
        });
    }
    async getExpenses(userId) {
        return this.prisma.expense.findMany({ where: { userId } });
    }
    async getExpensesSumByCategory(userId) {
        const expenses = await this.prisma.expense.findMany({ where: { userId } });
        const sumByCategory = expenses.reduce((acc, expense) => {
            const cat = expense.category;
            if (!acc[cat])
                acc[cat] = 0;
            acc[cat] += expense.amount;
            return acc;
        }, {});
        return Object.entries(sumByCategory).map(([category, sum]) => ({
            category,
            total: sum,
        }));
    }
    async createBudget(userId, data) {
        return this.prisma.budget.create({
            data: { ...data, userId },
        });
    }
    async getBudgets(userId) {
        return this.prisma.budget.findMany({ where: { userId } });
    }
    async createBill(userId, data) {
        return this.prisma.bill.create({
            data: { ...data, userId },
        });
    }
    async getBills(userId) {
        return this.prisma.bill.findMany({ where: { userId } });
    }
    async createSavingsGoal(userId, data) {
        return this.prisma.savingsGoal.create({
            data: { ...data, userId },
        });
    }
    async getSavingsGoals(userId) {
        return this.prisma.savingsGoal.findMany({ where: { userId } });
    }
};
FinanceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], FinanceService);
export { FinanceService };
//# sourceMappingURL=finance.service.js.map