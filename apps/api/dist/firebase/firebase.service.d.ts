import { OnModuleInit } from '@nestjs/common';
import { Auth } from 'firebase-admin/auth';
import { Database } from 'firebase-admin/database';
export declare class FirebaseService implements OnModuleInit {
    private app;
    onModuleInit(): void;
    get auth(): Auth;
    get database(): Database;
}
