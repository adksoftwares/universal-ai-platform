import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class LifeIntelligenceService {
  constructor(private prisma: PrismaService) {}

  // Routines
  async getRoutines(userId: string) {
    return this.prisma.routine.findMany({ where: { userId } });
  }
  async createRoutine(userId: string, data: any) {
    return this.prisma.routine.create({ data: { ...data, userId } });
  }
  async updateRoutine(userId: string, id: string, data: any) {
    const routine = await this.prisma.routine.findFirst({ where: { id, userId } });
    if (!routine) throw new NotFoundException('Routine not found');
    return this.prisma.routine.update({ where: { id }, data });
  }
  async deleteRoutine(userId: string, id: string) {
    const routine = await this.prisma.routine.findFirst({ where: { id, userId } });
    if (!routine) throw new NotFoundException('Routine not found');
    return this.prisma.routine.delete({ where: { id } });
  }

  // Recipes
  async getRecipes(userId: string) {
    return this.prisma.recipe.findMany({ where: { userId } });
  }
  async createRecipe(userId: string, data: any) {
    return this.prisma.recipe.create({ data: { ...data, userId } });
  }
  async updateRecipe(userId: string, id: string, data: any) {
    const recipe = await this.prisma.recipe.findFirst({ where: { id, userId } });
    if (!recipe) throw new NotFoundException('Recipe not found');
    return this.prisma.recipe.update({ where: { id }, data });
  }
  async deleteRecipe(userId: string, id: string) {
    const recipe = await this.prisma.recipe.findFirst({ where: { id, userId } });
    if (!recipe) throw new NotFoundException('Recipe not found');
    return this.prisma.recipe.delete({ where: { id } });
  }

  // Warranties
  async getWarranties(userId: string) {
    return this.prisma.warranty.findMany({ where: { userId } });
  }
  async createWarranty(userId: string, data: any) {
    return this.prisma.warranty.create({ data: { ...data, userId } });
  }
  async updateWarranty(userId: string, id: string, data: any) {
    const warranty = await this.prisma.warranty.findFirst({ where: { id, userId } });
    if (!warranty) throw new NotFoundException('Warranty not found');
    return this.prisma.warranty.update({ where: { id }, data });
  }
  async deleteWarranty(userId: string, id: string) {
    const warranty = await this.prisma.warranty.findFirst({ where: { id, userId } });
    if (!warranty) throw new NotFoundException('Warranty not found');
    return this.prisma.warranty.delete({ where: { id } });
  }

  // MealPlans (household model)
  async getMealPlans(userId: string) {
    return this.prisma.mealPlan.findMany({ 
      where: { household: { members: { some: { userId } } } } 
    });
  }
  async createMealPlan(userId: string, data: any) {
    const household = await this.prisma.household.findFirst({
      where: { id: data.householdId, members: { some: { userId } } }
    });
    if (!household) throw new NotFoundException('Household not found or no access');
    return this.prisma.mealPlan.create({ data });
  }
  async updateMealPlan(userId: string, id: string, data: any) {
    const mealPlan = await this.prisma.mealPlan.findFirst({ 
      where: { id, household: { members: { some: { userId } } } } 
    });
    if (!mealPlan) throw new NotFoundException('MealPlan not found');
    return this.prisma.mealPlan.update({ where: { id }, data });
  }
  async deleteMealPlan(userId: string, id: string) {
    const mealPlan = await this.prisma.mealPlan.findFirst({ 
      where: { id, household: { members: { some: { userId } } } } 
    });
    if (!mealPlan) throw new NotFoundException('MealPlan not found');
    return this.prisma.mealPlan.delete({ where: { id } });
  }

  // SmartDevices (household model)
  async getSmartDevices(userId: string) {
    return this.prisma.smartDevice.findMany({ 
      where: { household: { members: { some: { userId } } } } 
    });
  }
  async createSmartDevice(userId: string, data: any) {
    const household = await this.prisma.household.findFirst({
      where: { id: data.householdId, members: { some: { userId } } }
    });
    if (!household) throw new NotFoundException('Household not found or no access');
    return this.prisma.smartDevice.create({ data });
  }
  async updateSmartDevice(userId: string, id: string, data: any) {
    const smartDevice = await this.prisma.smartDevice.findFirst({ 
      where: { id, household: { members: { some: { userId } } } } 
    });
    if (!smartDevice) throw new NotFoundException('SmartDevice not found');
    return this.prisma.smartDevice.update({ where: { id }, data });
  }
  async deleteSmartDevice(userId: string, id: string) {
    const smartDevice = await this.prisma.smartDevice.findFirst({ 
      where: { id, household: { members: { some: { userId } } } } 
    });
    if (!smartDevice) throw new NotFoundException('SmartDevice not found');
    return this.prisma.smartDevice.delete({ where: { id } });
  }

  // Assistant Plan
  async getAssistantPlan(userId: string, goal: string) {
    const mockResponse = `Here is a breakdown of tasks to achieve your goal: "${goal}".\n\n1. Assess the current situation.\n2. Create a detailed schedule.\n3. Execute tasks step-by-step.\n\n*Caveat: Smart home locks and security systems must always have explicit manual authorization. AI will not automatically trigger these actions.*`;
    return { plan: mockResponse };
  }
}
