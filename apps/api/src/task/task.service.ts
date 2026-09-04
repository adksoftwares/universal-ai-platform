import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, data: any) {
    return this.prisma.task.create({
      data: { ...data, userId },
    });
  }

  findAll(userId: string) {
    return this.prisma.task.findMany({
      where: { userId },
    });
  }

  findOne(userId: string, id: string) {
    return this.prisma.task.findFirst({
      where: { id, userId },
    });
  }

  update(userId: string, id: string, data: any) {
    return this.prisma.task.updateMany({
      where: { id, userId },
      data,
    });
  }

  remove(userId: string, id: string) {
    return this.prisma.task.deleteMany({
      where: { id, userId },
    });
  }
}
