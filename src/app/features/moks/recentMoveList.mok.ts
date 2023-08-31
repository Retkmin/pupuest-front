import { Asset } from "../components/new-asset-modal/model/asset";
import { Move } from "../components/new-asset-modal/model/moves";

export const recentMoveListMok: Move[] = [
  {
    asset: {
      name: 'EURUSD',
      operationCount: 5,
      balanceAccount: 0,
      state: 0,
    } as Asset,
    state: false,
    type: 'Buy',
    startDate: new Date('2023-08-16'),
    risk: '1',
    id: 1,
  } as Move,
  {
    asset: {
      name: 'BTCUSDT',
      operationCount: 20,
      balanceAccount: 14,
      state: 1,
    } as Asset,
    state: true,
    type: 'Sell',
    startDate: new Date('2023-08-15'),
    risk: '1',
    id: 2,
  } as Move,
  {
    asset: {
      name: 'GBPUSD',
      operationCount: 13,
      balanceAccount: -10,
      state: 2,
    } as Asset,
    state: false,
    type: 'Buy',
    startDate: new Date('2023-08-14'),
    risk: '1',
    id: 3,
  } as Move,
  {
    asset: {
      name: 'EURUSD',
      operationCount: 5,
      balanceAccount: 0,
      state: 0,
    } as Asset,
    state: false,
    type: 'Buy',
    startDate: new Date('2023-08-16'),
    risk: '1',
    id: 1,
  } as Move,
  {
    asset: {
      name: 'BTCUSDT',
      operationCount: 20,
      balanceAccount: 14,
      state: 1,
    } as Asset,
    state: true,
    type: 'Sell',
    startDate: new Date('2023-08-15'),
    risk: '1',
    id: 2,
  } as Move,
  {
    asset: {
      name: 'GBPUSD',
      operationCount: 13,
      balanceAccount: -10,
      state: 2,
    } as Asset,
    state: false,
    type: 'Buy',
    startDate: new Date('2023-08-14'),
    risk: '1',
    id: 3,
  } as Move
];
