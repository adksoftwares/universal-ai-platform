import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class HealthIntelligenceService {
  constructor(private readonly prisma: PrismaService) {}

  // HealthProvider CRUD
  createProvider(userId: string, data: any) {
    return this.prisma.healthProvider.create({ data: { ...data, userId } });
  }
  getProviders(userId: string) {
    return this.prisma.healthProvider.findMany({ where: { userId } });
  }
  getProvider(userId: string, id: string) {
    return this.prisma.healthProvider.findFirst({ where: { userId, id } });
  }
  updateProvider(userId: string, id: string, data: any) {
    return this.prisma.healthProvider.updateMany({
      where: { userId, id },
      data,
    });
  }
  deleteProvider(userId: string, id: string) {
    return this.prisma.healthProvider.deleteMany({ where: { userId, id } });
  }

  // HealthMeasurement CRUD
  createMeasurement(userId: string, data: any) {
    return this.prisma.healthMeasurement.create({ data: { ...data, userId } });
  }
  getMeasurements(userId: string) {
    return this.prisma.healthMeasurement.findMany({ where: { userId } });
  }
  getMeasurement(userId: string, id: string) {
    return this.prisma.healthMeasurement.findFirst({ where: { userId, id } });
  }
  updateMeasurement(userId: string, id: string, data: any) {
    return this.prisma.healthMeasurement.updateMany({
      where: { userId, id },
      data,
    });
  }
  deleteMeasurement(userId: string, id: string) {
    return this.prisma.healthMeasurement.deleteMany({ where: { userId, id } });
  }

  // PreventiveCareRecord CRUD
  createPreventiveCare(userId: string, data: any) {
    return this.prisma.preventiveCareRecord.create({ data: { ...data, userId } });
  }
  getPreventiveCares(userId: string) {
    return this.prisma.preventiveCareRecord.findMany({ where: { userId } });
  }
  getPreventiveCare(userId: string, id: string) {
    return this.prisma.preventiveCareRecord.findFirst({ where: { userId, id } });
  }
  updatePreventiveCare(userId: string, id: string, data: any) {
    return this.prisma.preventiveCareRecord.updateMany({
      where: { userId, id },
      data,
    });
  }
  deletePreventiveCare(userId: string, id: string) {
    return this.prisma.preventiveCareRecord.deleteMany({ where: { userId, id } });
  }

  // MedicationLog
  async logMedicationDose(userId: string, medicationId: string, data: any) {
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
  // ActivityRecord CRUD
  createActivityRecord(userId: string, data: any) {
    return this.prisma.activityRecord.create({ data: { ...data, userId } });
  }
  getActivityRecords(userId: string) {
    return this.prisma.activityRecord.findMany({ where: { userId } });
  }
  getActivityRecord(userId: string, id: string) {
    return this.prisma.activityRecord.findFirst({ where: { userId, id } });
  }
  updateActivityRecord(userId: string, id: string, data: any) {
    return this.prisma.activityRecord.updateMany({
      where: { userId, id },
      data,
    });
  }
  deleteActivityRecord(userId: string, id: string) {
    return this.prisma.activityRecord.deleteMany({ where: { userId, id } });
  }

  // SleepRecord CRUD
  createSleepRecord(userId: string, data: any) {
    return this.prisma.sleepRecord.create({ data: { ...data, userId } });
  }
  getSleepRecords(userId: string) {
    return this.prisma.sleepRecord.findMany({ where: { userId } });
  }
  getSleepRecord(userId: string, id: string) {
    return this.prisma.sleepRecord.findFirst({ where: { userId, id } });
  }
  updateSleepRecord(userId: string, id: string, data: any) {
    return this.prisma.sleepRecord.updateMany({
      where: { userId, id },
      data,
    });
  }
  deleteSleepRecord(userId: string, id: string) {
    return this.prisma.sleepRecord.deleteMany({ where: { userId, id } });
  }

  // NutritionRecord CRUD
  createNutritionRecord(userId: string, data: any) {
    return this.prisma.nutritionRecord.create({ data: { ...data, userId } });
  }
  getNutritionRecords(userId: string) {
    return this.prisma.nutritionRecord.findMany({ where: { userId } });
  }
  getNutritionRecord(userId: string, id: string) {
    return this.prisma.nutritionRecord.findFirst({ where: { userId, id } });
  }
  updateNutritionRecord(userId: string, id: string, data: any) {
    return this.prisma.nutritionRecord.updateMany({
      where: { userId, id },
      data,
    });
  }
  deleteNutritionRecord(userId: string, id: string) {
    return this.prisma.nutritionRecord.deleteMany({ where: { userId, id } });
  }

  // HealthJournalEntry CRUD
  createHealthJournalEntry(userId: string, data: any) {
    return this.prisma.healthJournalEntry.create({ data: { ...data, userId } });
  }
  getHealthJournalEntries(userId: string) {
    return this.prisma.healthJournalEntry.findMany({ where: { userId } });
  }
  getHealthJournalEntry(userId: string, id: string) {
    return this.prisma.healthJournalEntry.findFirst({ where: { userId, id } });
  }
  updateHealthJournalEntry(userId: string, id: string, data: any) {
    return this.prisma.healthJournalEntry.updateMany({
      where: { userId, id },
      data,
    });
  }
  deleteHealthJournalEntry(userId: string, id: string) {
    return this.prisma.healthJournalEntry.deleteMany({ where: { userId, id } });
  }

  // Sync Wearable Mock
  async syncWearable(userId: string) {
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

  // HealthRecord CRUD
  createHealthRecord(userId: string, data: any) { return this.prisma.healthRecord.create({ data: { ...data, userId } }); }
  getHealthRecords(userId: string) { return this.prisma.healthRecord.findMany({ where: { userId } }); }
  getHealthRecord(userId: string, id: string) { return this.prisma.healthRecord.findFirst({ where: { userId, id } }); }
  updateHealthRecord(userId: string, id: string, data: any) { return this.prisma.healthRecord.updateMany({ where: { userId, id }, data }); }
  deleteHealthRecord(userId: string, id: string) { return this.prisma.healthRecord.deleteMany({ where: { userId, id } }); }

  // SymptomLog CRUD
  createSymptomLog(userId: string, data: any) { return this.prisma.symptomLog.create({ data: { ...data, userId } }); }
  getSymptomLogs(userId: string) { return this.prisma.symptomLog.findMany({ where: { userId } }); }
  getSymptomLog(userId: string, id: string) { return this.prisma.symptomLog.findFirst({ where: { userId, id } }); }
  updateSymptomLog(userId: string, id: string, data: any) { return this.prisma.symptomLog.updateMany({ where: { userId, id }, data }); }
  deleteSymptomLog(userId: string, id: string) { return this.prisma.symptomLog.deleteMany({ where: { userId, id } }); }

  // CaregiverAccess CRUD
  createCaregiverAccess(userId: string, data: any) { return this.prisma.caregiverAccess.create({ data: { ...data, userId } }); }
  getCaregiverAccesses(userId: string) { return this.prisma.caregiverAccess.findMany({ where: { userId } }); }
  getCaregiverAccess(userId: string, id: string) { return this.prisma.caregiverAccess.findFirst({ where: { userId, id } }); }
  updateCaregiverAccess(userId: string, id: string, data: any) { return this.prisma.caregiverAccess.updateMany({ where: { userId, id }, data }); }
  deleteCaregiverAccess(userId: string, id: string) { return this.prisma.caregiverAccess.deleteMany({ where: { userId, id } }); }

  // Document Explain
  async explainDocument(userId: string, extractedText: string) {
    return "This information can have several possible explanations. A healthcare professional should interpret it in context.";
  }
}
