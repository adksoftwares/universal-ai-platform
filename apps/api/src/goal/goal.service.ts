import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class GoalService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, data: any) {
    return this.prisma.goal.create({
      data: { ...data, userId },
    });
  }

  findAll(userId: string) {
    return this.prisma.goal.findMany({
      where: { userId },
      include: { milestones: true },
    });
  }

  findOne(userId: string, id: string) {
    return this.prisma.goal.findFirst({
      where: { id, userId },
      include: { milestones: true },
    });
  }

  update(userId: string, id: string, data: any) {
    return this.prisma.goal.updateMany({
      where: { id, userId },
      data,
    });
  }

  remove(userId: string, id: string) {
    return this.prisma.goal.deleteMany({
      where: { id, userId },
    });
  }
}
