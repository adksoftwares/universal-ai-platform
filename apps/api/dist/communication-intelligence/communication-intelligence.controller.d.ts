import { CommunicationIntelligenceService } from './communication-intelligence.service.js';
export declare class CommunicationIntelligenceController {
    private readonly service;
    constructor(service: CommunicationIntelligenceService);
    createAccount(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        provider: string;
        accountName: string;
    }>;
    getAccounts(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        provider: string;
        accountName: string;
    }[]>;
    getAccountById(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        provider: string;
        accountName: string;
    } | null>;
    updateAccount(userId: string, id: string, data: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteAccount(userId: string, id: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    createFollowUp(userId: string, data: any): Promise<{
        topic: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        date: Date | null;
        status: string;
        person: string;
    }>;
    getFollowUps(userId: string): Promise<{
        topic: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        date: Date | null;
        status: string;
        person: string;
    }[]>;
    getFollowUpById(userId: string, id: string): Promise<{
        topic: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        date: Date | null;
        status: string;
        person: string;
    } | null>;
    updateFollowUp(userId: string, id: string, data: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteFollowUp(userId: string, id: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    createMeetingNote(userId: string, data: any): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        content: string;
        meetingId: string | null;
        actionItems: string | null;
        decisions: string | null;
    }>;
    getMeetingNotes(userId: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        content: string;
        meetingId: string | null;
        actionItems: string | null;
        decisions: string | null;
    }[]>;
    getMeetingNoteById(userId: string, id: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        content: string;
        meetingId: string | null;
        actionItems: string | null;
        decisions: string | null;
    } | null>;
    updateMeetingNote(userId: string, id: string, data: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteMeetingNote(userId: string, id: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    generateDraft(data: {
        prompt: string;
        tone: string;
    }): Promise<{
        draft: string;
    }>;
}
