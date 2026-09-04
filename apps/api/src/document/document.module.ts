import { Module } from '@nestjs/common';
import { DocumentService } from './document.service.js';
import { DocumentController } from './document.controller.js';
import { DocumentProcessingService } from './document-processing.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [DocumentController],
  providers: [DocumentService, DocumentProcessingService, PrismaService],
})
export class DocumentModule {}
