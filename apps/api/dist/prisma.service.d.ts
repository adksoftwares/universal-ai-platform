import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@universal-ai/database';
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    onModuleInit(): Promise<void>;
}
