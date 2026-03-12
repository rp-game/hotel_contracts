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
    vatRate: number;
    serviceChargeRate: number;
}
export interface TaxCalculationResult {
    netAmount: number;
    serviceCharge: {
        rate: number;
        amount: number;
    };
    vat: {
        rate: number;
        amount: number;
    };
    totalTax: number;
    grossAmount: number;
}
/**
 * Default tax config (Vietnam: VAT 8%, Service Charge 5%)
 * Used as fallback when hotel has no tax configuration
 */
export declare const DEFAULT_TAX_CONFIG: TaxConfig;
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
export declare function calculateTax(netAmount: number, taxConfig?: Partial<TaxConfig>): TaxCalculationResult;
//# sourceMappingURL=tax-calculator.d.ts.map