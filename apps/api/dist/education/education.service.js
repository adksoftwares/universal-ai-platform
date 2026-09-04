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
let EducationService = class EducationService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    getEducationRecords(userId) {
        return this.prisma.educationRecord.findMany({ where: { userId } });
    }
    getEducationRecordById(userId, id) {
        return this.prisma.educationRecord.findFirst({ where: { id, userId } });
    }
    createEducationRecord(userId, data) {
        return this.prisma.educationRecord.create({ data: { ...data, userId } });
    }
    updateEducationRecord(userId, id, data) {
        return this.prisma.educationRecord.updateMany({
            where: { id, userId },
            data,
        });
    }
    deleteEducationRecord(userId, id) {
        return this.prisma.educationRecord.deleteMany({ where: { id, userId } });
    }
    getCourses(userId) {
        return this.prisma.course.findMany({ where: { userId } });
    }
    getCourseById(userId, id) {
        return this.prisma.course.findFirst({ where: { id, userId } });
    }
    createCourse(userId, data) {
        return this.prisma.course.create({ data: { ...data, userId } });
    }
    updateCourse(userId, id, data) {
        return this.prisma.course.updateMany({
            where: { id, userId },
            data,
        });
    }
    deleteCourse(userId, id) {
        return this.prisma.course.deleteMany({ where: { id, userId } });
    }
    getSubjects(userId, courseId) {
        return this.prisma.subject.findMany({
            where: { courseId, course: { userId } },
        });
    }
    getSubjectById(userId, id) {
        return this.prisma.subject.findFirst({
            where: { id, course: { userId } },
        });
    }
    async createSubject(userId, courseId, data) {
        const course = await this.prisma.course.findFirst({ where: { id: courseId, userId } });
        if (!course)
            throw new Error('Course not found or unauthorized');
        return this.prisma.subject.create({ data: { ...data, courseId } });
    }
    async updateSubject(userId, id, data) {
        const subject = await this.prisma.subject.findFirst({ where: { id, course: { userId } } });
        if (!subject)
            throw new Error('Subject not found or unauthorized');
        return this.prisma.subject.update({
            where: { id },
            data,
        });
    }
    async deleteSubject(userId, id) {
        const subject = await this.prisma.subject.findFirst({ where: { id, course: { userId } } });
        if (!subject)
            throw new Error('Subject not found or unauthorized');
        return this.prisma.subject.delete({ where: { id } });
    }
    getExams(userId, subjectId) {
        return this.prisma.exam.findMany({
            where: { subjectId, subject: { course: { userId } } },
        });
    }
    getExamById(userId, id) {
        return this.prisma.exam.findFirst({
            where: { id, subject: { course: { userId } } },
        });
    }
    async createExam(userId, subjectId, data) {
        const subject = await this.prisma.subject.findFirst({ where: { id: subjectId, course: { userId } } });
        if (!subject)
            throw new Error('Subject not found or unauthorized');
        return this.prisma.exam.create({ data: { ...data, subjectId } });
    }
    async updateExam(userId, id, data) {
        const exam = await this.prisma.exam.findFirst({ where: { id, subject: { course: { userId } } } });
        if (!exam)
            throw new Error('Exam not found or unauthorized');
        return this.prisma.exam.update({
            where: { id },
            data,
        });
    }
    async deleteExam(userId, id) {
        const exam = await this.prisma.exam.findFirst({ where: { id, subject: { course: { userId } } } });
        if (!exam)
            throw new Error('Exam not found or unauthorized');
        return this.prisma.exam.delete({ where: { id } });
    }
};
EducationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], EducationService);
export { EducationService };
//# sourceMappingURL=education.service.js.map