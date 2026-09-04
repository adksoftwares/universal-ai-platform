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
let HealthIntelligenceService = class HealthIntelligenceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    createProvider(userId, data) {
        return this.prisma.healthProvider.create({ data: { ...data, userId } });
    }
    getProviders(userId) {
        return this.prisma.healthProvider.findMany({ where: { userId } });
    }
    getProvider(userId, id) {
        return this.prisma.healthProvider.findFirst({ where: { userId, id } });
    }
    updateProvider(userId, id, data) {
        return this.prisma.healthProvider.updateMany({
            where: { userId, id },
            data,
        });
    }
    deleteProvider(userId, id) {
        return this.prisma.healthProvider.deleteMany({ where: { userId, id } });
    }
    createMeasurement(userId, data) {
        return this.prisma.healthMeasurement.create({ data: { ...data, userId } });
    }
    getMeasurements(userId) {
        return this.prisma.healthMeasurement.findMany({ where: { userId } });
    }
    getMeasurement(userId, id) {
        return this.prisma.healthMeasurement.findFirst({ where: { userId, id } });
    }
    updateMeasurement(userId, id, data) {
        return this.prisma.healthMeasurement.updateMany({
            where: { userId, id },
            data,
        });
    }
    deleteMeasurement(userId, id) {
        return this.prisma.healthMeasurement.deleteMany({ where: { userId, id } });
    }
    createPreventiveCare(userId, data) {
        return this.prisma.preventiveCareRecord.create({ data: { ...data, userId } });
    }
    getPreventiveCares(userId) {
        return this.prisma.preventiveCareRecord.findMany({ where: { userId } });
    }
    getPreventiveCare(userId, id) {
        return this.prisma.preventiveCareRecord.findFirst({ where: { userId, id } });
    }
    updatePreventiveCare(userId, id, data) {
        return this.prisma.preventiveCareRecord.updateMany({
            where: { userId, id },
            data,
        });
    }
    deletePreventiveCare(userId, id) {
        return this.prisma.preventiveCareRecord.deleteMany({ where: { userId, id } });
    }
    async logMedicationDose(userId, medicationId, data) {
        const medication = await this.prisma.medication.findFirst({
            where: { id: medicationId, userId }
        });
        if (!medication) {
            throw new Error('Medication not found or unauthorized');
        }
        return this.prisma.medicationLog.create({
            data: { ...data, userId, medicationId }
        });
    }
    createActivityRecord(userId, data) {
        return this.prisma.activityRecord.create({ data: { ...data, userId } });
    }
    getActivityRecords(userId) {
        return this.prisma.activityRecord.findMany({ where: { userId } });
    }
    getActivityRecord(userId, id) {
        return this.prisma.activityRecord.findFirst({ where: { userId, id } });
    }
    updateActivityRecord(userId, id, data) {
        return this.prisma.activityRecord.updateMany({
            where: { userId, id },
            data,
        });
    }
    deleteActivityRecord(userId, id) {
        return this.prisma.activityRecord.deleteMany({ where: { userId, id } });
    }
    createSleepRecord(userId, data) {
        return this.prisma.sleepRecord.create({ data: { ...data, userId } });
    }
    getSleepRecords(userId) {
        return this.prisma.sleepRecord.findMany({ where: { userId } });
    }
    getSleepRecord(userId, id) {
        return this.prisma.sleepRecord.findFirst({ where: { userId, id } });
    }
    updateSleepRecord(userId, id, data) {
        return this.prisma.sleepRecord.updateMany({
            where: { userId, id },
            data,
        });
    }
    deleteSleepRecord(userId, id) {
        return this.prisma.sleepRecord.deleteMany({ where: { userId, id } });
    }
    createNutritionRecord(userId, data) {
        return this.prisma.nutritionRecord.create({ data: { ...data, userId } });
    }
    getNutritionRecords(userId) {
        return this.prisma.nutritionRecord.findMany({ where: { userId } });
    }
    getNutritionRecord(userId, id) {
        return this.prisma.nutritionRecord.findFirst({ where: { userId, id } });
    }
    updateNutritionRecord(userId, id, data) {
        return this.prisma.nutritionRecord.updateMany({
            where: { userId, id },
            data,
        });
    }
    deleteNutritionRecord(userId, id) {
        return this.prisma.nutritionRecord.deleteMany({ where: { userId, id } });
    }
    createHealthJournalEntry(userId, data) {
        return this.prisma.healthJournalEntry.create({ data: { ...data, userId } });
    }
    getHealthJournalEntries(userId) {
        return this.prisma.healthJournalEntry.findMany({ where: { userId } });
    }
    getHealthJournalEntry(userId, id) {
        return this.prisma.healthJournalEntry.findFirst({ where: { userId, id } });
    }
    updateHealthJournalEntry(userId, id, data) {
        return this.prisma.healthJournalEntry.updateMany({
            where: { userId, id },
            data,
        });
    }
    deleteHealthJournalEntry(userId, id) {
        return this.prisma.healthJournalEntry.deleteMany({ where: { userId, id } });
    }
    async syncWearable(userId) {
        const activity = await this.prisma.activityRecord.create({
            data: {
                userId,
                type: 'running',
                duration: 45,
                distance: 5.2,
                date: new Date(),
                source: 'wearable',
                notes: 'Mock synced run'
            }
        });
        const sleepEnd = new Date();
        const sleepStart = new Date(sleepEnd.getTime() - 8 * 60 * 60 * 1000);
        const sleep = await this.prisma.sleepRecord.create({
            data: {
                userId,
                sleepStart,
                sleepEnd,
                duration: 480,
                quality: 'Good',
                source: 'wearable',
                notes: 'Mock synced sleep'
            }
        });
        return { activity, sleep };
    }
    createHealthRecord(userId, data) { return this.prisma.healthRecord.create({ data: { ...data, userId } }); }
    getHealthRecords(userId) { return this.prisma.healthRecord.findMany({ where: { userId } }); }
    getHealthRecord(userId, id) { return this.prisma.healthRecord.findFirst({ where: { userId, id } }); }
    updateHealthRecord(userId, id, data) { return this.prisma.healthRecord.updateMany({ where: { userId, id }, data }); }
    deleteHealthRecord(userId, id) { return this.prisma.healthRecord.deleteMany({ where: { userId, id } }); }
    createSymptomLog(userId, data) { return this.prisma.symptomLog.create({ data: { ...data, userId } }); }
    getSymptomLogs(userId) { return this.prisma.symptomLog.findMany({ where: { userId } }); }
    getSymptomLog(userId, id) { return this.prisma.symptomLog.findFirst({ where: { userId, id } }); }
    updateSymptomLog(userId, id, data) { return this.prisma.symptomLog.updateMany({ where: { userId, id }, data }); }
    deleteSymptomLog(userId, id) { return this.prisma.symptomLog.deleteMany({ where: { userId, id } }); }
    createCaregiverAccess(userId, data) { return this.prisma.caregiverAccess.create({ data: { ...data, userId } }); }
    getCaregiverAccesses(userId) { return this.prisma.caregiverAccess.findMany({ where: { userId } }); }
    getCaregiverAccess(userId, id) { return this.prisma.caregiverAccess.findFirst({ where: { userId, id } }); }
    updateCaregiverAccess(userId, id, data) { return this.prisma.caregiverAccess.updateMany({ where: { userId, id }, data }); }
    deleteCaregiverAccess(userId, id) { return this.prisma.caregiverAccess.deleteMany({ where: { userId, id } }); }
    async explainDocument(userId, extractedText) {
        return "This information can have several possible explanations. A healthcare professional should interpret it in context.";
    }
};
HealthIntelligenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], HealthIntelligenceService);
export { HealthIntelligenceService };
//# sourceMappingURL=health-intelligence.service.js.map