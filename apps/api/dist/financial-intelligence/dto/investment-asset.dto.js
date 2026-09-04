var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsString, IsOptional, IsNumber } from 'class-validator';
export class CreateInvestmentAssetDto {
    accountId;
    assetSymbol;
    quantity;
    purchasePrice;
    currency;
    currentValue;
}
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], CreateInvestmentAssetDto.prototype, "accountId", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], CreateInvestmentAssetDto.prototype, "assetSymbol", void 0);
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], CreateInvestmentAssetDto.prototype, "quantity", void 0);
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], CreateInvestmentAssetDto.prototype, "purchasePrice", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], CreateInvestmentAssetDto.prototype, "currency", void 0);
__decorate([
    IsNumber(),
    IsOptional(),
    __metadata("design:type", Number)
], CreateInvestmentAssetDto.prototype, "currentValue", void 0);
export class UpdateInvestmentAssetDto {
    accountId;
    assetSymbol;
    quantity;
    purchasePrice;
    currency;
    currentValue;
}
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], UpdateInvestmentAssetDto.prototype, "accountId", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], UpdateInvestmentAssetDto.prototype, "assetSymbol", void 0);
__decorate([
    IsNumber(),
    IsOptional(),
    __metadata("design:type", Number)
], UpdateInvestmentAssetDto.prototype, "quantity", void 0);
__decorate([
    IsNumber(),
    IsOptional(),
    __metadata("design:type", Number)
], UpdateInvestmentAssetDto.prototype, "purchasePrice", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], UpdateInvestmentAssetDto.prototype, "currency", void 0);
__decorate([
    IsNumber(),
    IsOptional(),
    __metadata("design:type", Number)
], UpdateInvestmentAssetDto.prototype, "currentValue", void 0);
//# sourceMappingURL=investment-asset.dto.js.map