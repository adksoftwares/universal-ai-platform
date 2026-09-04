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
import { TaskService } from './task.service.js';
let TaskController = class TaskController {
    taskService;
    constructor(taskService) {
        this.taskService = taskService;
    }
    create(userId, data) {
        return this.taskService.create(userId, data);
    }
    findAll(userId) {
        return this.taskService.findAll(userId);
    }
    findOne(userId, id) {
        return this.taskService.findOne(userId, id);
    }
    update(userId, id, data) {
        return this.taskService.update(userId, id, data);
    }
    remove(userId, id) {
        return this.taskService.remove(userId, id);
    }
};
__decorate([
    Post(),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "create", null);
__decorate([
    Get(),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "findOne", null);
__decorate([
    Patch(':id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "remove", null);
TaskController = __decorate([
    Controller('tasks'),
    __metadata("design:paramtypes", [TaskService])
], TaskController);
export { TaskController };
//# sourceMappingURL=task.controller.js.map