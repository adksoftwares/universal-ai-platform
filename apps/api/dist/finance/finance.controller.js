var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Post, Body, Headers } from '@nestjs/common';
import { FinanceService } from './finance.service.js';
let FinanceController = class FinanceController {
    financeService;
    constructor(financeService) {
        this.financeService = financeService;
    }
    createExpense(userId, data) {
        return this.financeService.createExpense(userId, data);
    }
    getExpenses(userId) {
        return this.financeService.getExpenses(userId);
    }
    getExpensesSummary(userId) {
        return this.financeService.getExpensesSumByCategory(userId);
    }
    createBudget(userId, data) {
        return this.financeService.createBudget(userId, data);
    }
    getBudgets(userId) {
        return this.financeService.getBudgets(userId);
    }
    createBill(userId, data) {
        return this.financeService.createBill(userId, data);
    }
    getBills(userId) {
        return this.financeService.getBills(userId);
    }
    createSavingsGoal(userId, data) {
        return this.financeService.createSavingsGoal(userId, data);
    }
    getSavingsGoals(userId) {
        return this.financeService.getSavingsGoals(userId);
    }
};
__decorate([
    Post('expenses'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FinanceController.prototype, "createExpense", null);
__decorate([
    Get('expenses'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinanceController.prototype, "getExpenses", null);
__decorate([
    Get('expenses/summary'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinanceController.prototype, "getExpensesSummary", null);
__decorate([
    Post('budgets'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FinanceController.prototype, "createBudget", null);
__decorate([
    Get('budgets'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinanceController.prototype, "getBudgets", null);
__decorate([
    Post('bills'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FinanceController.prototype, "createBill", null);
__decorate([
    Get('bills'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinanceController.prototype, "getBills", null);
__decorate([
    Post('savings-goals'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FinanceController.prototype, "createSavingsGoal", null);
__decorate([
    Get('savings-goals'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinanceController.prototype, "getSavingsGoals", null);
FinanceController = __decorate([
    Controller('finance'),
    __metadata("design:paramtypes", [FinanceService])
], FinanceController);
export { FinanceController };
//# sourceMappingURL=finance.controller.js.map