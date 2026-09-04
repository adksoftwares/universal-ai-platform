import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class ConnectionIntelligenceService {
  constructor(private readonly prisma: PrismaService) {}

  // CommunicationTemplate CRUD
  async createTemplate(userId: string, data: any) {
    return this.prisma.communicationTemplate.create({
      data: { ...data, userId },
    });
  }

  async getTemplates(userId: string) {
    return this.prisma.communicationTemplate.findMany({
      where: { userId },
    });
  }

  async getTemplateById(userId: string, id: string) {
    return this.prisma.communicationTemplate.findFirst({
      where: { id, userId },
    });
  }

  async updateTemplate(userId: string, id: string, data: any) {
    return this.prisma.communicationTemplate.updateMany({
      where: { id, userId },
      data,
    });
  }

  async deleteTemplate(userId: string, id: string) {
    return this.prisma.communicationTemplate.deleteMany({
      where: { id, userId },
    });
  }

  // BlockedContact CRUD
  async createBlockedContact(userId: string, data: any) {
    return this.prisma.blockedContact.create({
      data: { ...data, userId },
    });
  }

  async getBlockedContacts(userId: string) {
    return this.prisma.blockedContact.findMany({
      where: { userId },
    });
  }

  async getBlockedContactById(userId: string, id: string) {
    return this.prisma.blockedContact.findFirst({
      where: { id, userId },
    });
  }

  async updateBlockedContact(userId: string, id: string, data: any) {
    return this.prisma.blockedContact.updateMany({
      where: { id, userId },
      data,
    });
  }

  async deleteBlockedContact(userId: string, id: string) {
    return this.prisma.blockedContact.deleteMany({
      where: { id, userId },
    });
  }

  // AI Assistant Rewrite
  async rewriteMessage(userId: string, content: string, tone: string) {
    // Mocked AI string
    const mockedRewrite = `[MOCKED AI REWRITE - ${tone.toUpperCase()}]: ${content}`;
    const caveat = "\n\nCaveat: AI cannot legally verify the contents of this message.";
    
    return {
      rewrittenContent: mockedRewrite + caveat,
    };
  }
}
