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
let LearningService = class LearningService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createGoal(userId, data) {
        return this.prisma.learningGoal.create({
            data: { ...data, userId },
            include: { plans: { include: { stages: true } } },
        });
    }
    async getGoals(userId) {
        return this.prisma.learningGoal.findMany({
            where: { userId },
            include: { plans: { include: { stages: true } } },
        });
    }
    async getGoal(userId, id) {
        return this.prisma.learningGoal.findUnique({
            where: { id, userId },
            include: { plans: { include: { stages: true } } },
        });
    }
    async updateGoal(userId, id, data) {
        return this.prisma.learningGoal.update({
            where: { id, userId },
            data,
            include: { plans: { include: { stages: true } } },
        });
    }
    async deleteGoal(userId, id) {
        return this.prisma.learningGoal.delete({
            where: { id, userId },
        });
    }
};
LearningService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], LearningService);
export { LearningService };
//# sourceMappingURL=learning.service.js.map