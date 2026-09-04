var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { DocumentService } from './document.service.js';
import { FileInterceptor } from '@nestjs/platform-express';
let DocumentController = class DocumentController {
    documentService;
    constructor(documentService) {
        this.documentService = documentService;
    }
    create(userId, body, file) {
        if (!userId) {
            throw new BadRequestException('x-user-id header is required');
        }
        const data = {
            filename: file?.originalname || body.filename || 'untitled_document',
            fileType: file?.mimetype || body.fileType || 'application/octet-stream',
            fileSize: file?.size || body.fileSize || 0,
            storagePath: body.storagePath || `mock/path/${Date.now()}_${file?.originalname || 'file'}`,
            category: body.category,
        };
        return this.documentService.create(userId, data);
    }
    findAll(userId) {
        if (!userId) {
            throw new BadRequestException('x-user-id header is required');
        }
        return this.documentService.findAll(userId);
    }
    findOne(userId, id) {
        if (!userId) {
            throw new BadRequestException('x-user-id header is required');
        }
        return this.documentService.findOne(userId, id);
    }
    update(userId, id, updateData) {
        if (!userId) {
            throw new BadRequestException('x-user-id header is required');
        }
        delete updateData.userId;
        delete updateData.id;
        return this.documentService.update(userId, id, updateData);
    }
    remove(userId, id) {
        if (!userId) {
            throw new BadRequestException('x-user-id header is required');
        }
        return this.documentService.remove(userId, id);
    }
};
__decorate([
    Post(),
    UseInterceptors(FileInterceptor('file')),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __param(2, UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], DocumentController.prototype, "create", null);
__decorate([
    Get(),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], DocumentController.prototype, "findOne", null);
__decorate([
    Patch(':id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], DocumentController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], DocumentController.prototype, "remove", null);
DocumentController = __decorate([
    Controller('documents'),
    __metadata("design:paramtypes", [DocumentService])
], DocumentController);
export { DocumentController };
//# sourceMappingURL=document.controller.js.map