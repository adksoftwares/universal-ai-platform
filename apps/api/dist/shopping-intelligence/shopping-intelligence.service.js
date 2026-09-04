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
let ShoppingIntelligenceService = class ShoppingIntelligenceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createWishlist(userId, data) {
        return this.prisma.wishlist.create({ data: { ...data, userId } });
    }
    async getWishlists(userId) {
        return this.prisma.wishlist.findMany({ where: { userId }, include: { items: true } });
    }
    async getWishlist(userId, id) {
        return this.prisma.wishlist.findUnique({ where: { id, userId }, include: { items: true } });
    }
    async updateWishlist(userId, id, data) {
        return this.prisma.wishlist.update({ where: { id, userId }, data });
    }
    async deleteWishlist(userId, id) {
        return this.prisma.wishlist.delete({ where: { id, userId } });
    }
    async createOrder(userId, data) {
        return this.prisma.shoppingOrder.create({ data: { ...data, userId } });
    }
    async getOrders(userId) {
        return this.prisma.shoppingOrder.findMany({ where: { userId }, include: { items: true, returns: true } });
    }
    async getOrder(userId, id) {
        return this.prisma.shoppingOrder.findUnique({ where: { id, userId }, include: { items: true, returns: true } });
    }
    async updateOrder(userId, id, data) {
        return this.prisma.shoppingOrder.update({ where: { id, userId }, data });
    }
    async deleteOrder(userId, id) {
        return this.prisma.shoppingOrder.delete({ where: { id, userId } });
    }
    async createReturn(data) {
        return this.prisma.shoppingReturn.create({ data });
    }
    async getReturns() {
        return this.prisma.shoppingReturn.findMany();
    }
    async getReturn(id) {
        return this.prisma.shoppingReturn.findUnique({ where: { id } });
    }
    async updateReturn(id, data) {
        return this.prisma.shoppingReturn.update({ where: { id }, data });
    }
    async deleteReturn(id) {
        return this.prisma.shoppingReturn.delete({ where: { id } });
    }
    async searchProducts(query) {
        return [
            {
                id: 'mock-prod-1',
                name: `Result for "${query}" - Option A`,
                brand: 'MockBrand',
                category: 'Electronics',
                description: 'A mock product generated for ' + query,
                prices: [
                    { id: 'mock-price-1', seller: 'Mockazon', price: 799.99, currency: 'USD', stockStatus: 'In Stock' }
                ]
            },
            {
                id: 'mock-prod-2',
                name: `Result for "${query}" - Option B`,
                brand: 'MockBrand2',
                category: 'Electronics',
                description: 'Another mock product for ' + query,
                prices: [
                    { id: 'mock-price-2', seller: 'Mockify', price: 849.99, currency: 'USD', stockStatus: 'Limited Stock' }
                ]
            }
        ];
    }
};
ShoppingIntelligenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ShoppingIntelligenceService);
export { ShoppingIntelligenceService };
//# sourceMappingURL=shopping-intelligence.service.js.map