import { BUY_ACORN, EAT_ACORN } from '../constants';

export const buy = (amount) => ({
  type: BUY_ACORN,
  amount,
});

export const eat = (amount) => ({
  type: EAT_ACORN,
  amount,
});
