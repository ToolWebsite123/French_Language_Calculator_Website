export type EmployeeStatus = 'cadre' | 'non-cadre';
export type Period = 'monthly' | 'annual';

export interface SalaryCalculationResult {
  brut: number;
  net: number;
  deductions: number;
  rate: number;
  period: Period;
}

/**
 * Calculates net salary based on gross salary, period, and employee status in France.
 * Approximate deduction rates:
 * - Cadre: ~25%
 * - Non-cadre: ~22%
 */
export function calculateNetSalary(
  brut: number,
  period: Period,
  status: EmployeeStatus
): SalaryCalculationResult {
  const rate = status === 'cadre' ? 0.25 : 0.22;
  const deductions = brut * rate;
  const net = brut - deductions;

  return {
    brut,
    net,
    deductions,
    rate,
    period,
  };
}
