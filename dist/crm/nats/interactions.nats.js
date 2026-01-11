"use strict";
/**
 * Interactions NATS Contracts
 *
 * Patterns:
 * - crm.interaction.create
 * - crm.interaction.findAll
 * - crm.interaction.findOne
 * - crm.interaction.update
 * - crm.interaction.remove
 *
 * Handler: crm-service (InteractionsController)
 * Called by: api-gateway (CrmController)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionType = void 0;
/**
 * Interaction Type Enum
 */
var InteractionType;
(function (InteractionType) {
    InteractionType["EMAIL"] = "EMAIL";
    InteractionType["CALL"] = "CALL";
    InteractionType["SMS"] = "SMS";
    InteractionType["IN_PERSON"] = "IN_PERSON";
    InteractionType["CHAT"] = "CHAT";
    InteractionType["SOCIAL_MEDIA"] = "SOCIAL_MEDIA";
    InteractionType["BOOKING"] = "BOOKING";
    InteractionType["FEEDBACK"] = "FEEDBACK";
    InteractionType["COMPLAINT"] = "COMPLAINT";
    InteractionType["INQUIRY"] = "INQUIRY";
})(InteractionType || (exports.InteractionType = InteractionType = {}));
//# sourceMappingURL=interactions.nats.js.map