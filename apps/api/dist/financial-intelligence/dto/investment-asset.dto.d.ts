export declare class CreateInvestmentAssetDto {
    accountId?: string;
    assetSymbol: string;
    quantity: number;
    purchasePrice: number;
    currency?: string;
    currentValue?: number;
}
export declare class UpdateInvestmentAssetDto {
    accountId?: string;
    assetSymbol?: string;
    quantity?: number;
    purchasePrice?: number;
    currency?: string;
    currentValue?: number;
}
