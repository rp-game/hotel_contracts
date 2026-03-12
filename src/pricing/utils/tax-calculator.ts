/**
 * Centralized Tax Calculator
 *
 * Compounding order (hardcoded, Vietnam standard):
 *   net × (1 + serviceChargeRate%) × (1 + vatRate%)
 *
 * All services MUST use this utility for tax calculation.
 * Never inline tax math — always call calculateTax().
 */

export interface TaxConfig {
  vatRate: number;           // e.g. 8 for 8%
  serviceChargeRate: number; // e.g. 5 for 5%
}

export interface TaxCalculationResult {
  netAmount: number;
  serviceCharge: { rate: number; amount: number };
  vat: { rate: number; amount: number };
  totalTax: number;
  grossAmount: number;
}

/**
 * Default tax config (Vietnam: VAT 8%, Service Charge 5%)
 * Used as fallback when hotel has no tax configuration
 */
export const DEFAULT_TAX_CONFIG: TaxConfig = {
  vatRate: 8,
  serviceChargeRate: 5,
};

/**
 * Calculate tax using compound method (Vietnam standard):
 *   serviceCharge = netAmount × serviceChargeRate%
 *   vat = (netAmount + serviceCharge) × vatRate%
 *   grossAmount = netAmount + serviceCharge + vat
 *
 * @param netAmount - Base amount before tax
 * @param taxConfig - Hotel's tax configuration (vatRate, serviceChargeRate)
 * @returns Full tax breakdown with amounts and rates
 */
export function calculateTax(
  netAmount: number,
  taxConfig?: Partial<TaxConfig>,
): TaxCalculationResult {
  const config: TaxConfig = {
    vatRate: taxConfig?.vatRate ?? DEFAULT_TAX_CONFIG.vatRate,
    serviceChargeRate: taxConfig?.serviceChargeRate ?? DEFAULT_TAX_CONFIG.serviceChargeRate,
  };

  const serviceChargeAmount = Math.round(netAmount * config.serviceChargeRate / 100);
  const vatAmount = Math.round((netAmount + serviceChargeAmount) * config.vatRate / 100);
  const totalTax = serviceChargeAmount + vatAmount;

  return {
    netAmount,
    serviceCharge: { rate: config.serviceChargeRate, amount: serviceChargeAmount },
    vat: { rate: config.vatRate, amount: vatAmount },
    totalTax,
    grossAmount: netAmount + totalTax,
  };
}
