import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class MemoryService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, data: any) {
    return this.prisma.memory.create({
      data: { ...data, userId },
    });
  }

  findAll(userId: string) {
    return this.prisma.memory.findMany({
      where: { userId },
    });
  }

  findOne(userId: string, id: string) {
    return this.prisma.memory.findFirst({
      where: { id, userId },
    });
  }

  update(userId: string, id: string, data: any) {
    return this.prisma.memory.updateMany({
      where: { id, userId },
      data,
    });
  }

  remove(userId: string, id: string) {
    return this.prisma.memory.deleteMany({
      where: { id, userId },
    });
  }
}
