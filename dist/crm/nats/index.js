"use strict";
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
// Existing contracts
__exportStar(require("./customer-stats.nats"), exports);
__exportStar(require("./service-booking-stats.nats"), exports);
// Customers and Analytics
__exportStar(require("./customers.nats"), exports);
__exportStar(require("./analytics.nats"), exports);
__exportStar(require("./hotels-analytics.nats"), exports);
// Loyalty Module
__exportStar(require("./loyalty-members.nats"), exports);
__exportStar(require("./loyalty-programs.nats"), exports);
__exportStar(require("./loyalty-tiers.nats"), exports);
__exportStar(require("./loyalty-transactions.nats"), exports);
__exportStar(require("./loyalty-events.nats"), exports);
__exportStar(require("./loyalty-campaigns.nats"), exports);
__exportStar(require("./points-expiration.nats"), exports);
// Feedback and Communication
__exportStar(require("./feedback.nats"), exports);
// Segmentation
__exportStar(require("./segmentation.nats"), exports);
// Interactions
__exportStar(require("./interactions.nats"), exports);
// Customer Preferences and History
__exportStar(require("./customer-preferences.nats"), exports);
// Marketing
__exportStar(require("./marketing-automation.nats"), exports);
__exportStar(require("./email-marketing.nats"), exports);
__exportStar(require("./sms-marketing.nats"), exports);
// Guest Services
__exportStar(require("./guest-services.nats"), exports);
//# sourceMappingURL=index.js.map