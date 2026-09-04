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
import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { FinancialIntelligenceService } from './financial-intelligence.service.js';
import { CreateTransactionRuleDto, UpdateTransactionRuleDto } from './dto/transaction-rule.dto.js';
import { CreateInvestmentAssetDto, UpdateInvestmentAssetDto } from './dto/investment-asset.dto.js';
let FinancialIntelligenceController = class FinancialIntelligenceController {
    financialIntelligenceService;
    constructor(financialIntelligenceService) {
        this.financialIntelligenceService = financialIntelligenceService;
    }
    createRule(userId, dto) {
        return this.financialIntelligenceService.createTransactionRule(userId, dto);
    }
    getRules(userId) {
        return this.financialIntelligenceService.getTransactionRules(userId);
    }
    getRule(userId, id) {
        return this.financialIntelligenceService.getTransactionRule(userId, id);
    }
    updateRule(userId, id, dto) {
        return this.financialIntelligenceService.updateTransactionRule(userId, id, dto);
    }
    deleteRule(userId, id) {
        return this.financialIntelligenceService.deleteTransactionRule(userId, id);
    }
    createAsset(userId, dto) {
        return this.financialIntelligenceService.createInvestmentAsset(userId, dto);
    }
    getAssets(userId) {
        return this.financialIntelligenceService.getInvestmentAssets(userId);
    }
    getAsset(userId, id) {
        return this.financialIntelligenceService.getInvestmentAsset(userId, id);
    }
    updateAsset(userId, id, dto) {
        return this.financialIntelligenceService.updateInvestmentAsset(userId, id, dto);
    }
    deleteAsset(userId, id) {
        return this.financialIntelligenceService.deleteInvestmentAsset(userId, id);
    }
    categorizeTransaction(userId, description) {
        return this.financialIntelligenceService.categorizeTransaction(userId, description);
    }
};
__decorate([
    Post('transaction-rules'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateTransactionRuleDto]),
    __metadata("design:returntype", void 0)
], FinancialIntelligenceController.prototype, "createRule", null);
__decorate([
    Get('transaction-rules'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinancialIntelligenceController.prototype, "getRules", null);
__decorate([
    Get('transaction-rules/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FinancialIntelligenceController.prototype, "getRule", null);
__decorate([
    Patch('transaction-rules/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, UpdateTransactionRuleDto]),
    __metadata("design:returntype", void 0)
], FinancialIntelligenceController.prototype, "updateRule", null);
__decorate([
    Delete('transaction-rules/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FinancialIntelligenceController.prototype, "deleteRule", null);
__decorate([
    Post('investment-assets'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateInvestmentAssetDto]),
    __metadata("design:returntype", void 0)
], FinancialIntelligenceController.prototype, "createAsset", null);
__decorate([
    Get('investment-assets'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinancialIntelligenceController.prototype, "getAssets", null);
__decorate([
    Get('investment-assets/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FinancialIntelligenceController.prototype, "getAsset", null);
__decorate([
    Patch('investment-assets/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, UpdateInvestmentAssetDto]),
    __metadata("design:returntype", void 0)
], FinancialIntelligenceController.prototype, "updateAsset", null);
__decorate([
    Delete('investment-assets/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FinancialIntelligenceController.prototype, "deleteAsset", null);
__decorate([
    Post('transactions/categorize'),
    __param(0, Headers('x-user-id')),
    __param(1, Body('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FinancialIntelligenceController.prototype, "categorizeTransaction", null);
FinancialIntelligenceController = __decorate([
    Controller('financial-intelligence'),
    __metadata("design:paramtypes", [FinancialIntelligenceService])
], FinancialIntelligenceController);
export { FinancialIntelligenceController };
//# sourceMappingURL=financial-intelligence.controller.js.map