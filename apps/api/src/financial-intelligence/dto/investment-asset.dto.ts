import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateInvestmentAssetDto {
  @IsString()
  @IsOptional()
  accountId?: string;

  @IsString()
  assetSymbol: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  purchasePrice: number;

  @IsString()
  @IsOptional()
  currency?: string;

  @IsNumber()
  @IsOptional()
  currentValue?: number;
}

export class UpdateInvestmentAssetDto {
  @IsString()
  @IsOptional()
  accountId?: string;

  @IsString()
  @IsOptional()
  assetSymbol?: string;

  @IsNumber()
  @IsOptional()
  quantity?: number;

  @IsNumber()
  @IsOptional()
  purchasePrice?: number;

  @IsString()
  @IsOptional()
  currency?: string;

  @IsNumber()
  @IsOptional()
  currentValue?: number;
}
