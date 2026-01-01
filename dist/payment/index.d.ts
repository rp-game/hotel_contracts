/**
 * Payment Service Domain Contracts
 *
 * Includes:
 * - NATS message contracts (payment.* patterns)
 * - Payment request/response types
 * - Payment method enums
 * - Inter-service communication types
 *
 * Import examples:
 * ```typescript
 * import { CreateOfflinePaymentNatsRequest } from '@hotel/contracts/payment/nats';
 * import { PaymentResponse } from '@hotel/contracts/payment/inter-service';
 * import { PaymentMethod } from '@hotel/contracts/payment/enums';
 * ```
 */
export * from './nats';
export * from './enums';
export * from './inter-service';
//# sourceMappingURL=index.d.ts.map