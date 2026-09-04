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
import { Controller, Get, Post, Put, Delete, Body, Param, Headers, HttpException, HttpStatus } from '@nestjs/common';
import { HealthIntelligenceService } from './health-intelligence.service.js';
let HealthIntelligenceController = class HealthIntelligenceController {
    healthIntelligenceService;
    constructor(healthIntelligenceService) {
        this.healthIntelligenceService = healthIntelligenceService;
    }
    createProvider(userId, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.createProvider(userId, data);
    }
    getProviders(userId) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.getProviders(userId);
    }
    getProvider(userId, id) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.getProvider(userId, id);
    }
    updateProvider(userId, id, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.updateProvider(userId, id, data);
    }
    deleteProvider(userId, id) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.deleteProvider(userId, id);
    }
    createMeasurement(userId, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.createMeasurement(userId, data);
    }
    getMeasurements(userId) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.getMeasurements(userId);
    }
    getMeasurement(userId, id) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.getMeasurement(userId, id);
    }
    updateMeasurement(userId, id, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.updateMeasurement(userId, id, data);
    }
    deleteMeasurement(userId, id) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.deleteMeasurement(userId, id);
    }
    createPreventiveCare(userId, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.createPreventiveCare(userId, data);
    }
    getPreventiveCares(userId) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.getPreventiveCares(userId);
    }
    getPreventiveCare(userId, id) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.getPreventiveCare(userId, id);
    }
    updatePreventiveCare(userId, id, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.updatePreventiveCare(userId, id, data);
    }
    deletePreventiveCare(userId, id) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.deletePreventiveCare(userId, id);
    }
    async logMedicationDose(userId, medicationId, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        try {
            return await this.healthIntelligenceService.logMedicationDose(userId, medicationId, data);
        }
        catch (e) {
            throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
        }
    }
    createActivityRecord(userId, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.createActivityRecord(userId, data);
    }
    getActivityRecords(userId) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.getActivityRecords(userId);
    }
    getActivityRecord(userId, id) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.getActivityRecord(userId, id);
    }
    updateActivityRecord(userId, id, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.updateActivityRecord(userId, id, data);
    }
    deleteActivityRecord(userId, id) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.deleteActivityRecord(userId, id);
    }
    createSleepRecord(userId, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.createSleepRecord(userId, data);
    }
    getSleepRecords(userId) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.getSleepRecords(userId);
    }
    getSleepRecord(userId, id) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.getSleepRecord(userId, id);
    }
    updateSleepRecord(userId, id, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.updateSleepRecord(userId, id, data);
    }
    deleteSleepRecord(userId, id) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.deleteSleepRecord(userId, id);
    }
    createNutritionRecord(userId, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.createNutritionRecord(userId, data);
    }
    getNutritionRecords(userId) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.getNutritionRecords(userId);
    }
    getNutritionRecord(userId, id) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.getNutritionRecord(userId, id);
    }
    updateNutritionRecord(userId, id, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.updateNutritionRecord(userId, id, data);
    }
    deleteNutritionRecord(userId, id) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.deleteNutritionRecord(userId, id);
    }
    createHealthJournalEntry(userId, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.createHealthJournalEntry(userId, data);
    }
    getHealthJournalEntries(userId) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.getHealthJournalEntries(userId);
    }
    getHealthJournalEntry(userId, id) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.getHealthJournalEntry(userId, id);
    }
    updateHealthJournalEntry(userId, id, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.updateHealthJournalEntry(userId, id, data);
    }
    deleteHealthJournalEntry(userId, id) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.deleteHealthJournalEntry(userId, id);
    }
    syncWearable(userId) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.syncWearable(userId);
    }
    createHealthRecord(userId, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.createHealthRecord(userId, data);
    }
    getHealthRecords(userId) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.getHealthRecords(userId);
    }
    getHealthRecord(userId, id) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.getHealthRecord(userId, id);
    }
    updateHealthRecord(userId, id, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.updateHealthRecord(userId, id, data);
    }
    deleteHealthRecord(userId, id) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.deleteHealthRecord(userId, id);
    }
    createSymptomLog(userId, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.createSymptomLog(userId, data);
    }
    getSymptomLogs(userId) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.getSymptomLogs(userId);
    }
    getSymptomLog(userId, id) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.getSymptomLog(userId, id);
    }
    updateSymptomLog(userId, id, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.updateSymptomLog(userId, id, data);
    }
    deleteSymptomLog(userId, id) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.deleteSymptomLog(userId, id);
    }
    createCaregiverAccess(userId, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.createCaregiverAccess(userId, data);
    }
    getCaregiverAccesses(userId) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.getCaregiverAccesses(userId);
    }
    getCaregiverAccess(userId, id) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.getCaregiverAccess(userId, id);
    }
    updateCaregiverAccess(userId, id, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.updateCaregiverAccess(userId, id, data);
    }
    deleteCaregiverAccess(userId, id) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.deleteCaregiverAccess(userId, id);
    }
    explainDocument(userId, data) {
        if (!userId)
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        return this.healthIntelligenceService.explainDocument(userId, data.extractedText);
    }
};
__decorate([
    Post('provider'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "createProvider", null);
__decorate([
    Get('provider'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "getProviders", null);
__decorate([
    Get('provider/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "getProvider", null);
__decorate([
    Put('provider/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "updateProvider", null);
__decorate([
    Delete('provider/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "deleteProvider", null);
__decorate([
    Post('measurement'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "createMeasurement", null);
__decorate([
    Get('measurement'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "getMeasurements", null);
__decorate([
    Get('measurement/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "getMeasurement", null);
__decorate([
    Put('measurement/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "updateMeasurement", null);
__decorate([
    Delete('measurement/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "deleteMeasurement", null);
__decorate([
    Post('preventive-care'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "createPreventiveCare", null);
__decorate([
    Get('preventive-care'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "getPreventiveCares", null);
__decorate([
    Get('preventive-care/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "getPreventiveCare", null);
__decorate([
    Put('preventive-care/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "updatePreventiveCare", null);
__decorate([
    Delete('preventive-care/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "deletePreventiveCare", null);
__decorate([
    Post('medication/:medicationId/log'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('medicationId')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], HealthIntelligenceController.prototype, "logMedicationDose", null);
__decorate([
    Post('activity'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "createActivityRecord", null);
__decorate([
    Get('activity'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "getActivityRecords", null);
__decorate([
    Get('activity/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "getActivityRecord", null);
__decorate([
    Put('activity/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "updateActivityRecord", null);
__decorate([
    Delete('activity/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "deleteActivityRecord", null);
__decorate([
    Post('sleep'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "createSleepRecord", null);
__decorate([
    Get('sleep'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "getSleepRecords", null);
__decorate([
    Get('sleep/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "getSleepRecord", null);
__decorate([
    Put('sleep/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "updateSleepRecord", null);
__decorate([
    Delete('sleep/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "deleteSleepRecord", null);
__decorate([
    Post('nutrition'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "createNutritionRecord", null);
__decorate([
    Get('nutrition'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "getNutritionRecords", null);
__decorate([
    Get('nutrition/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "getNutritionRecord", null);
__decorate([
    Put('nutrition/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "updateNutritionRecord", null);
__decorate([
    Delete('nutrition/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "deleteNutritionRecord", null);
__decorate([
    Post('journal'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "createHealthJournalEntry", null);
__decorate([
    Get('journal'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "getHealthJournalEntries", null);
__decorate([
    Get('journal/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "getHealthJournalEntry", null);
__decorate([
    Put('journal/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "updateHealthJournalEntry", null);
__decorate([
    Delete('journal/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "deleteHealthJournalEntry", null);
__decorate([
    Post('sync-wearable'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "syncWearable", null);
__decorate([
    Post('record'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "createHealthRecord", null);
__decorate([
    Get('record'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "getHealthRecords", null);
__decorate([
    Get('record/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "getHealthRecord", null);
__decorate([
    Put('record/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "updateHealthRecord", null);
__decorate([
    Delete('record/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "deleteHealthRecord", null);
__decorate([
    Post('symptom-log'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "createSymptomLog", null);
__decorate([
    Get('symptom-log'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "getSymptomLogs", null);
__decorate([
    Get('symptom-log/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "getSymptomLog", null);
__decorate([
    Put('symptom-log/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "updateSymptomLog", null);
__decorate([
    Delete('symptom-log/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "deleteSymptomLog", null);
__decorate([
    Post('caregiver-access'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "createCaregiverAccess", null);
__decorate([
    Get('caregiver-access'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "getCaregiverAccesses", null);
__decorate([
    Get('caregiver-access/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "getCaregiverAccess", null);
__decorate([
    Put('caregiver-access/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "updateCaregiverAccess", null);
__decorate([
    Delete('caregiver-access/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "deleteCaregiverAccess", null);
__decorate([
    Post('documents/explain'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HealthIntelligenceController.prototype, "explainDocument", null);
HealthIntelligenceController = __decorate([
    Controller('health-intelligence'),
    __metadata("design:paramtypes", [HealthIntelligenceService])
], HealthIntelligenceController);
export { HealthIntelligenceController };
//# sourceMappingURL=health-intelligence.controller.js.map