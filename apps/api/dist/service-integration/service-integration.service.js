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
let ServiceIntegrationService = class ServiceIntegrationService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createConnectedService(userId, data) {
        return this.prisma.connectedService.create({
            data: { ...data, userId },
        });
    }
    async getConnectedServices(userId) {
        return this.prisma.connectedService.findMany({
            where: { userId },
            include: { permissions: true },
        });
    }
    async deleteConnectedService(userId, id) {
        return this.prisma.connectedService.delete({
            where: { id, userId },
        });
    }
    async logExternalAction(userId, data) {
        return this.prisma.externalActionRecord.create({
            data: { ...data, userId },
        });
    }
    async getExternalActions(userId) {
        return this.prisma.externalActionRecord.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }
};
ServiceIntegrationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ServiceIntegrationService);
export { ServiceIntegrationService };
//# sourceMappingURL=service-integration.service.js.map