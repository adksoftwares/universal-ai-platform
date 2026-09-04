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
let CommunicationIntelligenceService = class CommunicationIntelligenceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createAccount(userId, data) {
        return this.prisma.communicationAccount.create({
            data: {
                ...data,
                userId,
            },
        });
    }
    async getAccounts(userId) {
        return this.prisma.communicationAccount.findMany({
            where: { userId },
        });
    }
    async getAccountById(userId, id) {
        return this.prisma.communicationAccount.findFirst({
            where: { id, userId },
        });
    }
    async updateAccount(userId, id, data) {
        return this.prisma.communicationAccount.updateMany({
            where: { id, userId },
            data,
        });
    }
    async deleteAccount(userId, id) {
        return this.prisma.communicationAccount.deleteMany({
            where: { id, userId },
        });
    }
    async createFollowUp(userId, data) {
        return this.prisma.followUp.create({
            data: {
                ...data,
                userId,
            },
        });
    }
    async getFollowUps(userId) {
        return this.prisma.followUp.findMany({
            where: { userId },
        });
    }
    async getFollowUpById(userId, id) {
        return this.prisma.followUp.findFirst({
            where: { id, userId },
        });
    }
    async updateFollowUp(userId, id, data) {
        return this.prisma.followUp.updateMany({
            where: { id, userId },
            data,
        });
    }
    async deleteFollowUp(userId, id) {
        return this.prisma.followUp.deleteMany({
            where: { id, userId },
        });
    }
    async createMeetingNote(userId, data) {
        return this.prisma.meetingNote.create({
            data: {
                ...data,
                userId,
            },
        });
    }
    async getMeetingNotes(userId) {
        return this.prisma.meetingNote.findMany({
            where: { userId },
        });
    }
    async getMeetingNoteById(userId, id) {
        return this.prisma.meetingNote.findFirst({
            where: { id, userId },
        });
    }
    async updateMeetingNote(userId, id, data) {
        return this.prisma.meetingNote.updateMany({
            where: { id, userId },
            data,
        });
    }
    async deleteMeetingNote(userId, id) {
        return this.prisma.meetingNote.deleteMany({
            where: { id, userId },
        });
    }
    async generateDraft(prompt, tone) {
        return {
            draft: `[Mock AI Draft] Tone: ${tone || 'Neutral'} - Based on: ${prompt}. (Note: This is a generated draft and has not been sent.)`
        };
    }
};
CommunicationIntelligenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], CommunicationIntelligenceService);
export { CommunicationIntelligenceService };
//# sourceMappingURL=communication-intelligence.service.js.map