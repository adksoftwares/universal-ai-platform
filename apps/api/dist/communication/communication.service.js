var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
let CommunicationService = class CommunicationService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createContact(userId, data) {
        return this.prisma.contact.create({
            data: { ...data, userId },
        });
    }
    async findAllContacts(userId) {
        return this.prisma.contact.findMany({
            where: { userId },
            include: { importantDates: true },
        });
    }
    async findContactById(userId, id) {
        const contact = await this.prisma.contact.findFirst({
            where: { id, userId },
            include: { importantDates: true },
        });
        if (!contact)
            throw new NotFoundException('Contact not found');
        return contact;
    }
    async updateContact(userId, id, data) {
        await this.findContactById(userId, id);
        return this.prisma.contact.update({
            where: { id },
            data,
        });
    }
    async deleteContact(userId, id) {
        await this.findContactById(userId, id);
        return this.prisma.contact.delete({
            where: { id },
        });
    }
    async createCommunication(userId, data) {
        return this.prisma.communicationRecord.create({
            data: { ...data, userId },
        });
    }
    async findAllCommunications(userId) {
        return this.prisma.communicationRecord.findMany({
            where: { userId },
        });
    }
    async findCommunicationById(userId, id) {
        const record = await this.prisma.communicationRecord.findFirst({
            where: { id, userId },
        });
        if (!record)
            throw new NotFoundException('Communication record not found');
        return record;
    }
    async updateCommunication(userId, id, data) {
        await this.findCommunicationById(userId, id);
        return this.prisma.communicationRecord.update({
            where: { id },
            data,
        });
    }
    async deleteCommunication(userId, id) {
        await this.findCommunicationById(userId, id);
        return this.prisma.communicationRecord.delete({
            where: { id },
        });
    }
    async createMeeting(userId, data) {
        return this.prisma.meetingRecord.create({
            data: { ...data, userId },
        });
    }
    async findAllMeetings(userId) {
        return this.prisma.meetingRecord.findMany({
            where: { userId },
            include: { participants: true },
        });
    }
    async findMeetingById(userId, id) {
        const meeting = await this.prisma.meetingRecord.findFirst({
            where: { id, userId },
            include: { participants: true },
        });
        if (!meeting)
            throw new NotFoundException('Meeting not found');
        return meeting;
    }
    async updateMeeting(userId, id, data) {
        await this.findMeetingById(userId, id);
        return this.prisma.meetingRecord.update({
            where: { id },
            data,
        });
    }
    async deleteMeeting(userId, id) {
        await this.findMeetingById(userId, id);
        return this.prisma.meetingRecord.delete({
            where: { id },
        });
    }
};
CommunicationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], CommunicationService);
export { CommunicationService };
//# sourceMappingURL=communication.service.js.map