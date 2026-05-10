/**
 * Rate Plan Auto-Extension NATS Patterns
 */

export const RATE_PLAN_EXTENSION_PATTERNS = {
  EXTEND_ONE: 'pricing.rate-plan.extend.one',
  UNDO: 'pricing.rate-plan.extend.undo',
  COVERAGE: 'pricing.rate-plan.extend.coverage',
  LOGS: 'pricing.rate-plan.extend.logs',
  RUNS: 'pricing.rate-plan.extend.runs',
  HEALTH: 'pricing.rate-plan.extend.health',
} as const;

export type RatePlanExtensionPattern =
  (typeof RATE_PLAN_EXTENSION_PATTERNS)[keyof typeof RATE_PLAN_EXTENSION_PATTERNS];
