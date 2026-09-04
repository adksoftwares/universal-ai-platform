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
let ConnectionIntelligenceService = class ConnectionIntelligenceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createTemplate(userId, data) {
        return this.prisma.communicationTemplate.create({
            data: { ...data, userId },
        });
    }
    async getTemplates(userId) {
        return this.prisma.communicationTemplate.findMany({
            where: { userId },
        });
    }
    async getTemplateById(userId, id) {
        return this.prisma.communicationTemplate.findFirst({
            where: { id, userId },
        });
    }
    async updateTemplate(userId, id, data) {
        return this.prisma.communicationTemplate.updateMany({
            where: { id, userId },
            data,
        });
    }
    async deleteTemplate(userId, id) {
        return this.prisma.communicationTemplate.deleteMany({
            where: { id, userId },
        });
    }
    async createBlockedContact(userId, data) {
        return this.prisma.blockedContact.create({
            data: { ...data, userId },
        });
    }
    async getBlockedContacts(userId) {
        return this.prisma.blockedContact.findMany({
            where: { userId },
        });
    }
    async getBlockedContactById(userId, id) {
        return this.prisma.blockedContact.findFirst({
            where: { id, userId },
        });
    }
    async updateBlockedContact(userId, id, data) {
        return this.prisma.blockedContact.updateMany({
            where: { id, userId },
            data,
        });
    }
    async deleteBlockedContact(userId, id) {
        return this.prisma.blockedContact.deleteMany({
            where: { id, userId },
        });
    }
    async rewriteMessage(userId, content, tone) {
        const mockedRewrite = `[MOCKED AI REWRITE - ${tone.toUpperCase()}]: ${content}`;
        const caveat = "\n\nCaveat: AI cannot legally verify the contents of this message.";
        return {
            rewrittenContent: mockedRewrite + caveat,
        };
    }
};
ConnectionIntelligenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ConnectionIntelligenceService);
export { ConnectionIntelligenceService };
//# sourceMappingURL=connection-intelligence.service.js.map