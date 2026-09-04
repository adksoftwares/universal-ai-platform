import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class HouseholdIntelligenceService {
  constructor(private readonly prisma: PrismaService) {}

  async verifyHouseholdMembership(userId: string, householdId: string) {
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

  async getHouseholds(userId: string) {
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

  async getHouseholdById(userId: string, householdId: string) {
    await this.verifyHouseholdMembership(userId, householdId);
    return this.prisma.household.findUnique({
      where: { id: householdId },
      include: {
        members: true,
      },
    });
  }

  async createHousehold(userId: string, data: any) {
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

  async getChores(userId: string, householdId: string) {
    await this.verifyHouseholdMembership(userId, householdId);
    return this.prisma.chore.findMany({
      where: { householdId },
    });
  }

  async createChore(userId: string, householdId: string, data: any) {
    await this.verifyHouseholdMembership(userId, householdId);
    return this.prisma.chore.create({
      data: {
        ...data,
        householdId,
      },
    });
  }

  async getShoppingLists(userId: string, householdId: string) {
    await this.verifyHouseholdMembership(userId, householdId);
    return this.prisma.shoppingList.findMany({
      where: { householdId },
      include: { items: true },
    });
  }

  async createShoppingList(userId: string, householdId: string, data: any) {
    await this.verifyHouseholdMembership(userId, householdId);
    return this.prisma.shoppingList.create({
      data: {
        ...data,
        householdId,
      },
    });
  }
  
  async createShoppingItem(userId: string, listId: string, data: any) {
    const list = await this.prisma.shoppingList.findUnique({ where: { id: listId } });
    if (!list) throw new NotFoundException('Shopping list not found');
    await this.verifyHouseholdMembership(userId, list.householdId);
    return this.prisma.shoppingItem.create({
      data: {
        ...data,
        listId,
      },
    });
  }

  async getInventory(userId: string, householdId: string) {
    await this.verifyHouseholdMembership(userId, householdId);
    return this.prisma.homeInventoryItem.findMany({
      where: { householdId },
    });
  }

  async createInventoryItem(userId: string, householdId: string, data: any) {
    await this.verifyHouseholdMembership(userId, householdId);
    return this.prisma.homeInventoryItem.create({
      data: {
        ...data,
        householdId,
      },
    });
  }

  async getMaintenanceRecords(userId: string, householdId: string) {
    await this.verifyHouseholdMembership(userId, householdId);
    return this.prisma.maintenanceRecord.findMany({
      where: { householdId },
    });
  }

  async createMaintenanceRecord(userId: string, householdId: string, data: any) {
    await this.verifyHouseholdMembership(userId, householdId);
    return this.prisma.maintenanceRecord.create({
      data: {
        ...data,
        householdId,
      },
    });
  }

  async getBriefing(userId: string, householdId: string) {
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

    const unpurchasedShoppingItems = shoppingLists.flatMap((list: any) => list.items);

    return {
      chores,
      unpurchasedShoppingItems,
    };
  }
}
