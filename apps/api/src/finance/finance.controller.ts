import { Controller, Get, Post, Body, Headers } from '@nestjs/common';
import { FinanceService } from './finance.service.js';

@Controller('finance')
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  @Post('expenses')
  createExpense(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.financeService.createExpense(userId, data);
  }

  @Get('expenses')
  getExpenses(@Headers('x-user-id') userId: string) {
    return this.financeService.getExpenses(userId);
  }

  @Get('expenses/summary')
  getExpensesSummary(@Headers('x-user-id') userId: string) {
    return this.financeService.getExpensesSumByCategory(userId);
  }

  @Post('budgets')
  createBudget(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.financeService.createBudget(userId, data);
  }

  @Get('budgets')
  getBudgets(@Headers('x-user-id') userId: string) {
    return this.financeService.getBudgets(userId);
  }

  @Post('bills')
  createBill(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.financeService.createBill(userId, data);
  }

  @Get('bills')
  getBills(@Headers('x-user-id') userId: string) {
    return this.financeService.getBills(userId);
  }

  @Post('savings-goals')
  createSavingsGoal(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.financeService.createSavingsGoal(userId, data);
  }

  @Get('savings-goals')
  getSavingsGoals(@Headers('x-user-id') userId: string) {
    return this.financeService.getSavingsGoals(userId);
  }
}
