"use strict";
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
__exportStar(require("./common"), exports);
__exportStar(require("./article.nats"), exports);
__exportStar(require("./page.nats"), exports);
__exportStar(require("./tag.nats"), exports);
__exportStar(require("./image.nats"), exports);
__exportStar(require("./collection.nats"), exports);
//# sourceMappingURL=index.js.map