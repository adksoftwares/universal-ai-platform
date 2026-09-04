import { PrismaService } from '../prisma.service.js';
export declare class ShoppingIntelligenceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createWishlist(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        isShared: boolean;
    }>;
    getWishlists(userId: string): Promise<({
        items: {
            id: string;
            priority: number;
            createdAt: Date;
            updatedAt: Date;
            notes: string | null;
            currency: string;
            wishlistId: string;
            productName: string;
            productId: string | null;
            targetPrice: number | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        isShared: boolean;
    })[]>;
    getWishlist(userId: string, id: string): Promise<({
        items: {
            id: string;
            priority: number;
            createdAt: Date;
            updatedAt: Date;
            notes: string | null;
            currency: string;
            wishlistId: string;
            productName: string;
            productId: string | null;
            targetPrice: number | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        isShared: boolean;
    }) | null>;
    updateWishlist(userId: string, id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        isShared: boolean;
    }>;
    deleteWishlist(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        isShared: boolean;
    }>;
    createOrder(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        currency: string;
        seller: string;
        totalAmount: number;
        orderDate: Date;
        trackingNumber: string | null;
    }>;
    getOrders(userId: string): Promise<({
        returns: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: string;
            deadline: Date | null;
            currency: string;
            reason: string | null;
            refundAmount: number | null;
            orderId: string;
        }[];
        items: {
            id: string;
            createdAt: Date;
            currency: string;
            quantity: number;
            orderId: string;
            productName: string;
            unitPrice: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        currency: string;
        seller: string;
        totalAmount: number;
        orderDate: Date;
        trackingNumber: string | null;
    })[]>;
    getOrder(userId: string, id: string): Promise<({
        returns: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: string;
            deadline: Date | null;
            currency: string;
            reason: string | null;
            refundAmount: number | null;
            orderId: string;
        }[];
        items: {
            id: string;
            createdAt: Date;
            currency: string;
            quantity: number;
            orderId: string;
            productName: string;
            unitPrice: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        currency: string;
        seller: string;
        totalAmount: number;
        orderDate: Date;
        trackingNumber: string | null;
    }) | null>;
    updateOrder(userId: string, id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        currency: string;
        seller: string;
        totalAmount: number;
        orderDate: Date;
        trackingNumber: string | null;
    }>;
    deleteOrder(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        currency: string;
        seller: string;
        totalAmount: number;
        orderDate: Date;
        trackingNumber: string | null;
    }>;
    createReturn(data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        deadline: Date | null;
        currency: string;
        reason: string | null;
        refundAmount: number | null;
        orderId: string;
    }>;
    getReturns(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        deadline: Date | null;
        currency: string;
        reason: string | null;
        refundAmount: number | null;
        orderId: string;
    }[]>;
    getReturn(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        deadline: Date | null;
        currency: string;
        reason: string | null;
        refundAmount: number | null;
        orderId: string;
    } | null>;
    updateReturn(id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        deadline: Date | null;
        currency: string;
        reason: string | null;
        refundAmount: number | null;
        orderId: string;
    }>;
    deleteReturn(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        deadline: Date | null;
        currency: string;
        reason: string | null;
        refundAmount: number | null;
        orderId: string;
    }>;
    searchProducts(query: string): Promise<{
        id: string;
        name: string;
        brand: string;
        category: string;
        description: string;
        prices: {
            id: string;
            seller: string;
            price: number;
            currency: string;
            stockStatus: string;
        }[];
    }[]>;
}
