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
let CareerService = class CareerService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getProfile(userId) {
        return this.prisma.careerProfile.findUnique({
            where: { userId },
        });
    }
    async updateProfile(userId, data) {
        return this.prisma.careerProfile.upsert({
            where: { userId },
            update: data,
            create: { ...data, userId },
        });
    }
    async createSkill(userId, data) {
        return this.prisma.skill.create({
            data: { ...data, userId },
        });
    }
    async getSkills(userId) {
        return this.prisma.skill.findMany({
            where: { userId },
        });
    }
    async updateSkill(userId, id, data) {
        return this.prisma.skill.update({
            where: { id, userId },
            data,
        });
    }
    async deleteSkill(userId, id) {
        return this.prisma.skill.delete({
            where: { id, userId },
        });
    }
    async createProject(userId, data) {
        return this.prisma.project.create({
            data: { ...data, userId },
        });
    }
    async getProjects(userId) {
        return this.prisma.project.findMany({
            where: { userId },
        });
    }
    async updateProject(userId, id, data) {
        return this.prisma.project.update({
            where: { id, userId },
            data,
        });
    }
    async deleteProject(userId, id) {
        return this.prisma.project.delete({
            where: { id, userId },
        });
    }
};
CareerService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], CareerService);
export { CareerService };
//# sourceMappingURL=career.service.js.map