export interface PretResult {
  monthlyPayment: number;
  totalCost: number;
  totalRepaid: number;
}

export function calculatePret(amount: number, annualRate: number, durationYears: number): PretResult {
  // If rate is 0, it's a simple division
  if (annualRate === 0) {
    const months = durationYears * 12;
    return {
      monthlyPayment: amount / months,
      totalCost: 0,
      totalRepaid: amount
    };
  }

  const monthlyRate = (annualRate / 100) / 12;
  const numberOfPayments = durationYears * 12;
  
  // Standard amortization formula: M = P[r(1+r)^n]/[(1+r)^n-1]
  const numerator = amount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments);
  const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1;
  const monthlyPayment = numerator / denominator;
  
  const totalRepaid = monthlyPayment * numberOfPayments;
  const totalCost = totalRepaid - amount;

  return {
    monthlyPayment,
    totalCost,
    totalRepaid
  };
}
