var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
let HouseholdIntelligenceService = class HouseholdIntelligenceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async verifyHouseholdMembership(userId, householdId) {
        const member = await this.prisma.householdMember.findUnique({
            where: {
                householdId_userId: {
                    householdId,
                    userId,
                },
            },
        });
        if (!member) {
            throw new ForbiddenException('User is not a member of this household');
        }
        return member;
    }
    async getHouseholds(userId) {
        return this.prisma.household.findMany({
            where: {
                members: {
                    some: {
                        userId,
                    },
                },
            },
        });
    }
    async getHouseholdById(userId, householdId) {
        await this.verifyHouseholdMembership(userId, householdId);
        return this.prisma.household.findUnique({
            where: { id: householdId },
            include: {
                members: true,
            },
        });
    }
    async createHousehold(userId, data) {
        return this.prisma.household.create({
            data: {
                name: data.name,
                country: data.country,
                timeZone: data.timeZone,
                address: data.address,
                members: {
                    create: {
                        userId,
                        role: 'Owner',
                    },
                },
            },
        });
    }
    async getChores(userId, householdId) {
        await this.verifyHouseholdMembership(userId, householdId);
        return this.prisma.chore.findMany({
            where: { householdId },
        });
    }
    async createChore(userId, householdId, data) {
        await this.verifyHouseholdMembership(userId, householdId);
        return this.prisma.chore.create({
            data: {
                ...data,
                householdId,
            },
        });
    }
    async getShoppingLists(userId, householdId) {
        await this.verifyHouseholdMembership(userId, householdId);
        return this.prisma.shoppingList.findMany({
            where: { householdId },
            include: { items: true },
        });
    }
    async createShoppingList(userId, householdId, data) {
        await this.verifyHouseholdMembership(userId, householdId);
        return this.prisma.shoppingList.create({
            data: {
                ...data,
                householdId,
            },
        });
    }
    async createShoppingItem(userId, listId, data) {
        const list = await this.prisma.shoppingList.findUnique({ where: { id: listId } });
        if (!list)
            throw new NotFoundException('Shopping list not found');
        await this.verifyHouseholdMembership(userId, list.householdId);
        return this.prisma.shoppingItem.create({
            data: {
                ...data,
                listId,
            },
        });
    }
    async getInventory(userId, householdId) {
        await this.verifyHouseholdMembership(userId, householdId);
        return this.prisma.homeInventoryItem.findMany({
            where: { householdId },
        });
    }
    async createInventoryItem(userId, householdId, data) {
        await this.verifyHouseholdMembership(userId, householdId);
        return this.prisma.homeInventoryItem.create({
            data: {
                ...data,
                householdId,
            },
        });
    }
    async getMaintenanceRecords(userId, householdId) {
        await this.verifyHouseholdMembership(userId, householdId);
        return this.prisma.maintenanceRecord.findMany({
            where: { householdId },
        });
    }
    async createMaintenanceRecord(userId, householdId, data) {
        await this.verifyHouseholdMembership(userId, householdId);
        return this.prisma.maintenanceRecord.create({
            data: {
                ...data,
                householdId,
            },
        });
    }
    async getBriefing(userId, householdId) {
        if (!householdId) {
            const firstHousehold = await this.prisma.householdMember.findFirst({
                where: { userId },
            });
            if (!firstHousehold) {
                throw new NotFoundException('User does not belong to any household');
            }
            householdId = firstHousehold.householdId;
        }
        await this.verifyHouseholdMembership(userId, householdId);
        const chores = await this.prisma.chore.findMany({
            where: { householdId },
        });
        const shoppingLists = await this.prisma.shoppingList.findMany({
            where: { householdId },
            include: {
                items: {
                    where: { isPurchased: false },
                },
            },
        });
        const unpurchasedShoppingItems = shoppingLists.flatMap((list) => list.items);
        return {
            chores,
            unpurchasedShoppingItems,
        };
    }
};
HouseholdIntelligenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], HouseholdIntelligenceService);
export { HouseholdIntelligenceService };
//# sourceMappingURL=household-intelligence.service.js.map