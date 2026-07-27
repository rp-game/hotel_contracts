/**
 * Rate Plan Auto-Extension NATS Patterns
 */
export declare const RATE_PLAN_EXTENSION_PATTERNS: {
    readonly EXTEND_ONE: "pricing.rate-plan.extend.one";
    readonly UNDO: "pricing.rate-plan.extend.undo";
    readonly COVERAGE: "pricing.rate-plan.extend.coverage";
    readonly LOGS: "pricing.rate-plan.extend.logs";
    readonly RUNS: "pricing.rate-plan.extend.runs";
    readonly HEALTH: "pricing.rate-plan.extend.health";
};
export type RatePlanExtensionPattern = (typeof RATE_PLAN_EXTENSION_PATTERNS)[keyof typeof RATE_PLAN_EXTENSION_PATTERNS];
//# sourceMappingURL=rate-plan-extension.nats.d.ts.map