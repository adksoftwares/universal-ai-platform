import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { FinancialIntelligenceService } from './financial-intelligence.service.js';
import { CreateTransactionRuleDto, UpdateTransactionRuleDto } from './dto/transaction-rule.dto.js';
import { CreateInvestmentAssetDto, UpdateInvestmentAssetDto } from './dto/investment-asset.dto.js';

@Controller('financial-intelligence')
export class FinancialIntelligenceController {
  constructor(private readonly financialIntelligenceService: FinancialIntelligenceService) {}

  @Post('transaction-rules')
  createRule(@Headers('x-user-id') userId: string, @Body() dto: CreateTransactionRuleDto) {
    return this.financialIntelligenceService.createTransactionRule(userId, dto);
  }

  @Get('transaction-rules')
  getRules(@Headers('x-user-id') userId: string) {
    return this.financialIntelligenceService.getTransactionRules(userId);
  }

  @Get('transaction-rules/:id')
  getRule(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.financialIntelligenceService.getTransactionRule(userId, id);
  }

  @Patch('transaction-rules/:id')
  updateRule(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() dto: UpdateTransactionRuleDto) {
    return this.financialIntelligenceService.updateTransactionRule(userId, id, dto);
  }

  @Delete('transaction-rules/:id')
  deleteRule(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.financialIntelligenceService.deleteTransactionRule(userId, id);
  }

  @Post('investment-assets')
  createAsset(@Headers('x-user-id') userId: string, @Body() dto: CreateInvestmentAssetDto) {
    return this.financialIntelligenceService.createInvestmentAsset(userId, dto);
  }

  @Get('investment-assets')
  getAssets(@Headers('x-user-id') userId: string) {
    return this.financialIntelligenceService.getInvestmentAssets(userId);
  }

  @Get('investment-assets/:id')
  getAsset(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.financialIntelligenceService.getInvestmentAsset(userId, id);
  }

  @Patch('investment-assets/:id')
  updateAsset(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() dto: UpdateInvestmentAssetDto) {
    return this.financialIntelligenceService.updateInvestmentAsset(userId, id, dto);
  }

  @Delete('investment-assets/:id')
  deleteAsset(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.financialIntelligenceService.deleteInvestmentAsset(userId, id);
  }

  @Post('transactions/categorize')
  categorizeTransaction(@Headers('x-user-id') userId: string, @Body('description') description: string) {
    return this.financialIntelligenceService.categorizeTransaction(userId, description);
  }
}
