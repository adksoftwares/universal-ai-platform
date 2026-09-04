import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { DocumentProcessingService } from './document-processing.service.js';

@Injectable()
export class DocumentService {
  constructor(
    private prisma: PrismaService,
    private processingService: DocumentProcessingService
  ) {}

  async create(userId: string, data: any) {
    const document = await this.prisma.document.create({
      data: {
        ...data,
        userId,
        status: 'processing',
      },
    });

    // Start mock background processing
    this.processingService.processDocument(document.id);

    return document;
  }

  findAll(userId: string) {
    return this.prisma.document.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(userId: string, id: string) {
    return this.prisma.document.findFirst({
      where: { id, userId },
      include: {
        importantDates: true,
        suggestedActions: true,
      },
    });
  }

  update(userId: string, id: string, data: any) {
    return this.prisma.document.updateMany({
      where: { id, userId },
      data,
    });
  }

  remove(userId: string, id: string) {
    return this.prisma.document.deleteMany({
      where: { id, userId },
    });
  }
}
