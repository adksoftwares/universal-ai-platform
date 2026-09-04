var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
let LifeIntelligenceService = class LifeIntelligenceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getRoutines(userId) {
        return this.prisma.routine.findMany({ where: { userId } });
    }
    async createRoutine(userId, data) {
        return this.prisma.routine.create({ data: { ...data, userId } });
    }
    async updateRoutine(userId, id, data) {
        const routine = await this.prisma.routine.findFirst({ where: { id, userId } });
        if (!routine)
            throw new NotFoundException('Routine not found');
        return this.prisma.routine.update({ where: { id }, data });
    }
    async deleteRoutine(userId, id) {
        const routine = await this.prisma.routine.findFirst({ where: { id, userId } });
        if (!routine)
            throw new NotFoundException('Routine not found');
        return this.prisma.routine.delete({ where: { id } });
    }
    async getRecipes(userId) {
        return this.prisma.recipe.findMany({ where: { userId } });
    }
    async createRecipe(userId, data) {
        return this.prisma.recipe.create({ data: { ...data, userId } });
    }
    async updateRecipe(userId, id, data) {
        const recipe = await this.prisma.recipe.findFirst({ where: { id, userId } });
        if (!recipe)
            throw new NotFoundException('Recipe not found');
        return this.prisma.recipe.update({ where: { id }, data });
    }
    async deleteRecipe(userId, id) {
        const recipe = await this.prisma.recipe.findFirst({ where: { id, userId } });
        if (!recipe)
            throw new NotFoundException('Recipe not found');
        return this.prisma.recipe.delete({ where: { id } });
    }
    async getWarranties(userId) {
        return this.prisma.warranty.findMany({ where: { userId } });
    }
    async createWarranty(userId, data) {
        return this.prisma.warranty.create({ data: { ...data, userId } });
    }
    async updateWarranty(userId, id, data) {
        const warranty = await this.prisma.warranty.findFirst({ where: { id, userId } });
        if (!warranty)
            throw new NotFoundException('Warranty not found');
        return this.prisma.warranty.update({ where: { id }, data });
    }
    async deleteWarranty(userId, id) {
        const warranty = await this.prisma.warranty.findFirst({ where: { id, userId } });
        if (!warranty)
            throw new NotFoundException('Warranty not found');
        return this.prisma.warranty.delete({ where: { id } });
    }
    async getMealPlans(userId) {
        return this.prisma.mealPlan.findMany({
            where: { household: { members: { some: { userId } } } }
        });
    }
    async createMealPlan(userId, data) {
        const household = await this.prisma.household.findFirst({
            where: { id: data.householdId, members: { some: { userId } } }
        });
        if (!household)
            throw new NotFoundException('Household not found or no access');
        return this.prisma.mealPlan.create({ data });
    }
    async updateMealPlan(userId, id, data) {
        const mealPlan = await this.prisma.mealPlan.findFirst({
            where: { id, household: { members: { some: { userId } } } }
        });
        if (!mealPlan)
            throw new NotFoundException('MealPlan not found');
        return this.prisma.mealPlan.update({ where: { id }, data });
    }
    async deleteMealPlan(userId, id) {
        const mealPlan = await this.prisma.mealPlan.findFirst({
            where: { id, household: { members: { some: { userId } } } }
        });
        if (!mealPlan)
            throw new NotFoundException('MealPlan not found');
        return this.prisma.mealPlan.delete({ where: { id } });
    }
    async getSmartDevices(userId) {
        return this.prisma.smartDevice.findMany({
            where: { household: { members: { some: { userId } } } }
        });
    }
    async createSmartDevice(userId, data) {
        const household = await this.prisma.household.findFirst({
            where: { id: data.householdId, members: { some: { userId } } }
        });
        if (!household)
            throw new NotFoundException('Household not found or no access');
        return this.prisma.smartDevice.create({ data });
    }
    async updateSmartDevice(userId, id, data) {
        const smartDevice = await this.prisma.smartDevice.findFirst({
            where: { id, household: { members: { some: { userId } } } }
        });
        if (!smartDevice)
            throw new NotFoundException('SmartDevice not found');
        return this.prisma.smartDevice.update({ where: { id }, data });
    }
    async deleteSmartDevice(userId, id) {
        const smartDevice = await this.prisma.smartDevice.findFirst({
            where: { id, household: { members: { some: { userId } } } }
        });
        if (!smartDevice)
            throw new NotFoundException('SmartDevice not found');
        return this.prisma.smartDevice.delete({ where: { id } });
    }
    async getAssistantPlan(userId, goal) {
        const mockResponse = `Here is a breakdown of tasks to achieve your goal: "${goal}".\n\n1. Assess the current situation.\n2. Create a detailed schedule.\n3. Execute tasks step-by-step.\n\n*Caveat: Smart home locks and security systems must always have explicit manual authorization. AI will not automatically trigger these actions.*`;
        return { plan: mockResponse };
    }
};
LifeIntelligenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], LifeIntelligenceService);
export { LifeIntelligenceService };
//# sourceMappingURL=life-intelligence.service.js.map