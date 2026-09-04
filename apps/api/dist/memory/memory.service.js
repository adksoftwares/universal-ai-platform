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
let MemoryService = class MemoryService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(userId, data) {
        return this.prisma.memory.create({
            data: { ...data, userId },
        });
    }
    findAll(userId) {
        return this.prisma.memory.findMany({
            where: { userId },
        });
    }
    findOne(userId, id) {
        return this.prisma.memory.findFirst({
            where: { id, userId },
        });
    }
    update(userId, id, data) {
        return this.prisma.memory.updateMany({
            where: { id, userId },
            data,
        });
    }
    remove(userId, id) {
        return this.prisma.memory.deleteMany({
            where: { id, userId },
        });
    }
};
MemoryService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], MemoryService);
export { MemoryService };
//# sourceMappingURL=memory.service.js.map