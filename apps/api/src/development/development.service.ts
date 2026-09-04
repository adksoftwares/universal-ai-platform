import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class DevelopmentService {
  constructor(private prisma: PrismaService) {}

  async createHabit(userId: string, data: any) {
    return this.prisma.habit.create({
      data: { ...data, userId },
    });
  }

  async getHabits(userId: string) {
    return this.prisma.habit.findMany({
      where: { userId },
    });
  }

  async updateHabit(userId: string, id: string, data: any) {
    return this.prisma.habit.update({
      where: { id, userId },
      data,
    });
  }

  async deleteHabit(userId: string, id: string) {
    return this.prisma.habit.delete({
      where: { id, userId },
    });
  }
}
