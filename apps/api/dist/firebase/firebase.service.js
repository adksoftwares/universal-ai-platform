var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
import { initializeApp, getApps, getApp, cert, applicationDefault } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getDatabase } from 'firebase-admin/database';
let FirebaseService = class FirebaseService {
    app;
    onModuleInit() {
        if (!getApps().length) {
            try {
                let credential;
                if (process.env.FIREBASE_SERVICE_ACCOUNT) {
                    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
                    credential = cert(serviceAccount);
                }
                else {
                    credential = applicationDefault();
                }
                this.app = initializeApp({
                    credential,
                    databaseURL: process.env.FIREBASE_DATABASE_URL,
                });
                console.log('Firebase Admin initialized successfully');
            }
            catch (error) {
                console.error('Failed to initialize Firebase Admin:', error);
            }
        }
        else {
            this.app = getApp();
        }
    }
    get auth() {
        return getAuth(this.app);
    }
    get database() {
        return getDatabase(this.app);
    }
};
FirebaseService = __decorate([
    Injectable()
], FirebaseService);
export { FirebaseService };
//# sourceMappingURL=firebase.service.js.map