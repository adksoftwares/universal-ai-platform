import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class CommunicationIntelligenceService {
  constructor(private readonly prisma: PrismaService) {}

  // CommunicationAccount
  async createAccount(userId: string, data: any) {
    return this.prisma.communicationAccount.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  async getAccounts(userId: string) {
    return this.prisma.communicationAccount.findMany({
      where: { userId },
    });
  }

  async getAccountById(userId: string, id: string) {
    return this.prisma.communicationAccount.findFirst({
      where: { id, userId },
    });
  }

  async updateAccount(userId: string, id: string, data: any) {
    return this.prisma.communicationAccount.updateMany({
      where: { id, userId },
      data,
    });
  }

  async deleteAccount(userId: string, id: string) {
    return this.prisma.communicationAccount.deleteMany({
      where: { id, userId },
    });
  }

  // FollowUp
  async createFollowUp(userId: string, data: any) {
    return this.prisma.followUp.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  async getFollowUps(userId: string) {
    return this.prisma.followUp.findMany({
      where: { userId },
    });
  }

  async getFollowUpById(userId: string, id: string) {
    return this.prisma.followUp.findFirst({
      where: { id, userId },
    });
  }

  async updateFollowUp(userId: string, id: string, data: any) {
    return this.prisma.followUp.updateMany({
      where: { id, userId },
      data,
    });
  }

  async deleteFollowUp(userId: string, id: string) {
    return this.prisma.followUp.deleteMany({
      where: { id, userId },
    });
  }

  // MeetingNote
  async createMeetingNote(userId: string, data: any) {
    return this.prisma.meetingNote.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  async getMeetingNotes(userId: string) {
    return this.prisma.meetingNote.findMany({
      where: { userId },
    });
  }

  async getMeetingNoteById(userId: string, id: string) {
    return this.prisma.meetingNote.findFirst({
      where: { id, userId },
    });
  }

  async updateMeetingNote(userId: string, id: string, data: any) {
    return this.prisma.meetingNote.updateMany({
      where: { id, userId },
      data,
    });
  }

  async deleteMeetingNote(userId: string, id: string) {
    return this.prisma.meetingNote.deleteMany({
      where: { id, userId },
    });
  }

  async generateDraft(prompt: string, tone: string) {
    return {
      draft: `[Mock AI Draft] Tone: ${tone || 'Neutral'} - Based on: ${prompt}. (Note: This is a generated draft and has not been sent.)`
    };
  }
}
