import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { ShoppingIntelligenceService } from './shopping-intelligence.service.js';

@Controller('shopping-intelligence')
export class ShoppingIntelligenceController {
  constructor(private readonly shoppingIntelligenceService: ShoppingIntelligenceService) {}

  @Post('wishlists')
  createWishlist(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.shoppingIntelligenceService.createWishlist(userId, data);
  }

  @Get('wishlists')
  getWishlists(@Headers('x-user-id') userId: string) {
    return this.shoppingIntelligenceService.getWishlists(userId);
  }

  @Get('wishlists/:id')
  getWishlist(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.shoppingIntelligenceService.getWishlist(userId, id);
  }

  @Patch('wishlists/:id')
  updateWishlist(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.shoppingIntelligenceService.updateWishlist(userId, id, data);
  }

  @Delete('wishlists/:id')
  deleteWishlist(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.shoppingIntelligenceService.deleteWishlist(userId, id);
  }

  @Post('orders')
  createOrder(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.shoppingIntelligenceService.createOrder(userId, data);
  }

  @Get('orders')
  getOrders(@Headers('x-user-id') userId: string) {
    return this.shoppingIntelligenceService.getOrders(userId);
  }

  @Get('orders/:id')
  getOrder(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.shoppingIntelligenceService.getOrder(userId, id);
  }

  @Patch('orders/:id')
  updateOrder(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.shoppingIntelligenceService.updateOrder(userId, id, data);
  }

  @Delete('orders/:id')
  deleteOrder(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.shoppingIntelligenceService.deleteOrder(userId, id);
  }

  @Post('returns')
  createReturn(@Body() data: any) {
    return this.shoppingIntelligenceService.createReturn(data);
  }

  @Get('returns')
  getReturns() {
    return this.shoppingIntelligenceService.getReturns();
  }

  @Get('returns/:id')
  getReturn(@Param('id') id: string) {
    return this.shoppingIntelligenceService.getReturn(id);
  }

  @Patch('returns/:id')
  updateReturn(@Param('id') id: string, @Body() data: any) {
    return this.shoppingIntelligenceService.updateReturn(id, data);
  }

  @Delete('returns/:id')
  deleteReturn(@Param('id') id: string) {
    return this.shoppingIntelligenceService.deleteReturn(id);
  }

  @Post('products/search')
  searchProducts(@Body('query') query: string) {
    return this.shoppingIntelligenceService.searchProducts(query);
  }
}
