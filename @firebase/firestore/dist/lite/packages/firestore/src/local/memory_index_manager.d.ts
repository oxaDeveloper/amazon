/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Target } from '../core/target';
import { DocumentKeySet, DocumentMap } from '../model/collections';
import { FieldIndex, IndexOffset } from '../model/field_index';
import { ResourcePath } from '../model/path';
import { IndexManager } from './index_manager';
import { PersistencePromise } from './persistence_promise';
import { PersistenceTransaction } from './persistence_transaction';
/**
 * An in-memory implementation of IndexManager.
 */
export declare class MemoryIndexManager implements IndexManager {
    private collectionParentIndex;
    addToCollectionParentIndex(transaction: PersistenceTransaction, collectionPath: ResourcePath): PersistencePromise<void>;
    getCollectionParents(transaction: PersistenceTransaction, collectionId: string): PersistencePromise<ResourcePath[]>;
    addFieldIndex(transaction: PersistenceTransaction, index: FieldIndex): PersistencePromise<void>;
    deleteFieldIndex(transaction: PersistenceTransaction, index: FieldIndex): PersistencePromise<void>;
    getDocumentsMatchingTarget(transaction: PersistenceTransaction, target: Target): PersistencePromise<DocumentKeySet | null>;
    getFieldIndex(transaction: PersistenceTransaction, target: Target): PersistencePromise<FieldIndex | null>;
    getFieldIndexes(transaction: PersistenceTransaction, collectionGroup?: string): PersistencePromise<FieldIndex[]>;
    getNextCollectionGroupToUpdate(transaction: PersistenceTransaction): PersistencePromise<string | null>;
    updateCollectionGroup(transaction: PersistenceTransaction, collectionGroup: string, offset: IndexOffset): PersistencePromise<void>;
    updateIndexEntries(transaction: PersistenceTransaction, documents: DocumentMap): PersistencePromise<void>;
}
/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */
export declare class MemoryCollectionParentIndex {
    private index;
    add(collectionPath: ResourcePath): boolean;
    has(collectionPath: ResourcePath): boolean;
    getEntries(collectionId: string): ResourcePath[];
}