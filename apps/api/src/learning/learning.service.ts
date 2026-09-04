import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class LearningService {
  constructor(private prisma: PrismaService) {}

  async createGoal(userId: string, data: any) {
    return this.prisma.learningGoal.create({
      data: { ...data, userId },
      include: { plans: { include: { stages: true } } },
    });
  }

  async getGoals(userId: string) {
    return this.prisma.learningGoal.findMany({
      where: { userId },
      include: { plans: { include: { stages: true } } },
    });
  }

  async getGoal(userId: string, id: string) {
    return this.prisma.learningGoal.findUnique({
      where: { id, userId },
      include: { plans: { include: { stages: true } } },
    });
  }

  async updateGoal(userId: string, id: string, data: any) {
    return this.prisma.learningGoal.update({
      where: { id, userId },
      data,
      include: { plans: { include: { stages: true } } },
    });
  }

  async deleteGoal(userId: string, id: string) {
    return this.prisma.learningGoal.delete({
      where: { id, userId },
    });
  }
}
