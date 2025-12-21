/**
 * Error response information
 *
 * Used in NATS error responses and REST API error responses
 */
export interface ErrorInfo {
  /**
   * Vietnamese error message
   */
  vi: string;

  /**
   * English error message
   */
  en: string;

  /**
   * Optional error code for client-side error handling
   * Examples: "BOOKING_NOT_FOUND", "INVALID_DATES", "ROOM_UNAVAILABLE"
   */
  code?: string;

  /**
   * Stack trace for debugging (only in development)
   */
  stack?: string;

  /**
   * Additional error details
   */
  details?: Record<string, any>;
}

/**
 * Validation error for a single field
 *
 * Used when validating DTOs with class-validator
 */
export interface FieldError {
  /**
   * Field name
   */
  field: string;

  /**
   * List of validation errors for this field
   */
  errors: string[];

  /**
   * Current field value
   */
  value?: any;
}

/**
 * Validation error response
 *
 * Used when input validation fails
 */
export interface ValidationError {
  /**
   * List of field-level validation errors
   */
  fields: FieldError[];

  /**
   * Overall error message
   */
  message: string;
}
