export const BUY_ACORN = 'BUY_ACORN';
export const EAT_ACORN = 'EAT_ACORN';

export const buy = (amount) => ({
  type: BUY_ACORN,
  amount,
});

export const eat = (amount) => ({
  type: EAT_ACORN,
  amount,
});
