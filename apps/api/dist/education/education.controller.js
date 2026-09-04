var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Post, Put, Delete, Param, Body, Headers, UnauthorizedException } from '@nestjs/common';
import { EducationService } from './education.service.js';
let EducationController = class EducationController {
    educationService;
    constructor(educationService) {
        this.educationService = educationService;
    }
    extractUserId(userId) {
        if (!userId) {
            throw new UnauthorizedException('x-user-id header is required');
        }
        return userId;
    }
    getEducationRecords(userId) {
        return this.educationService.getEducationRecords(this.extractUserId(userId));
    }
    getEducationRecordById(userId, id) {
        return this.educationService.getEducationRecordById(this.extractUserId(userId), id);
    }
    createEducationRecord(userId, data) {
        return this.educationService.createEducationRecord(this.extractUserId(userId), data);
    }
    updateEducationRecord(userId, id, data) {
        return this.educationService.updateEducationRecord(this.extractUserId(userId), id, data);
    }
    deleteEducationRecord(userId, id) {
        return this.educationService.deleteEducationRecord(this.extractUserId(userId), id);
    }
    getCourses(userId) {
        return this.educationService.getCourses(this.extractUserId(userId));
    }
    getCourseById(userId, id) {
        return this.educationService.getCourseById(this.extractUserId(userId), id);
    }
    createCourse(userId, data) {
        return this.educationService.createCourse(this.extractUserId(userId), data);
    }
    updateCourse(userId, id, data) {
        return this.educationService.updateCourse(this.extractUserId(userId), id, data);
    }
    deleteCourse(userId, id) {
        return this.educationService.deleteCourse(this.extractUserId(userId), id);
    }
    getSubjects(userId, courseId) {
        return this.educationService.getSubjects(this.extractUserId(userId), courseId);
    }
    getSubjectById(userId, id) {
        return this.educationService.getSubjectById(this.extractUserId(userId), id);
    }
    createSubject(userId, courseId, data) {
        return this.educationService.createSubject(this.extractUserId(userId), courseId, data);
    }
    updateSubject(userId, id, data) {
        return this.educationService.updateSubject(this.extractUserId(userId), id, data);
    }
    deleteSubject(userId, id) {
        return this.educationService.deleteSubject(this.extractUserId(userId), id);
    }
    getExams(userId, subjectId) {
        return this.educationService.getExams(this.extractUserId(userId), subjectId);
    }
    getExamById(userId, id) {
        return this.educationService.getExamById(this.extractUserId(userId), id);
    }
    createExam(userId, subjectId, data) {
        return this.educationService.createExam(this.extractUserId(userId), subjectId, data);
    }
    updateExam(userId, id, data) {
        return this.educationService.updateExam(this.extractUserId(userId), id, data);
    }
    deleteExam(userId, id) {
        return this.educationService.deleteExam(this.extractUserId(userId), id);
    }
};
__decorate([
    Get('records'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "getEducationRecords", null);
__decorate([
    Get('records/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "getEducationRecordById", null);
__decorate([
    Post('records'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "createEducationRecord", null);
__decorate([
    Put('records/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "updateEducationRecord", null);
__decorate([
    Delete('records/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "deleteEducationRecord", null);
__decorate([
    Get('courses'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "getCourses", null);
__decorate([
    Get('courses/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "getCourseById", null);
__decorate([
    Post('courses'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "createCourse", null);
__decorate([
    Put('courses/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "updateCourse", null);
__decorate([
    Delete('courses/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "deleteCourse", null);
__decorate([
    Get('courses/:courseId/subjects'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('courseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "getSubjects", null);
__decorate([
    Get('subjects/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "getSubjectById", null);
__decorate([
    Post('courses/:courseId/subjects'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('courseId')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "createSubject", null);
__decorate([
    Put('subjects/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "updateSubject", null);
__decorate([
    Delete('subjects/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "deleteSubject", null);
__decorate([
    Get('subjects/:subjectId/exams'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('subjectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "getExams", null);
__decorate([
    Get('exams/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "getExamById", null);
__decorate([
    Post('subjects/:subjectId/exams'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('subjectId')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "createExam", null);
__decorate([
    Put('exams/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "updateExam", null);
__decorate([
    Delete('exams/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "deleteExam", null);
EducationController = __decorate([
    Controller('education'),
    __metadata("design:paramtypes", [EducationService])
], EducationController);
export { EducationController };
//# sourceMappingURL=education.controller.js.map