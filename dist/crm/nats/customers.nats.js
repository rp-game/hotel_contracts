"use strict";
/**
 * Customers NATS Contracts
 *
 * Patterns:
 * - crm.customer.create
 * - crm.customer.findAll
 * - crm.customer.findOne
 * - crm.customer.update
 * - crm.customer.remove
 * - crm.customer.findByEmail
 * - crm.customer.findByPhone
 * - crm.customer.updateStats
 * - crm.customer.recalculateBookingStats
 * - crm.customer.recalculateAllBookingStats
 * - crm.customer.stats
 * - crm.loyalty.findByCustomer
 * - crm.customer.search
 * - crm.customer.export
 * - crm.customer.export.status
 * - crm.customer.export.download
 *
 * Handler: crm-service (CustomersController)
 * Called by: api-gateway (CrmController)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationChannel = exports.NationalIdType = exports.Gender = void 0;
/**
 * Enums
 */
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
    Gender["OTHER"] = "OTHER";
})(Gender || (exports.Gender = Gender = {}));
var NationalIdType;
(function (NationalIdType) {
    NationalIdType["PASSPORT"] = "PASSPORT";
    NationalIdType["CITIZEN_ID"] = "CITIZEN_ID";
    NationalIdType["DRIVING_LICENSE"] = "DRIVING_LICENSE";
})(NationalIdType || (exports.NationalIdType = NationalIdType = {}));
var CommunicationChannel;
(function (CommunicationChannel) {
    CommunicationChannel["EMAIL"] = "EMAIL";
    CommunicationChannel["SMS"] = "SMS";
    CommunicationChannel["APP_NOTIFICATION"] = "APP_NOTIFICATION";
})(CommunicationChannel || (exports.CommunicationChannel = CommunicationChannel = {}));
//# sourceMappingURL=customers.nats.js.map