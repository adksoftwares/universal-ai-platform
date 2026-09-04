var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { DocumentProcessingService } from './document-processing.service.js';
let DocumentService = class DocumentService {
    prisma;
    processingService;
    constructor(prisma, processingService) {
        this.prisma = prisma;
        this.processingService = processingService;
    }
    async create(userId, data) {
        const document = await this.prisma.document.create({
            data: {
                ...data,
                userId,
                status: 'processing',
            },
        });
        this.processingService.processDocument(document.id);
        return document;
    }
    findAll(userId) {
        return this.prisma.document.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }
    findOne(userId, id) {
        return this.prisma.document.findFirst({
            where: { id, userId },
            include: {
                importantDates: true,
                suggestedActions: true,
            },
        });
    }
    update(userId, id, data) {
        return this.prisma.document.updateMany({
            where: { id, userId },
            data,
        });
    }
    remove(userId, id) {
        return this.prisma.document.deleteMany({
            where: { id, userId },
        });
    }
};
DocumentService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        DocumentProcessingService])
], DocumentService);
export { DocumentService };
//# sourceMappingURL=document.service.js.map