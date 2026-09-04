import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class ResearchIntelligenceService {
  constructor(private prisma: PrismaService) {}

  // --- Lesson ---
  async createLesson(userId: string, data: any) {
    const course = await this.prisma.course.findFirst({
      where: { id: data.courseId, userId },
    });
    if (!course) throw new NotFoundException('Course not found or unauthorized');
    return this.prisma.lesson.create({ data });
  }

  async findAllLessons(userId: string) {
    return this.prisma.lesson.findMany({
      where: { course: { userId } },
    });
  }

  async findOneLesson(userId: string, id: string) {
    return this.prisma.lesson.findFirst({
      where: { id, course: { userId } },
    });
  }

  async updateLesson(userId: string, id: string, data: any) {
    const lesson = await this.findOneLesson(userId, id);
    if (!lesson) throw new NotFoundException('Lesson not found or unauthorized');
    return this.prisma.lesson.update({
      where: { id },
      data,
    });
  }

  async removeLesson(userId: string, id: string) {
    const lesson = await this.findOneLesson(userId, id);
    if (!lesson) throw new NotFoundException('Lesson not found or unauthorized');
    return this.prisma.lesson.delete({
      where: { id },
    });
  }

  // --- StudyGroup ---
  async createStudyGroup(userId: string, data: any) {
    return this.prisma.studyGroup.create({
      data: {
        ...data,
        members: {
          create: {
            userId,
            role: 'owner',
          },
        },
      },
    });
  }

  async findAllStudyGroups(userId: string) {
    return this.prisma.studyGroup.findMany({
      where: { members: { some: { userId } } },
    });
  }

  async findOneStudyGroup(userId: string, id: string) {
    return this.prisma.studyGroup.findFirst({
      where: { id, members: { some: { userId } } },
    });
  }

  async updateStudyGroup(userId: string, id: string, data: any) {
    const group = await this.findOneStudyGroup(userId, id);
    if (!group) throw new NotFoundException('StudyGroup not found or unauthorized');
    return this.prisma.studyGroup.update({
      where: { id },
      data,
    });
  }

  async removeStudyGroup(userId: string, id: string) {
    const group = await this.findOneStudyGroup(userId, id);
    if (!group) throw new NotFoundException('StudyGroup not found or unauthorized');
    return this.prisma.studyGroup.delete({
      where: { id },
    });
  }

  // --- ResearchPaper ---
  async createResearchPaper(userId: string, data: any) {
    return this.prisma.researchPaper.create({
      data: { ...data, userId },
    });
  }

  async findAllResearchPapers(userId: string) {
    return this.prisma.researchPaper.findMany({
      where: { userId },
    });
  }

  async findOneResearchPaper(userId: string, id: string) {
    return this.prisma.researchPaper.findFirst({
      where: { id, userId },
    });
  }

  async updateResearchPaper(userId: string, id: string, data: any) {
    const paper = await this.findOneResearchPaper(userId, id);
    if (!paper) throw new NotFoundException('ResearchPaper not found or unauthorized');
    return this.prisma.researchPaper.update({
      where: { id },
      data,
    });
  }

  async removeResearchPaper(userId: string, id: string) {
    const paper = await this.findOneResearchPaper(userId, id);
    if (!paper) throw new NotFoundException('ResearchPaper not found or unauthorized');
    return this.prisma.researchPaper.delete({
      where: { id },
    });
  }

  // --- Citation ---
  async createCitation(userId: string, data: any) {
    const paper = await this.prisma.researchPaper.findFirst({
      where: { id: data.paperId, userId },
    });
    if (!paper) throw new NotFoundException('ResearchPaper not found or unauthorized');
    return this.prisma.citation.create({ data });
  }

  async findAllCitations(userId: string) {
    return this.prisma.citation.findMany({
      where: { paper: { userId } },
    });
  }

  async findOneCitation(userId: string, id: string) {
    return this.prisma.citation.findFirst({
      where: { id, paper: { userId } },
    });
  }

  async updateCitation(userId: string, id: string, data: any) {
    const citation = await this.findOneCitation(userId, id);
    if (!citation) throw new NotFoundException('Citation not found or unauthorized');
    return this.prisma.citation.update({
      where: { id },
      data,
    });
  }

  async removeCitation(userId: string, id: string) {
    const citation = await this.findOneCitation(userId, id);
    if (!citation) throw new NotFoundException('Citation not found or unauthorized');
    return this.prisma.citation.delete({
      where: { id },
    });
  }

  // --- Socratic Tutor ---
  async socraticTutor(userId: string, question: string) {
    return {
      tutorResponse: "That is an interesting question. What do you think are the fundamental principles underlying this concept?"
    };
  }
}
