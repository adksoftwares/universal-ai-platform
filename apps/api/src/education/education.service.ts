import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class EducationService {
  constructor(private prisma: PrismaService) {}

  // EducationRecord
  getEducationRecords(userId: string) {
    return this.prisma.educationRecord.findMany({ where: { userId } });
  }
  getEducationRecordById(userId: string, id: string) {
    return this.prisma.educationRecord.findFirst({ where: { id, userId } });
  }
  createEducationRecord(userId: string, data: any) {
    return this.prisma.educationRecord.create({ data: { ...data, userId } });
  }
  updateEducationRecord(userId: string, id: string, data: any) {
    return this.prisma.educationRecord.updateMany({
      where: { id, userId },
      data,
    });
  }
  deleteEducationRecord(userId: string, id: string) {
    return this.prisma.educationRecord.deleteMany({ where: { id, userId } });
  }

  // Course
  getCourses(userId: string) {
    return this.prisma.course.findMany({ where: { userId } });
  }
  getCourseById(userId: string, id: string) {
    return this.prisma.course.findFirst({ where: { id, userId } });
  }
  createCourse(userId: string, data: any) {
    return this.prisma.course.create({ data: { ...data, userId } });
  }
  updateCourse(userId: string, id: string, data: any) {
    return this.prisma.course.updateMany({
      where: { id, userId },
      data,
    });
  }
  deleteCourse(userId: string, id: string) {
    return this.prisma.course.deleteMany({ where: { id, userId } });
  }

  // Subject (nested under course)
  getSubjects(userId: string, courseId: string) {
    return this.prisma.subject.findMany({
      where: { courseId, course: { userId } },
    });
  }
  getSubjectById(userId: string, id: string) {
    return this.prisma.subject.findFirst({
      where: { id, course: { userId } },
    });
  }
  async createSubject(userId: string, courseId: string, data: any) {
    const course = await this.prisma.course.findFirst({ where: { id: courseId, userId } });
    if (!course) throw new Error('Course not found or unauthorized');
    return this.prisma.subject.create({ data: { ...data, courseId } });
  }
  async updateSubject(userId: string, id: string, data: any) {
    const subject = await this.prisma.subject.findFirst({ where: { id, course: { userId } } });
    if (!subject) throw new Error('Subject not found or unauthorized');
    return this.prisma.subject.update({
      where: { id },
      data,
    });
  }
  async deleteSubject(userId: string, id: string) {
    const subject = await this.prisma.subject.findFirst({ where: { id, course: { userId } } });
    if (!subject) throw new Error('Subject not found or unauthorized');
    return this.prisma.subject.delete({ where: { id } });
  }

  // Exam (nested under subject)
  getExams(userId: string, subjectId: string) {
    return this.prisma.exam.findMany({
      where: { subjectId, subject: { course: { userId } } },
    });
  }
  getExamById(userId: string, id: string) {
    return this.prisma.exam.findFirst({
      where: { id, subject: { course: { userId } } },
    });
  }
  async createExam(userId: string, subjectId: string, data: any) {
    const subject = await this.prisma.subject.findFirst({ where: { id: subjectId, course: { userId } } });
    if (!subject) throw new Error('Subject not found or unauthorized');
    return this.prisma.exam.create({ data: { ...data, subjectId } });
  }
  async updateExam(userId: string, id: string, data: any) {
    const exam = await this.prisma.exam.findFirst({ where: { id, subject: { course: { userId } } } });
    if (!exam) throw new Error('Exam not found or unauthorized');
    return this.prisma.exam.update({
      where: { id },
      data,
    });
  }
  async deleteExam(userId: string, id: string) {
    const exam = await this.prisma.exam.findFirst({ where: { id, subject: { course: { userId } } } });
    if (!exam) throw new Error('Exam not found or unauthorized');
    return this.prisma.exam.delete({ where: { id } });
  }
}
