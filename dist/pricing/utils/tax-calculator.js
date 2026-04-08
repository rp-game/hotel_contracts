"use strict";
/**
 * Centralized Tax Calculator
 *
 * Compounding order (hardcoded, Vietnam standard):
 *   net × (1 + serviceChargeRate%) × (1 + vatRate%)
 *
 * All services MUST use this utility for tax calculation.
 * Never inline tax math — always call calculateTax().
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_TAX_CONFIG = void 0;
exports.calculateTax = calculateTax;
exports.reverseTax = reverseTax;
/**
 * Default tax config (Vietnam: VAT 8%, Service Charge 5%)
 * Used as fallback when hotel has no tax configuration
 */
exports.DEFAULT_TAX_CONFIG = {
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
function calculateTax(netAmount, taxConfig) {
    const config = {
        vatRate: taxConfig?.vatRate ?? exports.DEFAULT_TAX_CONFIG.vatRate,
        serviceChargeRate: taxConfig?.serviceChargeRate ?? exports.DEFAULT_TAX_CONFIG.serviceChargeRate,
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
/**
 * Reverse tax calculation: given a gross (tax-inclusive) amount,
 * back-compute the net amount and tax breakdown.
 *
 * Formula (inverse of Vietnam compound):
 *   net = gross / ((1 + sc/100) × (1 + vat/100))
 *
 * Then the exact SC/VAT amounts are recomputed via calculateTax(net) to keep
 * rounding consistent with forward calculation. The returned grossAmount may
 * differ from the input by ±1 VND due to rounding, which is acceptable.
 *
 * @param grossAmount - Tax-inclusive amount (what the guest sees/agrees to)
 * @param taxConfig - Hotel's tax configuration
 * @returns Full tax breakdown where netAmount is the back-computed pre-tax price
 */
function reverseTax(grossAmount, taxConfig) {
    const config = {
        vatRate: taxConfig?.vatRate ?? exports.DEFAULT_TAX_CONFIG.vatRate,
        serviceChargeRate: taxConfig?.serviceChargeRate ?? exports.DEFAULT_TAX_CONFIG.serviceChargeRate,
    };
    const scMultiplier = 1 + config.serviceChargeRate / 100;
    const vatMultiplier = 1 + config.vatRate / 100;
    const divisor = scMultiplier * vatMultiplier;
    // Avoid divide-by-zero when both rates are 0
    const netAmount = divisor > 0 ? Math.round(grossAmount / divisor) : grossAmount;
    // Recompute forward to keep tax amounts consistent with calculateTax()
    return calculateTax(netAmount, config);
}
//# sourceMappingURL=tax-calculator.js.map