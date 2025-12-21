/**
 * Pagination request parameters
 *
 * Used in query parameters for list endpoints
 *
 * @example
 * ```typescript
 * GET /bookings?page=1&limit=50&sort=createdAt:desc
 * ```
 */
export interface PaginationQuery {
  /**
   * Page number (1-indexed)
   * @default 1
   */
  page?: number;

  /**
   * Items per page
   * @default 50
   * @maximum 100
   */
  limit?: number;

  /**
   * Sort field and direction
   * Format: "fieldName:asc" or "fieldName:desc"
   * @example "createdAt:desc", "bookingCode:asc"
   */
  sort?: string;

  /**
   * Search query string
   */
  search?: string;
}

/**
 * Pagination response metadata
 *
 * Included in list responses
 */
export interface PaginationMeta {
  /**
   * Total number of items in the collection
   */
  total: number;

  /**
   * Current page number (1-indexed)
   */
  page: number;

  /**
   * Items returned per page
   */
  limit: number;

  /**
   * Total number of pages
   */
  totalPages: number;

  /**
   * Whether there are more items on the next page
   */
  hasNext: boolean;

  /**
   * Whether there are items on the previous page
   */
  hasPrev: boolean;
}

/**
 * Generic list response wrapper
 *
 * @template T - The item type in the list
 */
export interface ListResponse<T> {
  /**
   * Array of items
   */
  data: T[];

  /**
   * Pagination metadata
   */
  pagination: PaginationMeta;
}
