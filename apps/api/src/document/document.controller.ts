/// <reference types="multer" />
import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { DocumentService } from './document.service.js';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('documents')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(
    @Headers('x-user-id') userId: string,
    @Body() body: any,
    @UploadedFile() file?: Express.Multer.File
  ) {
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

  @Get()
  findAll(@Headers('x-user-id') userId: string) {
    if (!userId) {
      throw new BadRequestException('x-user-id header is required');
    }
    return this.documentService.findAll(userId);
  }

  @Get(':id')
  findOne(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) {
      throw new BadRequestException('x-user-id header is required');
    }
    return this.documentService.findOne(userId, id);
  }

  @Patch(':id')
  update(
    @Headers('x-user-id') userId: string,
    @Param('id') id: string,
    @Body() updateData: any
  ) {
    if (!userId) {
      throw new BadRequestException('x-user-id header is required');
    }
    // ensure we don't accidentally update things like userId or id
    delete updateData.userId;
    delete updateData.id;
    return this.documentService.update(userId, id, updateData);
  }

  @Delete(':id')
  remove(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) {
      throw new BadRequestException('x-user-id header is required');
    }
    return this.documentService.remove(userId, id);
  }
}
