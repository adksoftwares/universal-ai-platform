import { Controller, Get, Post, Put, Delete, Body, Param, Headers, HttpException, HttpStatus } from '@nestjs/common';
import { HealthIntelligenceService } from './health-intelligence.service.js';

@Controller('health-intelligence')
export class HealthIntelligenceController {
  constructor(private readonly healthIntelligenceService: HealthIntelligenceService) {}

  // HealthProvider
  @Post('provider')
  createProvider(@Headers('x-user-id') userId: string, @Body() data: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.createProvider(userId, data);
  }

  @Get('provider')
  getProviders(@Headers('x-user-id') userId: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.getProviders(userId);
  }

  @Get('provider/:id')
  getProvider(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.getProvider(userId, id);
  }

  @Put('provider/:id')
  updateProvider(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.updateProvider(userId, id, data);
  }

  @Delete('provider/:id')
  deleteProvider(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.deleteProvider(userId, id);
  }

  // HealthMeasurement
  @Post('measurement')
  createMeasurement(@Headers('x-user-id') userId: string, @Body() data: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.createMeasurement(userId, data);
  }

  @Get('measurement')
  getMeasurements(@Headers('x-user-id') userId: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.getMeasurements(userId);
  }

  @Get('measurement/:id')
  getMeasurement(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.getMeasurement(userId, id);
  }

  @Put('measurement/:id')
  updateMeasurement(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.updateMeasurement(userId, id, data);
  }

  @Delete('measurement/:id')
  deleteMeasurement(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.deleteMeasurement(userId, id);
  }

  // PreventiveCareRecord
  @Post('preventive-care')
  createPreventiveCare(@Headers('x-user-id') userId: string, @Body() data: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.createPreventiveCare(userId, data);
  }

  @Get('preventive-care')
  getPreventiveCares(@Headers('x-user-id') userId: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.getPreventiveCares(userId);
  }

  @Get('preventive-care/:id')
  getPreventiveCare(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.getPreventiveCare(userId, id);
  }

  @Put('preventive-care/:id')
  updatePreventiveCare(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.updatePreventiveCare(userId, id, data);
  }

  @Delete('preventive-care/:id')
  deletePreventiveCare(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.deletePreventiveCare(userId, id);
  }

  // MedicationLog
  @Post('medication/:medicationId/log')
  async logMedicationDose(
    @Headers('x-user-id') userId: string,
    @Param('medicationId') medicationId: string,
    @Body() data: any
  ) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    try {
      return await this.healthIntelligenceService.logMedicationDose(userId, medicationId, data);
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  // ActivityRecord
  @Post('activity')
  createActivityRecord(@Headers('x-user-id') userId: string, @Body() data: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.createActivityRecord(userId, data);
  }

  @Get('activity')
  getActivityRecords(@Headers('x-user-id') userId: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.getActivityRecords(userId);
  }

  @Get('activity/:id')
  getActivityRecord(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.getActivityRecord(userId, id);
  }

  @Put('activity/:id')
  updateActivityRecord(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.updateActivityRecord(userId, id, data);
  }

  @Delete('activity/:id')
  deleteActivityRecord(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.deleteActivityRecord(userId, id);
  }

  // SleepRecord
  @Post('sleep')
  createSleepRecord(@Headers('x-user-id') userId: string, @Body() data: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.createSleepRecord(userId, data);
  }

  @Get('sleep')
  getSleepRecords(@Headers('x-user-id') userId: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.getSleepRecords(userId);
  }

  @Get('sleep/:id')
  getSleepRecord(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.getSleepRecord(userId, id);
  }

  @Put('sleep/:id')
  updateSleepRecord(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.updateSleepRecord(userId, id, data);
  }

  @Delete('sleep/:id')
  deleteSleepRecord(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.deleteSleepRecord(userId, id);
  }

  // NutritionRecord
  @Post('nutrition')
  createNutritionRecord(@Headers('x-user-id') userId: string, @Body() data: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.createNutritionRecord(userId, data);
  }

  @Get('nutrition')
  getNutritionRecords(@Headers('x-user-id') userId: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.getNutritionRecords(userId);
  }

  @Get('nutrition/:id')
  getNutritionRecord(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.getNutritionRecord(userId, id);
  }

  @Put('nutrition/:id')
  updateNutritionRecord(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.updateNutritionRecord(userId, id, data);
  }

  @Delete('nutrition/:id')
  deleteNutritionRecord(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.deleteNutritionRecord(userId, id);
  }

  // HealthJournalEntry
  @Post('journal')
  createHealthJournalEntry(@Headers('x-user-id') userId: string, @Body() data: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.createHealthJournalEntry(userId, data);
  }

  @Get('journal')
  getHealthJournalEntries(@Headers('x-user-id') userId: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.getHealthJournalEntries(userId);
  }

  @Get('journal/:id')
  getHealthJournalEntry(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.getHealthJournalEntry(userId, id);
  }

  @Put('journal/:id')
  updateHealthJournalEntry(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.updateHealthJournalEntry(userId, id, data);
  }

  @Delete('journal/:id')
  deleteHealthJournalEntry(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.deleteHealthJournalEntry(userId, id);
  }

  // Sync Wearable Mock
  @Post('sync-wearable')
  syncWearable(@Headers('x-user-id') userId: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.syncWearable(userId);
  }

  // HealthRecord CRUD
  @Post('record')
  createHealthRecord(@Headers('x-user-id') userId: string, @Body() data: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.createHealthRecord(userId, data);
  }
  @Get('record')
  getHealthRecords(@Headers('x-user-id') userId: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.getHealthRecords(userId);
  }
  @Get('record/:id')
  getHealthRecord(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.getHealthRecord(userId, id);
  }
  @Put('record/:id')
  updateHealthRecord(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.updateHealthRecord(userId, id, data);
  }
  @Delete('record/:id')
  deleteHealthRecord(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.deleteHealthRecord(userId, id);
  }

  // SymptomLog CRUD
  @Post('symptom-log')
  createSymptomLog(@Headers('x-user-id') userId: string, @Body() data: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.createSymptomLog(userId, data);
  }
  @Get('symptom-log')
  getSymptomLogs(@Headers('x-user-id') userId: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.getSymptomLogs(userId);
  }
  @Get('symptom-log/:id')
  getSymptomLog(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.getSymptomLog(userId, id);
  }
  @Put('symptom-log/:id')
  updateSymptomLog(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.updateSymptomLog(userId, id, data);
  }
  @Delete('symptom-log/:id')
  deleteSymptomLog(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.deleteSymptomLog(userId, id);
  }

  // CaregiverAccess CRUD
  @Post('caregiver-access')
  createCaregiverAccess(@Headers('x-user-id') userId: string, @Body() data: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.createCaregiverAccess(userId, data);
  }
  @Get('caregiver-access')
  getCaregiverAccesses(@Headers('x-user-id') userId: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.getCaregiverAccesses(userId);
  }
  @Get('caregiver-access/:id')
  getCaregiverAccess(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.getCaregiverAccess(userId, id);
  }
  @Put('caregiver-access/:id')
  updateCaregiverAccess(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.updateCaregiverAccess(userId, id, data);
  }
  @Delete('caregiver-access/:id')
  deleteCaregiverAccess(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.deleteCaregiverAccess(userId, id);
  }

  // Document Explain
  @Post('documents/explain')
  explainDocument(@Headers('x-user-id') userId: string, @Body() data: { extractedText: string }) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.healthIntelligenceService.explainDocument(userId, data.extractedText);
  }
}
