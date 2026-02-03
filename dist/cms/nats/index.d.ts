/**
 * CMS NATS Message Contracts
 *
 * Export all CMS NATS message definitions for type-safe communication.
 * These contracts define the input/output types for NATS messages
 * following the request-reply pattern.
 *
 * Usage:
 * ```typescript
 * import { ArticleContract, PageContract } from '@hotel/contracts/cms/nats';
 * import { CreateArticleRequest } from '@hotel/contracts/cms/nats';
 * ```
 */
export * from './common';
export * from './article.nats';
export * from './page.nats';
export * from './tag.nats';
export * from './image.nats';
export * from './collection.nats';
//# sourceMappingURL=index.d.ts.map