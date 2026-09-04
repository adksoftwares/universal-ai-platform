var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TaskModule } from './task/task.module.js';
import { ReminderModule } from './reminder/reminder.module.js';
import { GoalModule } from './goal/goal.module.js';
import { MemoryModule } from './memory/memory.module.js';
import { DocumentModule } from './document/document.module.js';
import { LearningModule } from './learning/learning.module.js';
import { CareerModule } from './career/career.module.js';
import { DevelopmentModule } from './development/development.module.js';
import { FinanceModule } from './finance/finance.module.js';
import { TravelModule } from './travel/travel.module.js';
import { ServiceIntegrationModule } from './service-integration/service-integration.module.js';
import { HealthModule } from './health/health.module.js';
import { EmergencyModule } from './emergency/emergency.module.js';
import { AlertModule } from './alert/alert.module.js';
import { CitizenModule } from './citizen/citizen.module.js';
import { EducationModule } from './education/education.module.js';
import { CareerTrackerModule } from './career-tracker/career-tracker.module.js';
import { CommunicationModule } from './communication/communication.module.js';
import { FinanceIntelligenceModule } from './finance-intelligence/finance-intelligence.module.js';
import { HealthIntelligenceModule } from './health-intelligence/health-intelligence.module.js';
import { LearningIntelligenceModule } from './learning-intelligence/learning-intelligence.module.js';
import { WorkIntelligenceModule } from './work-intelligence/work-intelligence.module.js';
import { FirebaseModule } from './firebase/firebase.module.js';
import { TravelIntelligenceModule } from './travel-intelligence/travel-intelligence.module.js';
import { HouseholdIntelligenceModule } from './household-intelligence/household-intelligence.module.js';
import { ShoppingIntelligenceModule } from './shopping-intelligence/shopping-intelligence.module.js';
import { MobilityIntelligenceModule } from './mobility-intelligence/mobility-intelligence.module.js';
import { CommunicationIntelligenceModule } from './communication-intelligence/communication-intelligence.module.js';
import { KnowledgeIntelligenceModule } from './knowledge-intelligence/knowledge-intelligence.module.js';
import { CareerIntelligenceModule } from './career-intelligence/career-intelligence.module.js';
import { SocialIntelligenceModule } from './social-intelligence/social-intelligence.module.js';
import { CivicIntelligenceModule } from './civic-intelligence/civic-intelligence.module.js';
import { FinancialIntelligenceModule } from './financial-intelligence/financial-intelligence.module.js';
import { EducationIntelligenceModule } from './education-intelligence/education-intelligence.module.js';
import { ConnectionIntelligenceModule } from './connection-intelligence/connection-intelligence.module.js';
import { LocationIntelligenceModule } from './location-intelligence/location-intelligence.module.js';
import { LifeIntelligenceModule } from './life-intelligence/life-intelligence.module.js';
import { ResearchIntelligenceModule } from './research-intelligence/research-intelligence.module.js';
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [
            LifeIntelligenceModule,
            LocationIntelligenceModule,
            FirebaseModule,
            TaskModule,
            ReminderModule,
            GoalModule,
            MemoryModule,
            DocumentModule,
            LearningModule,
            CareerModule,
            DevelopmentModule,
            FinanceModule,
            TravelModule,
            ServiceIntegrationModule,
            HealthModule,
            EmergencyModule,
            AlertModule,
            CitizenModule,
            EducationModule,
            CareerTrackerModule,
            CommunicationModule,
            FinanceIntelligenceModule,
            HealthIntelligenceModule,
            LearningIntelligenceModule,
            WorkIntelligenceModule,
            TravelIntelligenceModule,
            HouseholdIntelligenceModule,
            ShoppingIntelligenceModule,
            MobilityIntelligenceModule,
            CommunicationIntelligenceModule,
            KnowledgeIntelligenceModule,
            CareerIntelligenceModule,
            SocialIntelligenceModule,
            CivicIntelligenceModule,
            FinancialIntelligenceModule,
            EducationIntelligenceModule,
            ConnectionIntelligenceModule,
            ResearchIntelligenceModule
        ],
        controllers: [AppController],
        providers: [AppService],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map