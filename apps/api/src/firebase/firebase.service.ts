import { Injectable, OnModuleInit } from '@nestjs/common';
import { initializeApp, getApps, getApp, cert, applicationDefault, App } from 'firebase-admin/app';
import { getAuth, Auth } from 'firebase-admin/auth';
import { getDatabase, Database } from 'firebase-admin/database';

@Injectable()
export class FirebaseService implements OnModuleInit {
  private app: App;

  onModuleInit() {
    if (!getApps().length) {
      try {
        let credential;
        
        // Check if FIREBASE_SERVICE_ACCOUNT is provided as a JSON string
        if (process.env.FIREBASE_SERVICE_ACCOUNT) {
          const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
          credential = cert(serviceAccount);
        } else {
          // Fallback to application default credentials
          credential = applicationDefault();
        }

        this.app = initializeApp({
          credential,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
        });
        
        console.log('Firebase Admin initialized successfully');
      } catch (error) {
        console.error('Failed to initialize Firebase Admin:', error);
      }
    } else {
      this.app = getApp();
    }
  }

  get auth(): Auth {
    return getAuth(this.app);
  }

  get database(): Database {
    return getDatabase(this.app);
  }
}
