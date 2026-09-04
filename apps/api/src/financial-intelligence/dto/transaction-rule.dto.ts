import { IsString, IsBoolean, IsOptional, IsNumber } from 'class-validator';

export class CreateTransactionRuleDto {
  @IsString()
  merchantPattern: string;

  @IsString()
  category: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

export class UpdateTransactionRuleDto {
  @IsString()
  @IsOptional()
  merchantPattern?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
