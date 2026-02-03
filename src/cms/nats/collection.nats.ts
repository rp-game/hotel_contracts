/**
 * Collection Management NATS Contracts
 *
 * NATS Pattern: cms.collection.*
 * Handler: cms-service
 * Called by: api-gateway
 */

import { NatsResponse } from '../../common/nats-response.interface';
import { MultilingualContent } from './common';

/**
 * Collection domain model - Media/image collections
 */
export interface Collection {
  id: string;
  organizerId: string;
  name: string;
  description: string;
  parentId?: string;
  createdAt: string;
  createdBy?: string;
}

/**
 * Media item in a collection
 */
export interface CollectionMedia {
  imageId: string;
  filename: string;
  position: number;
  addedAt: string;
}

/**
 * NATS request: List collections
 * Pattern: cms.collection.list
 */
export interface ListCollectionsRequest {
  organizerId: string;
  status?: string;
  parentId?: string;
  limit: number;
  offset: number;
}

export type ListCollectionsResponse = NatsResponse<{
  collections: Collection[];
  total: number;
  count: number;
}>;

/**
 * NATS request: Get collection by ID
 * Pattern: cms.collection.get
 */
export interface GetCollectionRequest {
  id: string;
}

export type GetCollectionResponse = NatsResponse<Collection>;

/**
 * NATS request: Get children of a collection
 * Pattern: cms.collection.getChildren
 */
export interface GetCollectionChildrenRequest {
  parentId: string;
}

export type GetCollectionChildrenResponse = NatsResponse<{
  children: Collection[];
}>;

/**
 * NATS request: Create collection
 * Pattern: cms.collection.create
 */
export interface CreateCollectionRequest {
  organizerId: string;
  slug: string;
  name: MultilingualContent;
  description: MultilingualContent;
  parentId?: string;
  status: string;
  coverImageId?: string;
}

export type CreateCollectionResponse = NatsResponse<Collection>;

/**
 * NATS request: Update collection
 * Pattern: cms.collection.update
 */
export interface UpdateCollectionRequest {
  id: string;
  name?: MultilingualContent;
  description?: MultilingualContent;
  parentId?: string;
  position?: number;
  status?: string;
  coverImageId?: string;
}

export type UpdateCollectionResponse = NatsResponse<Collection>;

/**
 * NATS request: Delete collection
 * Pattern: cms.collection.delete
 */
export interface DeleteCollectionRequest {
  id: string;
}

export type DeleteCollectionResponse = NatsResponse<{ success: boolean }>;

/**
 * NATS request: List media in collection
 * Pattern: cms.collection.listMedia
 */
export interface ListCollectionMediaRequest {
  collectionId: string;
  limit: number;
  offset: number;
}

export type ListCollectionMediaResponse = NatsResponse<{
  media: CollectionMedia[];
  total: number;
  count: number;
}>;

/**
 * NATS request: Add media to collection
 * Pattern: cms.collection.addMedia
 */
export interface AddMediaToCollectionRequest {
  collectionId: string;
  imageId: string;
  position?: number;
}

export type AddMediaToCollectionResponse = NatsResponse<{ success: boolean }>;

/**
 * NATS request: Remove media from collection
 * Pattern: cms.collection.removeMedia
 */
export interface RemoveMediaFromCollectionRequest {
  collectionId: string;
  imageId: string;
}

export type RemoveMediaFromCollectionResponse = NatsResponse<{ success: boolean }>;

/**
 * Collection NATS Contract - Groups all collection operations
 */
export interface CollectionContract {
  'cms.collection.list': {
    input: ListCollectionsRequest;
    output: ListCollectionsResponse;
  };
  'cms.collection.get': {
    input: GetCollectionRequest;
    output: GetCollectionResponse;
  };
  'cms.collection.getChildren': {
    input: GetCollectionChildrenRequest;
    output: GetCollectionChildrenResponse;
  };
  'cms.collection.create': {
    input: CreateCollectionRequest;
    output: CreateCollectionResponse;
  };
  'cms.collection.update': {
    input: UpdateCollectionRequest;
    output: UpdateCollectionResponse;
  };
  'cms.collection.delete': {
    input: DeleteCollectionRequest;
    output: DeleteCollectionResponse;
  };
  'cms.collection.listMedia': {
    input: ListCollectionMediaRequest;
    output: ListCollectionMediaResponse;
  };
  'cms.collection.addMedia': {
    input: AddMediaToCollectionRequest;
    output: AddMediaToCollectionResponse;
  };
  'cms.collection.removeMedia': {
    input: RemoveMediaFromCollectionRequest;
    output: RemoveMediaFromCollectionResponse;
  };
}
