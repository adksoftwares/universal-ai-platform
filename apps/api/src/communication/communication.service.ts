import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { Prisma } from '@prisma/client';

@Injectable()
export class CommunicationService {
  constructor(private prisma: PrismaService) {}

  // ---- Contacts ----

  async createContact(userId: string, data: Prisma.ContactCreateWithoutUserInput) {
    return this.prisma.contact.create({
      data: { ...data, userId },
    });
  }

  async findAllContacts(userId: string) {
    return this.prisma.contact.findMany({
      where: { userId },
      include: { importantDates: true },
    });
  }

  async findContactById(userId: string, id: string) {
    const contact = await this.prisma.contact.findFirst({
      where: { id, userId },
      include: { importantDates: true },
    });
    if (!contact) throw new NotFoundException('Contact not found');
    return contact;
  }

  async updateContact(userId: string, id: string, data: Prisma.ContactUpdateWithoutUserInput) {
    await this.findContactById(userId, id);
    return this.prisma.contact.update({
      where: { id },
      data,
    });
  }

  async deleteContact(userId: string, id: string) {
    await this.findContactById(userId, id);
    return this.prisma.contact.delete({
      where: { id },
    });
  }

  // ---- Communication Records ----

  async createCommunication(userId: string, data: Prisma.CommunicationRecordUncheckedCreateInput) {
    return this.prisma.communicationRecord.create({
      data: { ...data, userId },
    });
  }

  async findAllCommunications(userId: string) {
    return this.prisma.communicationRecord.findMany({
      where: { userId },
    });
  }

  async findCommunicationById(userId: string, id: string) {
    const record = await this.prisma.communicationRecord.findFirst({
      where: { id, userId },
    });
    if (!record) throw new NotFoundException('Communication record not found');
    return record;
  }

  async updateCommunication(userId: string, id: string, data: Prisma.CommunicationRecordUpdateWithoutUserInput) {
    await this.findCommunicationById(userId, id);
    return this.prisma.communicationRecord.update({
      where: { id },
      data,
    });
  }

  async deleteCommunication(userId: string, id: string) {
    await this.findCommunicationById(userId, id);
    return this.prisma.communicationRecord.delete({
      where: { id },
    });
  }

  // ---- Meetings ----

  async createMeeting(userId: string, data: Prisma.MeetingRecordCreateWithoutUserInput) {
    return this.prisma.meetingRecord.create({
      data: { ...data, userId },
    });
  }

  async findAllMeetings(userId: string) {
    return this.prisma.meetingRecord.findMany({
      where: { userId },
      include: { participants: true },
    });
  }

  async findMeetingById(userId: string, id: string) {
    const meeting = await this.prisma.meetingRecord.findFirst({
      where: { id, userId },
      include: { participants: true },
    });
    if (!meeting) throw new NotFoundException('Meeting not found');
    return meeting;
  }

  async updateMeeting(userId: string, id: string, data: Prisma.MeetingRecordUpdateWithoutUserInput) {
    await this.findMeetingById(userId, id);
    return this.prisma.meetingRecord.update({
      where: { id },
      data,
    });
  }

  async deleteMeeting(userId: string, id: string) {
    await this.findMeetingById(userId, id);
    return this.prisma.meetingRecord.delete({
      where: { id },
    });
  }
}
