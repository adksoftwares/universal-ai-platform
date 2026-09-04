var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { DocumentService } from './document.service.js';
import { DocumentController } from './document.controller.js';
import { DocumentProcessingService } from './document-processing.service.js';
import { PrismaService } from '../prisma.service.js';
let DocumentModule = class DocumentModule {
};
DocumentModule = __decorate([
    Module({
        controllers: [DocumentController],
        providers: [DocumentService, DocumentProcessingService, PrismaService],
    })
], DocumentModule);
export { DocumentModule };
//# sourceMappingURL=document.module.js.map