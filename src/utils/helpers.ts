export const formatCurrency = (amount: string, currency: 'INR' | 'USD'): string => {
  const symbol = currency === 'INR' ? '₹' : '$';
  return `${symbol}${amount}`;
};

export const getAnimationDelay = (index: number, baseDelay: number = 200): string => {
  return `${index * baseDelay}ms`;
};

export const getStaggeredDelay = (parentIndex: number, childIndex: number, baseDelay: number = 200): string => {
  return `${parentIndex * baseDelay + childIndex * 100}ms`;
}; 