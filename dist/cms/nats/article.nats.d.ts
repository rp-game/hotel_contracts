/**
 * Article Management NATS Contracts
 *
 * NATS Pattern: cms.article.*
 * Handler: cms-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { MultilingualContent } from './common';
/**
 * Article domain model
 */
export interface Article {
    id: string;
    organizerId: string;
    slug: string;
    title: MultilingualContent;
    content: MultilingualContent;
    excerpt: MultilingualContent;
    featuredImageId?: string;
    featuredImageUrl?: string;
    authorId?: string;
    eventId?: string;
    type: string;
    isFeatured: boolean;
    position?: number;
    status: 'draft' | 'published' | 'archived';
    publishDate?: string;
    metadata: Record<string, any>;
    createdAt: string;
    updatedAt: string;
}
/**
 * NATS request: List articles
 * Pattern: cms.article.list
 */
export interface ListArticlesRequest {
    organizerId: string;
    status?: 'draft' | 'published' | 'archived';
    eventId?: string;
    type?: string;
    limit: number;
    offset: number;
}
export type ListArticlesResponse = NatsResponse<{
    articles: Article[];
    total: number;
    count: number;
}>;
/**
 * NATS request: Get article by ID or slug
 * Pattern: cms.article.get
 */
export interface GetArticleRequest {
    id: string;
    organizerId?: string;
}
export type GetArticleResponse = NatsResponse<Article>;
/**
 * NATS request: Create article
 * Pattern: cms.article.create
 */
export interface CreateArticleRequest {
    organizerId: string;
    slug: string;
    title: MultilingualContent;
    content: MultilingualContent;
    excerpt: MultilingualContent;
    featuredImageId?: string;
    eventId?: string;
    type: string;
    isFeatured: boolean;
    status: 'draft' | 'published' | 'archived';
    publishDate?: string;
    metadata: Record<string, any>;
}
export type CreateArticleResponse = NatsResponse<Article>;
/**
 * NATS request: Update article
 * Pattern: cms.article.update
 */
export interface UpdateArticleRequest {
    id: string;
    title?: MultilingualContent;
    content?: MultilingualContent;
    excerpt?: MultilingualContent;
    featuredImageId?: string;
    eventId?: string;
    type?: string;
    isFeatured?: boolean;
    position?: number;
    status?: 'draft' | 'published' | 'archived';
    publishDate?: string;
    metadata?: Record<string, any>;
}
export type UpdateArticleResponse = NatsResponse<Article>;
/**
 * NATS request: Delete article
 * Pattern: cms.article.delete
 */
export interface DeleteArticleRequest {
    id: string;
}
export type DeleteArticleResponse = NatsResponse<{
    success: boolean;
}>;
/**
 * NATS request: Publish article
 * Pattern: cms.article.publish
 */
export interface PublishArticleRequest {
    id: string;
    publishDate?: string;
}
export type PublishArticleResponse = NatsResponse<Article>;
/**
 * NATS request: Unpublish article
 * Pattern: cms.article.unpublish
 */
export interface UnpublishArticleRequest {
    id: string;
}
export type UnpublishArticleResponse = NatsResponse<Article>;
/**
 * NATS request: List featured articles
 * Pattern: cms.article.listFeatured
 */
export interface ListFeaturedArticlesRequest {
    organizerId: string;
    limit: number;
    offset: number;
}
export type ListFeaturedArticlesResponse = NatsResponse<{
    articles: Article[];
    total: number;
    count: number;
}>;
/**
 * NATS request: List articles by type
 * Pattern: cms.article.listByType
 */
export interface ListArticlesByTypeRequest {
    organizerId: string;
    type: string;
    limit: number;
    offset: number;
}
export type ListArticlesByTypeResponse = NatsResponse<{
    articles: Article[];
    total: number;
    count: number;
}>;
/**
 * NATS request: List related articles
 * Pattern: cms.article.listRelated
 */
export interface ListRelatedArticlesRequest {
    articleId: string;
    limit: number;
    offset: number;
}
export type ListRelatedArticlesResponse = NatsResponse<{
    articles: Article[];
    total: number;
    count: number;
}>;
/**
 * Article NATS Contract - Groups all article operations
 */
export interface ArticleContract {
    'cms.article.list': {
        input: ListArticlesRequest;
        output: ListArticlesResponse;
    };
    'cms.article.get': {
        input: GetArticleRequest;
        output: GetArticleResponse;
    };
    'cms.article.create': {
        input: CreateArticleRequest;
        output: CreateArticleResponse;
    };
    'cms.article.update': {
        input: UpdateArticleRequest;
        output: UpdateArticleResponse;
    };
    'cms.article.delete': {
        input: DeleteArticleRequest;
        output: DeleteArticleResponse;
    };
    'cms.article.publish': {
        input: PublishArticleRequest;
        output: PublishArticleResponse;
    };
    'cms.article.unpublish': {
        input: UnpublishArticleRequest;
        output: UnpublishArticleResponse;
    };
    'cms.article.listFeatured': {
        input: ListFeaturedArticlesRequest;
        output: ListFeaturedArticlesResponse;
    };
    'cms.article.listByType': {
        input: ListArticlesByTypeRequest;
        output: ListArticlesByTypeResponse;
    };
    'cms.article.listRelated': {
        input: ListRelatedArticlesRequest;
        output: ListRelatedArticlesResponse;
    };
}
//# sourceMappingURL=article.nats.d.ts.map