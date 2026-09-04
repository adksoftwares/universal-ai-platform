import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class ReminderService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, data: any) {
    return this.prisma.reminder.create({
      data: { ...data, userId },
    });
  }

  findAll(userId: string) {
    return this.prisma.reminder.findMany({
      where: { userId },
    });
  }

  findOne(userId: string, id: string) {
    return this.prisma.reminder.findFirst({
      where: { id, userId },
    });
  }

  update(userId: string, id: string, data: any) {
    return this.prisma.reminder.updateMany({
      where: { id, userId },
      data,
    });
  }

  remove(userId: string, id: string) {
    return this.prisma.reminder.deleteMany({
      where: { id, userId },
    });
  }
}
