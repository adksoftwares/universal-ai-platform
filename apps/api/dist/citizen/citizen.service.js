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
let CitizenService = class CitizenService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getServices() {
        return this.prisma.governmentService.findMany({
            include: {
                jurisdiction: true,
                sources: true,
                requirements: true,
            },
        });
    }
    async getBookmarks(userId) {
        return this.prisma.serviceBookmark.findMany({
            where: { userId },
            include: { service: true },
        });
    }
    async addBookmark(userId, data) {
        return this.prisma.serviceBookmark.create({
            data: { ...data, userId },
        });
    }
    async removeBookmark(userId, id) {
        return this.prisma.serviceBookmark.deleteMany({
            where: { id, userId },
        });
    }
    async getApplications(userId) {
        return this.prisma.serviceApplication.findMany({
            where: { userId },
            include: { service: true },
        });
    }
    async createApplication(userId, data) {
        return this.prisma.serviceApplication.create({
            data: { ...data, userId },
        });
    }
    async updateApplication(userId, id, data) {
        return this.prisma.serviceApplication.updateMany({
            where: { id, userId },
            data,
        });
    }
    async removeApplication(userId, id) {
        return this.prisma.serviceApplication.deleteMany({
            where: { id, userId },
        });
    }
    async verifySource(sourceId) {
        return this.prisma.serviceSource.update({
            where: { id: sourceId },
            data: { lastVerified: new Date() },
        });
    }
};
CitizenService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], CitizenService);
export { CitizenService };
//# sourceMappingURL=citizen.service.js.map