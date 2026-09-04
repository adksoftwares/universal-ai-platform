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
let SocialIntelligenceService = class SocialIntelligenceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createGroup(userId, data) {
        return this.prisma.socialGroup.create({
            data: { ...data, userId },
        });
    }
    async getGroups(userId) {
        return this.prisma.socialGroup.findMany({ where: { userId } });
    }
    async updateGroup(userId, id, data) {
        return this.prisma.socialGroup.updateMany({
            where: { id, userId },
            data,
        });
    }
    async deleteGroup(userId, id) {
        return this.prisma.socialGroup.deleteMany({
            where: { id, userId },
        });
    }
    async createEvent(userId, data) {
        return this.prisma.socialEvent.create({ data: { ...data, userId } });
    }
    async getEvents(userId) {
        return this.prisma.socialEvent.findMany({ where: { userId } });
    }
    async updateEvent(userId, id, data) {
        return this.prisma.socialEvent.updateMany({ where: { id, userId }, data });
    }
    async deleteEvent(userId, id) {
        return this.prisma.socialEvent.deleteMany({ where: { id, userId } });
    }
    async createGiftPlan(userId, data) {
        return this.prisma.giftPlan.create({ data: { ...data, userId } });
    }
    async getGiftPlans(userId) {
        return this.prisma.giftPlan.findMany({ where: { userId } });
    }
    async updateGiftPlan(userId, id, data) {
        return this.prisma.giftPlan.updateMany({ where: { id, userId }, data });
    }
    async deleteGiftPlan(userId, id) {
        return this.prisma.giftPlan.deleteMany({ where: { id, userId } });
    }
    async createSafetyPlan(userId, data) {
        return this.prisma.safetyPlan.create({ data: { ...data, userId } });
    }
    async getSafetyPlans(userId) {
        return this.prisma.safetyPlan.findMany({ where: { userId } });
    }
    async updateSafetyPlan(userId, id, data) {
        return this.prisma.safetyPlan.updateMany({ where: { id, userId }, data });
    }
    async deleteSafetyPlan(userId, id) {
        return this.prisma.safetyPlan.deleteMany({ where: { id, userId } });
    }
    async createLocationShare(userId, data) {
        return this.prisma.locationShare.create({ data: { ...data, userId } });
    }
    async getLocationShares(userId) {
        return this.prisma.locationShare.findMany({ where: { userId } });
    }
    async updateLocationShare(userId, id, data) {
        return this.prisma.locationShare.updateMany({ where: { id, userId }, data });
    }
    async deleteLocationShare(userId, id) {
        return this.prisma.locationShare.deleteMany({ where: { id, userId } });
    }
    async suggestPlanning(userId, eventDetails) {
        return {
            suggestion: `AI Suggestion for ${eventDetails?.title || 'the event'}:\n` +
                `Timeline: Start preparing 2 weeks in advance.\n` +
                `Shopping List: Consider picking up gifts and necessary supplies.\n` +
                `Reminder: Do not automatically share your location with all attendees without human confirmation.`
        };
    }
};
SocialIntelligenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], SocialIntelligenceService);
export { SocialIntelligenceService };
//# sourceMappingURL=social-intelligence.service.js.map