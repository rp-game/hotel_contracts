/**
 * Tag Management NATS Contracts
 *
 * NATS Pattern: cms.tag.*
 * Handler: cms-service
 * Called by: api-gateway
 */

import { NatsResponse } from '../../common/nats-response.interface';
import { MultilingualContent } from './common';

/**
 * Tag domain model - Hierarchical tags for organizing content
 */
export interface Tag {
  id: string;
  organizerId: string;
  slug: string;
  name: MultilingualContent;
  description: MultilingualContent;
  parentId?: string;
  position?: number;
  type: string;
  articleCount: number;
  createdAt: string;
  updatedAt: string;
  color?: string;
  icon?: string;
}

/**
 * Hierarchical tag node for tree structure
 */
export interface TagNode {
  tag: Tag;
  children: TagNode[];
}

/**
 * NATS request: List tags
 * Pattern: cms.tag.list
 */
export interface ListTagsRequest {
  organizerId: string;
  status?: string;
  limit: number;
  offset: number;
}

export type ListTagsResponse = NatsResponse<{
  tags: Tag[];
  total: number;
  count: number;
}>;

/**
 * NATS request: Get tag by ID
 * Pattern: cms.tag.get
 */
export interface GetTagRequest {
  id: string;
}

export type GetTagResponse = NatsResponse<Tag>;

/**
 * NATS request: Get tag by slug
 * Pattern: cms.tag.getBySlug
 */
export interface GetTagBySlugRequest {
  organizerId: string;
  slug: string;
}

export type GetTagBySlugResponse = NatsResponse<Tag>;

/**
 * NATS request: Get tag hierarchy (tree structure)
 * Pattern: cms.tag.getHierarchy
 */
export interface GetTagHierarchyRequest {
  organizerId: string;
}

export type GetTagHierarchyResponse = NatsResponse<{
  roots: TagNode[];
}>;

/**
 * NATS request: Get children of a tag
 * Pattern: cms.tag.getChildren
 */
export interface GetTagChildrenRequest {
  parentId: string;
}

export type GetTagChildrenResponse = NatsResponse<{
  children: Tag[];
}>;

/**
 * NATS request: Create tag
 * Pattern: cms.tag.create
 */
export interface CreateTagRequest {
  organizerId: string;
  slug: string;
  name: MultilingualContent;
  description: MultilingualContent;
  parentId?: string;
  status: string;
}

export type CreateTagResponse = NatsResponse<Tag>;

/**
 * NATS request: Update tag
 * Pattern: cms.tag.update
 */
export interface UpdateTagRequest {
  id: string;
  name?: MultilingualContent;
  description?: MultilingualContent;
  parentId?: string;
  position?: number;
  status?: string;
}

export type UpdateTagResponse = NatsResponse<Tag>;

/**
 * NATS request: Delete tag
 * Pattern: cms.tag.delete
 */
export interface DeleteTagRequest {
  id: string;
}

export type DeleteTagResponse = NatsResponse<{ success: boolean }>;

/**
 * Tag NATS Contract - Groups all tag operations
 */
export interface TagContract {
  'cms.tag.list': {
    input: ListTagsRequest;
    output: ListTagsResponse;
  };
  'cms.tag.get': {
    input: GetTagRequest;
    output: GetTagResponse;
  };
  'cms.tag.getBySlug': {
    input: GetTagBySlugRequest;
    output: GetTagBySlugResponse;
  };
  'cms.tag.getHierarchy': {
    input: GetTagHierarchyRequest;
    output: GetTagHierarchyResponse;
  };
  'cms.tag.getChildren': {
    input: GetTagChildrenRequest;
    output: GetTagChildrenResponse;
  };
  'cms.tag.create': {
    input: CreateTagRequest;
    output: CreateTagResponse;
  };
  'cms.tag.update': {
    input: UpdateTagRequest;
    output: UpdateTagResponse;
  };
  'cms.tag.delete': {
    input: DeleteTagRequest;
    output: DeleteTagResponse;
  };
}
