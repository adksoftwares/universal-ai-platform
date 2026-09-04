var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { ShoppingIntelligenceService } from './shopping-intelligence.service.js';
let ShoppingIntelligenceController = class ShoppingIntelligenceController {
    shoppingIntelligenceService;
    constructor(shoppingIntelligenceService) {
        this.shoppingIntelligenceService = shoppingIntelligenceService;
    }
    createWishlist(userId, data) {
        return this.shoppingIntelligenceService.createWishlist(userId, data);
    }
    getWishlists(userId) {
        return this.shoppingIntelligenceService.getWishlists(userId);
    }
    getWishlist(userId, id) {
        return this.shoppingIntelligenceService.getWishlist(userId, id);
    }
    updateWishlist(userId, id, data) {
        return this.shoppingIntelligenceService.updateWishlist(userId, id, data);
    }
    deleteWishlist(userId, id) {
        return this.shoppingIntelligenceService.deleteWishlist(userId, id);
    }
    createOrder(userId, data) {
        return this.shoppingIntelligenceService.createOrder(userId, data);
    }
    getOrders(userId) {
        return this.shoppingIntelligenceService.getOrders(userId);
    }
    getOrder(userId, id) {
        return this.shoppingIntelligenceService.getOrder(userId, id);
    }
    updateOrder(userId, id, data) {
        return this.shoppingIntelligenceService.updateOrder(userId, id, data);
    }
    deleteOrder(userId, id) {
        return this.shoppingIntelligenceService.deleteOrder(userId, id);
    }
    createReturn(data) {
        return this.shoppingIntelligenceService.createReturn(data);
    }
    getReturns() {
        return this.shoppingIntelligenceService.getReturns();
    }
    getReturn(id) {
        return this.shoppingIntelligenceService.getReturn(id);
    }
    updateReturn(id, data) {
        return this.shoppingIntelligenceService.updateReturn(id, data);
    }
    deleteReturn(id) {
        return this.shoppingIntelligenceService.deleteReturn(id);
    }
    searchProducts(query) {
        return this.shoppingIntelligenceService.searchProducts(query);
    }
};
__decorate([
    Post('wishlists'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ShoppingIntelligenceController.prototype, "createWishlist", null);
__decorate([
    Get('wishlists'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShoppingIntelligenceController.prototype, "getWishlists", null);
__decorate([
    Get('wishlists/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ShoppingIntelligenceController.prototype, "getWishlist", null);
__decorate([
    Patch('wishlists/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], ShoppingIntelligenceController.prototype, "updateWishlist", null);
__decorate([
    Delete('wishlists/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ShoppingIntelligenceController.prototype, "deleteWishlist", null);
__decorate([
    Post('orders'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ShoppingIntelligenceController.prototype, "createOrder", null);
__decorate([
    Get('orders'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShoppingIntelligenceController.prototype, "getOrders", null);
__decorate([
    Get('orders/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ShoppingIntelligenceController.prototype, "getOrder", null);
__decorate([
    Patch('orders/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], ShoppingIntelligenceController.prototype, "updateOrder", null);
__decorate([
    Delete('orders/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ShoppingIntelligenceController.prototype, "deleteOrder", null);
__decorate([
    Post('returns'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ShoppingIntelligenceController.prototype, "createReturn", null);
__decorate([
    Get('returns'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShoppingIntelligenceController.prototype, "getReturns", null);
__decorate([
    Get('returns/:id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShoppingIntelligenceController.prototype, "getReturn", null);
__decorate([
    Patch('returns/:id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ShoppingIntelligenceController.prototype, "updateReturn", null);
__decorate([
    Delete('returns/:id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShoppingIntelligenceController.prototype, "deleteReturn", null);
__decorate([
    Post('products/search'),
    __param(0, Body('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShoppingIntelligenceController.prototype, "searchProducts", null);
ShoppingIntelligenceController = __decorate([
    Controller('shopping-intelligence'),
    __metadata("design:paramtypes", [ShoppingIntelligenceService])
], ShoppingIntelligenceController);
export { ShoppingIntelligenceController };
//# sourceMappingURL=shopping-intelligence.controller.js.map