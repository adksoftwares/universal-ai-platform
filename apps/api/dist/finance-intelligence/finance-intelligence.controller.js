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
import { Controller, Get, Post, Body, Put, Param, Delete, Headers } from '@nestjs/common';
import { FinanceIntelligenceService } from './finance-intelligence.service.js';
let FinanceIntelligenceController = class FinanceIntelligenceController {
    financeIntelligenceService;
    constructor(financeIntelligenceService) {
        this.financeIntelligenceService = financeIntelligenceService;
    }
    getCashFlow(userId) {
        return this.financeIntelligenceService.getCashFlow(userId);
    }
    createAccount(userId, data) {
        return this.financeIntelligenceService.createAccount(userId, data);
    }
    getAccounts(userId) {
        return this.financeIntelligenceService.getAccounts(userId);
    }
    getAccount(userId, id) {
        return this.financeIntelligenceService.getAccount(userId, id);
    }
    updateAccount(userId, id, data) {
        return this.financeIntelligenceService.updateAccount(userId, id, data);
    }
    deleteAccount(userId, id) {
        return this.financeIntelligenceService.deleteAccount(userId, id);
    }
    createSubscription(userId, data) {
        return this.financeIntelligenceService.createSubscription(userId, data);
    }
    getSubscriptions(userId) {
        return this.financeIntelligenceService.getSubscriptions(userId);
    }
    getSubscription(userId, id) {
        return this.financeIntelligenceService.getSubscription(userId, id);
    }
    updateSubscription(userId, id, data) {
        return this.financeIntelligenceService.updateSubscription(userId, id, data);
    }
    deleteSubscription(userId, id) {
        return this.financeIntelligenceService.deleteSubscription(userId, id);
    }
    createLoan(userId, data) {
        return this.financeIntelligenceService.createLoan(userId, data);
    }
    getLoans(userId) {
        return this.financeIntelligenceService.getLoans(userId);
    }
    getLoan(userId, id) {
        return this.financeIntelligenceService.getLoan(userId, id);
    }
    updateLoan(userId, id, data) {
        return this.financeIntelligenceService.updateLoan(userId, id, data);
    }
    deleteLoan(userId, id) {
        return this.financeIntelligenceService.deleteLoan(userId, id);
    }
    createAsset(userId, data) {
        return this.financeIntelligenceService.createAsset(userId, data);
    }
    getAssets(userId) {
        return this.financeIntelligenceService.getAssets(userId);
    }
    getAsset(userId, id) {
        return this.financeIntelligenceService.getAsset(userId, id);
    }
    updateAsset(userId, id, data) {
        return this.financeIntelligenceService.updateAsset(userId, id, data);
    }
    deleteAsset(userId, id) {
        return this.financeIntelligenceService.deleteAsset(userId, id);
    }
    createNetWorthSnapshot(userId) {
        return this.financeIntelligenceService.createNetWorthSnapshot(userId);
    }
};
__decorate([
    Get('cash-flow'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "getCashFlow", null);
__decorate([
    Post('accounts'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "createAccount", null);
__decorate([
    Get('accounts'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "getAccounts", null);
__decorate([
    Get('accounts/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "getAccount", null);
__decorate([
    Put('accounts/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "updateAccount", null);
__decorate([
    Delete('accounts/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "deleteAccount", null);
__decorate([
    Post('subscriptions'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "createSubscription", null);
__decorate([
    Get('subscriptions'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "getSubscriptions", null);
__decorate([
    Get('subscriptions/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "getSubscription", null);
__decorate([
    Put('subscriptions/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "updateSubscription", null);
__decorate([
    Delete('subscriptions/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "deleteSubscription", null);
__decorate([
    Post('loans'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "createLoan", null);
__decorate([
    Get('loans'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "getLoans", null);
__decorate([
    Get('loans/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "getLoan", null);
__decorate([
    Put('loans/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "updateLoan", null);
__decorate([
    Delete('loans/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "deleteLoan", null);
__decorate([
    Post('assets'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "createAsset", null);
__decorate([
    Get('assets'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "getAssets", null);
__decorate([
    Get('assets/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "getAsset", null);
__decorate([
    Put('assets/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "updateAsset", null);
__decorate([
    Delete('assets/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "deleteAsset", null);
__decorate([
    Post('net-worth/snapshot'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinanceIntelligenceController.prototype, "createNetWorthSnapshot", null);
FinanceIntelligenceController = __decorate([
    Controller('finance-intelligence'),
    __metadata("design:paramtypes", [FinanceIntelligenceService])
], FinanceIntelligenceController);
export { FinanceIntelligenceController };
//# sourceMappingURL=finance-intelligence.controller.js.map