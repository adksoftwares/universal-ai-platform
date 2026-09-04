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
let DocumentProcessingService = class DocumentProcessingService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    processDocument(documentId) {
        setTimeout(async () => {
            try {
                await this.prisma.document.update({
                    where: { id: documentId },
                    data: {
                        status: 'ready',
                        extractedText: 'Mock extracted text from the document. This is where OCR or parser output would go.',
                        aiSummary: 'This is a mocked AI summary of the document contents.',
                        importantDates: {
                            create: [
                                {
                                    date: new Date(Date.now() + 86400000),
                                    description: 'Important deadline',
                                    source: 'Page 1',
                                    confidence: 'identified'
                                }
                            ]
                        },
                        suggestedActions: {
                            create: [
                                {
                                    actionType: 'task',
                                    title: 'Review the updated terms',
                                    source: 'Page 2',
                                    deadline: new Date(Date.now() + 86400000 * 2)
                                }
                            ]
                        }
                    }
                });
                console.log(`Document ${documentId} processed successfully.`);
            }
            catch (error) {
                console.error(`Error processing document ${documentId}:`, error);
                try {
                    await this.prisma.document.update({
                        where: { id: documentId },
                        data: { status: 'failed', error: 'Mock processing error' }
                    });
                }
                catch (e) {
                }
            }
        }, 5000);
    }
};
DocumentProcessingService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], DocumentProcessingService);
export { DocumentProcessingService };
//# sourceMappingURL=document-processing.service.js.map