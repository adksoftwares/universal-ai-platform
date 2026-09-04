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
import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { ReminderService } from './reminder.service.js';
let ReminderController = class ReminderController {
    reminderService;
    constructor(reminderService) {
        this.reminderService = reminderService;
    }
    create(userId, data) {
        return this.reminderService.create(userId, data);
    }
    findAll(userId) {
        return this.reminderService.findAll(userId);
    }
    findOne(userId, id) {
        return this.reminderService.findOne(userId, id);
    }
    update(userId, id, data) {
        return this.reminderService.update(userId, id, data);
    }
    remove(userId, id) {
        return this.reminderService.remove(userId, id);
    }
};
__decorate([
    Post(),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReminderController.prototype, "create", null);
__decorate([
    Get(),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReminderController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReminderController.prototype, "findOne", null);
__decorate([
    Patch(':id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], ReminderController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReminderController.prototype, "remove", null);
ReminderController = __decorate([
    Controller('reminders'),
    __metadata("design:paramtypes", [ReminderService])
], ReminderController);
export { ReminderController };
//# sourceMappingURL=reminder.controller.js.map