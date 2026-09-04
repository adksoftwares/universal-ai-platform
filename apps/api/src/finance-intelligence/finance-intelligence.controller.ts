import { Controller, Get, Post, Body, Put, Param, Delete, Headers } from '@nestjs/common';
import { FinanceIntelligenceService } from './finance-intelligence.service.js';

@Controller('finance-intelligence')
export class FinanceIntelligenceController {
  constructor(private readonly financeIntelligenceService: FinanceIntelligenceService) {}

  // Cash flow
  @Get('cash-flow')
  getCashFlow(@Headers('x-user-id') userId: string) {
    return this.financeIntelligenceService.getCashFlow(userId);
  }

  // FinancialAccount
  @Post('accounts')
  createAccount(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.financeIntelligenceService.createAccount(userId, data);
  }

  @Get('accounts')
  getAccounts(@Headers('x-user-id') userId: string) {
    return this.financeIntelligenceService.getAccounts(userId);
  }

  @Get('accounts/:id')
  getAccount(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.financeIntelligenceService.getAccount(userId, id);
  }

  @Put('accounts/:id')
  updateAccount(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.financeIntelligenceService.updateAccount(userId, id, data);
  }

  @Delete('accounts/:id')
  deleteAccount(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.financeIntelligenceService.deleteAccount(userId, id);
  }

  // Subscription
  @Post('subscriptions')
  createSubscription(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.financeIntelligenceService.createSubscription(userId, data);
  }

  @Get('subscriptions')
  getSubscriptions(@Headers('x-user-id') userId: string) {
    return this.financeIntelligenceService.getSubscriptions(userId);
  }

  @Get('subscriptions/:id')
  getSubscription(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.financeIntelligenceService.getSubscription(userId, id);
  }

  @Put('subscriptions/:id')
  updateSubscription(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.financeIntelligenceService.updateSubscription(userId, id, data);
  }

  @Delete('subscriptions/:id')
  deleteSubscription(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.financeIntelligenceService.deleteSubscription(userId, id);
  }

  // Loan
  @Post('loans')
  createLoan(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.financeIntelligenceService.createLoan(userId, data);
  }

  @Get('loans')
  getLoans(@Headers('x-user-id') userId: string) {
    return this.financeIntelligenceService.getLoans(userId);
  }

  @Get('loans/:id')
  getLoan(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.financeIntelligenceService.getLoan(userId, id);
  }

  @Put('loans/:id')
  updateLoan(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.financeIntelligenceService.updateLoan(userId, id, data);
  }

  @Delete('loans/:id')
  deleteLoan(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.financeIntelligenceService.deleteLoan(userId, id);
  }

  // Asset
  @Post('assets')
  createAsset(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.financeIntelligenceService.createAsset(userId, data);
  }

  @Get('assets')
  getAssets(@Headers('x-user-id') userId: string) {
    return this.financeIntelligenceService.getAssets(userId);
  }

  @Get('assets/:id')
  getAsset(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.financeIntelligenceService.getAsset(userId, id);
  }

  @Put('assets/:id')
  updateAsset(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.financeIntelligenceService.updateAsset(userId, id, data);
  }

  @Delete('assets/:id')
  deleteAsset(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.financeIntelligenceService.deleteAsset(userId, id);
  }

  // Net Worth Snapshot
  @Post('net-worth/snapshot')
  createNetWorthSnapshot(@Headers('x-user-id') userId: string) {
    return this.financeIntelligenceService.createNetWorthSnapshot(userId);
  }
}
