/**
 * CMS Domain Contracts
 *
 * Includes:
 * - NATS message contracts (cms.* patterns)
 * - CMS types and models
 *
 * Import examples:
 * ```typescript
 * import { ArticleContract, CreateArticleRequest } from '@hotel/contracts/cms';
 * import { ListPagesRequest, GetPageResponse } from '@hotel/contracts/cms/nats';
 * import * as CmsContracts from '@hotel/contracts/cms';
 * ```
 */

export * from './nats';
