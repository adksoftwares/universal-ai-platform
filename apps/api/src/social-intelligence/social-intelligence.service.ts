import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class SocialIntelligenceService {
  constructor(private readonly prisma: PrismaService) {}

  async createGroup(userId: string, data: any) {
    return this.prisma.socialGroup.create({
      data: { ...data, userId },
    });
  }

  async getGroups(userId: string) {
    return this.prisma.socialGroup.findMany({ where: { userId } });
  }

  async updateGroup(userId: string, id: string, data: any) {
    return this.prisma.socialGroup.updateMany({
      where: { id, userId },
      data,
    });
  }

  async deleteGroup(userId: string, id: string) {
    return this.prisma.socialGroup.deleteMany({
      where: { id, userId },
    });
  }

  async createEvent(userId: string, data: any) {
    return this.prisma.socialEvent.create({ data: { ...data, userId } });
  }

  async getEvents(userId: string) {
    return this.prisma.socialEvent.findMany({ where: { userId } });
  }

  async updateEvent(userId: string, id: string, data: any) {
    return this.prisma.socialEvent.updateMany({ where: { id, userId }, data });
  }

  async deleteEvent(userId: string, id: string) {
    return this.prisma.socialEvent.deleteMany({ where: { id, userId } });
  }

  async createGiftPlan(userId: string, data: any) {
    return this.prisma.giftPlan.create({ data: { ...data, userId } });
  }

  async getGiftPlans(userId: string) {
    return this.prisma.giftPlan.findMany({ where: { userId } });
  }

  async updateGiftPlan(userId: string, id: string, data: any) {
    return this.prisma.giftPlan.updateMany({ where: { id, userId }, data });
  }

  async deleteGiftPlan(userId: string, id: string) {
    return this.prisma.giftPlan.deleteMany({ where: { id, userId } });
  }

  async createSafetyPlan(userId: string, data: any) {
    return this.prisma.safetyPlan.create({ data: { ...data, userId } });
  }

  async getSafetyPlans(userId: string) {
    return this.prisma.safetyPlan.findMany({ where: { userId } });
  }

  async updateSafetyPlan(userId: string, id: string, data: any) {
    return this.prisma.safetyPlan.updateMany({ where: { id, userId }, data });
  }

  async deleteSafetyPlan(userId: string, id: string) {
    return this.prisma.safetyPlan.deleteMany({ where: { id, userId } });
  }

  async createLocationShare(userId: string, data: any) {
    return this.prisma.locationShare.create({ data: { ...data, userId } });
  }

  async getLocationShares(userId: string) {
    return this.prisma.locationShare.findMany({ where: { userId } });
  }

  async updateLocationShare(userId: string, id: string, data: any) {
    return this.prisma.locationShare.updateMany({ where: { id, userId }, data });
  }

  async deleteLocationShare(userId: string, id: string) {
    return this.prisma.locationShare.deleteMany({ where: { id, userId } });
  }

  async suggestPlanning(userId: string, eventDetails: any) {
    return {
      suggestion: `AI Suggestion for ${eventDetails?.title || 'the event'}:\n` +
        `Timeline: Start preparing 2 weeks in advance.\n` +
        `Shopping List: Consider picking up gifts and necessary supplies.\n` +
        `Reminder: Do not automatically share your location with all attendees without human confirmation.`
    };
  }
}
