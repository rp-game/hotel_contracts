"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./nats"), exports);
//# sourceMappingURL=index.js.map