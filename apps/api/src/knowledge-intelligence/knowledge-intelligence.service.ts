import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class KnowledgeIntelligenceService {
  constructor(private readonly prisma: PrismaService) {}

  async createKnowledgeCollection(userId: string, data: { name: string; description?: string }) {
    return this.prisma.knowledgeCollection.create({
      data: {
        userId,
        ...data,
      },
    });
  }

  async getKnowledgeCollections(userId: string) {
    return this.prisma.knowledgeCollection.findMany({
      where: { userId },
    });
  }

  async updateKnowledgeCollection(userId: string, id: string, data: { name?: string; description?: string }) {
    const collection = await this.prisma.knowledgeCollection.findUnique({ where: { id } });
    if (!collection || collection.userId !== userId) throw new NotFoundException('Collection not found');
    return this.prisma.knowledgeCollection.update({
      where: { id },
      data,
    });
  }

  async deleteKnowledgeCollection(userId: string, id: string) {
    const collection = await this.prisma.knowledgeCollection.findUnique({ where: { id } });
    if (!collection || collection.userId !== userId) throw new NotFoundException('Collection not found');
    return this.prisma.knowledgeCollection.delete({
      where: { id },
    });
  }

  async createKnowledgeNote(userId: string, data: { collectionId?: string; title: string; content: string }) {
    return this.prisma.knowledgeNote.create({
      data: {
        userId,
        ...data,
      },
    });
  }

  async getKnowledgeNotes(userId: string) {
    return this.prisma.knowledgeNote.findMany({
      where: { userId },
    });
  }

  async updateKnowledgeNote(userId: string, id: string, data: { title?: string; content?: string; collectionId?: string }) {
    const note = await this.prisma.knowledgeNote.findUnique({ where: { id } });
    if (!note || note.userId !== userId) throw new NotFoundException('Note not found');
    return this.prisma.knowledgeNote.update({
      where: { id },
      data,
    });
  }

  async deleteKnowledgeNote(userId: string, id: string) {
    const note = await this.prisma.knowledgeNote.findUnique({ where: { id } });
    if (!note || note.userId !== userId) throw new NotFoundException('Note not found');
    return this.prisma.knowledgeNote.delete({
      where: { id },
    });
  }

  async createQuiz(userId: string, data: { title: string; topic?: string; difficulty?: string }) {
    return this.prisma.quiz.create({
      data: {
        userId,
        ...data,
      },
    });
  }

  async getQuizzes(userId: string) {
    return this.prisma.quiz.findMany({
      where: { userId },
    });
  }

  async updateQuiz(userId: string, id: string, data: { title?: string; topic?: string; difficulty?: string }) {
    const quiz = await this.prisma.quiz.findUnique({ where: { id } });
    if (!quiz || quiz.userId !== userId) throw new NotFoundException('Quiz not found');
    return this.prisma.quiz.update({
      where: { id },
      data,
    });
  }

  async deleteQuiz(userId: string, id: string) {
    const quiz = await this.prisma.quiz.findUnique({ where: { id } });
    if (!quiz || quiz.userId !== userId) throw new NotFoundException('Quiz not found');
    return this.prisma.quiz.delete({
      where: { id },
    });
  }

  async askDocument(userId: string, documentId: string, prompt: string) {
    // Return mocked AI explanation
    return {
      answer: `Based on the selected PDF (documentId: ${documentId}), ${prompt} is defined as... [MOCKED RESPONSE]`
    };
  }
}
