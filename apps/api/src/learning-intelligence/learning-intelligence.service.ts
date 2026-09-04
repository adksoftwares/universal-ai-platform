import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class LearningIntelligenceService {
  constructor(private readonly prisma: PrismaService) {}

  // ======================
  // TOPIC
  // ======================
  async getTopics(userId: string) {
    return this.prisma.topic.findMany({
      where: { subject: { course: { userId } } }
    });
  }

  async getTopicById(id: string, userId: string) {
    const topic = await this.prisma.topic.findFirst({
      where: { id, subject: { course: { userId } } }
    });
    if (!topic) throw new NotFoundException('Topic not found');
    return topic;
  }

  async createTopic(userId: string, data: any) {
    // Basic verification of subject ownership
    if (data.subjectId) {
      const subject = await this.prisma.subject.findFirst({
        where: { id: data.subjectId, course: { userId } }
      });
      if (!subject) throw new NotFoundException('Subject not found or access denied');
    }
    return this.prisma.topic.create({ data });
  }

  async updateTopic(id: string, userId: string, data: any) {
    await this.getTopicById(id, userId); // verify
    return this.prisma.topic.update({
      where: { id },
      data
    });
  }

  async deleteTopic(id: string, userId: string) {
    await this.getTopicById(id, userId); // verify
    return this.prisma.topic.delete({
      where: { id }
    });
  }

  // ======================
  // STUDYSESSION
  // ======================
  async getStudySessions(userId: string) {
    return this.prisma.studySession.findMany({
      where: { userId }
    });
  }

  async getStudySessionById(id: string, userId: string) {
    const session = await this.prisma.studySession.findFirst({
      where: { id, userId }
    });
    if (!session) throw new NotFoundException('Study session not found');
    return session;
  }

  async createStudySession(userId: string, data: any) {
    return this.prisma.studySession.create({
      data: { ...data, userId }
    });
  }

  async updateStudySession(id: string, userId: string, data: any) {
    await this.getStudySessionById(id, userId);
    return this.prisma.studySession.update({
      where: { id },
      data
    });
  }

  async deleteStudySession(id: string, userId: string) {
    await this.getStudySessionById(id, userId);
    return this.prisma.studySession.delete({
      where: { id }
    });
  }

  // ======================
  // FLASHCARD
  // ======================
  async getFlashcards(userId: string) {
    return this.prisma.flashcard.findMany({
      where: { userId }
    });
  }

  async getFlashcardById(id: string, userId: string) {
    const card = await this.prisma.flashcard.findFirst({
      where: { id, userId }
    });
    if (!card) throw new NotFoundException('Flashcard not found');
    return card;
  }

  async createFlashcard(userId: string, data: any) {
    return this.prisma.flashcard.create({
      data: { ...data, userId }
    });
  }

  async updateFlashcard(id: string, userId: string, data: any) {
    await this.getFlashcardById(id, userId);
    return this.prisma.flashcard.update({
      where: { id },
      data
    });
  }

  async deleteFlashcard(id: string, userId: string) {
    await this.getFlashcardById(id, userId);
    return this.prisma.flashcard.delete({
      where: { id }
    });
  }

  // ======================
  // ASSESSMENT
  // ======================
  async getAssessments(userId: string) {
    return this.prisma.assessment.findMany({
      where: { userId }
    });
  }

  async getAssessmentById(id: string, userId: string) {
    const assessment = await this.prisma.assessment.findFirst({
      where: { id, userId }
    });
    if (!assessment) throw new NotFoundException('Assessment not found');
    return assessment;
  }

  async createAssessment(userId: string, data: any) {
    return this.prisma.assessment.create({
      data: { ...data, userId }
    });
  }

  async updateAssessment(id: string, userId: string, data: any) {
    await this.getAssessmentById(id, userId);
    return this.prisma.assessment.update({
      where: { id },
      data
    });
  }

  async deleteAssessment(id: string, userId: string) {
    await this.getAssessmentById(id, userId);
    return this.prisma.assessment.delete({
      where: { id }
    });
  }

  // ======================
  // KNOWLEDGE GRAPH
  // ======================
  async getSubjectGraph(id: string, userId: string) {
    const subject = await this.prisma.subject.findFirst({
      where: { id, course: { userId } },
      include: {
        topics: {
          include: {
            concepts: true
          }
        }
      }
    });

    if (!subject) {
      throw new NotFoundException('Subject not found or access denied');
    }

    return subject;
  }
}
