/**
 * Page Management NATS Contracts
 *
 * NATS Pattern: cms.page.*
 * Handler: cms-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { MultilingualContent } from './common';
/**
 * Page domain model - Static pages (About, Contact, etc.)
 */
export interface Page {
    id: string;
    organizerId: string;
    slug: string;
    title: MultilingualContent;
    content: MultilingualContent;
    excerpt: MultilingualContent;
    position?: number;
    status: 'draft' | 'published' | 'archived';
    publishDate?: string;
    metadata: Record<string, any>;
    createdAt: string;
    updatedAt: string;
    createdBy?: string;
    featuredImageUrl?: string;
}
/**
 * NATS request: List pages
 * Pattern: cms.page.list
 */
export interface ListPagesRequest {
    organizerId: string;
    status?: 'draft' | 'published' | 'archived';
    limit: number;
    offset: number;
}
export type ListPagesResponse = NatsResponse<{
    pages: Page[];
    total: number;
    count: number;
}>;
/**
 * NATS request: Get page by ID
 * Pattern: cms.page.get
 */
export interface GetPageRequest {
    id: string;
}
export type GetPageResponse = NatsResponse<Page>;
/**
 * NATS request: Create page
 * Pattern: cms.page.create
 */
export interface CreatePageRequest {
    organizerId: string;
    slug: string;
    title: MultilingualContent;
    content: MultilingualContent;
    excerpt?: MultilingualContent;
    status: 'draft' | 'published' | 'archived';
    publishDate?: string;
    metadata: Record<string, any>;
}
export type CreatePageResponse = NatsResponse<Page>;
/**
 * NATS request: Update page
 * Pattern: cms.page.update
 */
export interface UpdatePageRequest {
    id: string;
    title?: MultilingualContent;
    content?: MultilingualContent;
    excerpt?: MultilingualContent;
    position?: number;
    status?: 'draft' | 'published' | 'archived';
    publishDate?: string;
    metadata?: Record<string, any>;
}
export type UpdatePageResponse = NatsResponse<Page>;
/**
 * NATS request: Delete page
 * Pattern: cms.page.delete
 */
export interface DeletePageRequest {
    id: string;
}
export type DeletePageResponse = NatsResponse<{
    success: boolean;
}>;
/**
 * NATS request: Publish page
 * Pattern: cms.page.publish
 */
export interface PublishPageRequest {
    id: string;
    publishDate?: string;
}
export type PublishPageResponse = NatsResponse<Page>;
/**
 * NATS request: Unpublish page
 * Pattern: cms.page.unpublish
 */
export interface UnpublishPageRequest {
    id: string;
}
export type UnpublishPageResponse = NatsResponse<Page>;
/**
 * Page NATS Contract - Groups all page operations
 */
export interface PageContract {
    'cms.page.list': {
        input: ListPagesRequest;
        output: ListPagesResponse;
    };
    'cms.page.get': {
        input: GetPageRequest;
        output: GetPageResponse;
    };
    'cms.page.create': {
        input: CreatePageRequest;
        output: CreatePageResponse;
    };
    'cms.page.update': {
        input: UpdatePageRequest;
        output: UpdatePageResponse;
    };
    'cms.page.delete': {
        input: DeletePageRequest;
        output: DeletePageResponse;
    };
    'cms.page.publish': {
        input: PublishPageRequest;
        output: PublishPageResponse;
    };
    'cms.page.unpublish': {
        input: UnpublishPageRequest;
        output: UnpublishPageResponse;
    };
}
//# sourceMappingURL=page.nats.d.ts.map