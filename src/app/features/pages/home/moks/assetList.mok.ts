import { Asset } from "../model/asset";

export const assetListMok: Asset[] = [
    {
        name: 'EUR/USD',
        operationCount: 5,
        balanceAccount: 0,
        state: 0,
    } as Asset,
    {
        name: 'BTCUSDT',
        operationCount: 20,
        balanceAccount: 14,
        state: 1,
    } as Asset,
    {
        name: 'GPDTUSD',
        operationCount: 13,
        balanceAccount: -10,
        state: 2,
    } as Asset,
];
