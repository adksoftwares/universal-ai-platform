import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class DocumentProcessingService {
  constructor(private prisma: PrismaService) {}

  processDocument(documentId: string) {
    // Mock background processing
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
                  date: new Date(Date.now() + 86400000), // Tomorrow
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
      } catch (error) {
        console.error(`Error processing document ${documentId}:`, error);
        try {
          await this.prisma.document.update({
            where: { id: documentId },
            data: { status: 'failed', error: 'Mock processing error' }
          });
        } catch (e) {
          // ignore
        }
      }
    }, 5000); // 5 seconds mock delay
  }
}
