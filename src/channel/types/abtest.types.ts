/**
 * A/B Testing Types
 *
 * Types for channel provider A/B testing functionality.
 */

/**
 * A/B test variant configuration (flexible structure)
 */
export interface ABTestVariant {
  providerId?: string;
  [key: string]: any;
}

/**
 * A/B test configuration
 */
export interface ABTest {
  testId: string;
  testName: string;
  variants: ABTestVariant[];
  trafficSplit: any;
  status: 'ACTIVE' | 'INACTIVE';
  createdAt: string | Date;
  updatedAt?: string;
}

/**
 * A/B test status update result
 */
export interface ABTestStatusUpdate {
  testId: string;
  status: string;
  updatedAt: string;
}
