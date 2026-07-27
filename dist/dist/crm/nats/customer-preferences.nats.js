"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortOrderEnum = exports.PreferenceSuggestionTypeEnum = exports.InteractionStatusEnum = exports.InteractionChannelEnum = exports.InteractionTypeEnum = exports.PreferenceTypeEnum = void 0;
// ============================================================================
// ENUMS
// ============================================================================
var PreferenceTypeEnum;
(function (PreferenceTypeEnum) {
    PreferenceTypeEnum["ROOM_TYPE"] = "ROOM_TYPE";
    PreferenceTypeEnum["FLOOR_PREFERENCE"] = "FLOOR_PREFERENCE";
    PreferenceTypeEnum["BED_TYPE"] = "BED_TYPE";
    PreferenceTypeEnum["ROOM_TEMPERATURE"] = "ROOM_TEMPERATURE";
    PreferenceTypeEnum["PILLOW_TYPE"] = "PILLOW_TYPE";
    PreferenceTypeEnum["DIETARY_RESTRICTIONS"] = "DIETARY_RESTRICTIONS";
    PreferenceTypeEnum["ACCESSIBILITY_NEEDS"] = "ACCESSIBILITY_NEEDS";
    PreferenceTypeEnum["SPECIAL_OCCASIONS"] = "SPECIAL_OCCASIONS";
    PreferenceTypeEnum["COMMUNICATION_METHOD"] = "COMMUNICATION_METHOD";
    PreferenceTypeEnum["LANGUAGE"] = "LANGUAGE";
    PreferenceTypeEnum["SERVICES"] = "SERVICES";
    PreferenceTypeEnum["AMENITIES"] = "AMENITIES";
})(PreferenceTypeEnum || (exports.PreferenceTypeEnum = PreferenceTypeEnum = {}));
var InteractionTypeEnum;
(function (InteractionTypeEnum) {
    InteractionTypeEnum["ROOM_SERVICE"] = "ROOM_SERVICE";
    InteractionTypeEnum["COMPLAINT"] = "COMPLAINT";
    InteractionTypeEnum["COMPLIMENT"] = "COMPLIMENT";
    InteractionTypeEnum["FEEDBACK"] = "FEEDBACK";
    InteractionTypeEnum["SPECIAL_REQUEST"] = "SPECIAL_REQUEST";
    InteractionTypeEnum["MAINTENANCE"] = "MAINTENANCE";
    InteractionTypeEnum["HOUSEKEEPING"] = "HOUSEKEEPING";
    InteractionTypeEnum["BILLING"] = "BILLING";
    InteractionTypeEnum["CONCIERGE"] = "CONCIERGE";
})(InteractionTypeEnum || (exports.InteractionTypeEnum = InteractionTypeEnum = {}));
var InteractionChannelEnum;
(function (InteractionChannelEnum) {
    InteractionChannelEnum["PHONE"] = "PHONE";
    InteractionChannelEnum["EMAIL"] = "EMAIL";
    InteractionChannelEnum["CHAT"] = "CHAT";
    InteractionChannelEnum["IN_PERSON"] = "IN_PERSON";
    InteractionChannelEnum["SMS"] = "SMS";
    InteractionChannelEnum["MOBILE_APP"] = "MOBILE_APP";
})(InteractionChannelEnum || (exports.InteractionChannelEnum = InteractionChannelEnum = {}));
var InteractionStatusEnum;
(function (InteractionStatusEnum) {
    InteractionStatusEnum["OPEN"] = "OPEN";
    InteractionStatusEnum["PENDING"] = "PENDING";
    InteractionStatusEnum["CLOSED"] = "CLOSED";
    InteractionStatusEnum["RESOLVED"] = "RESOLVED";
    InteractionStatusEnum["ON_HOLD"] = "ON_HOLD";
    InteractionStatusEnum["ESCALATED"] = "ESCALATED";
})(InteractionStatusEnum || (exports.InteractionStatusEnum = InteractionStatusEnum = {}));
var PreferenceSuggestionTypeEnum;
(function (PreferenceSuggestionTypeEnum) {
    PreferenceSuggestionTypeEnum["AUTO_APPLY"] = "AUTO_APPLY";
    PreferenceSuggestionTypeEnum["MANUAL_REVIEW"] = "MANUAL_REVIEW";
    PreferenceSuggestionTypeEnum["NOTIFICATION_ONLY"] = "NOTIFICATION_ONLY";
})(PreferenceSuggestionTypeEnum || (exports.PreferenceSuggestionTypeEnum = PreferenceSuggestionTypeEnum = {}));
var SortOrderEnum;
(function (SortOrderEnum) {
    SortOrderEnum["ASC"] = "ASC";
    SortOrderEnum["DESC"] = "DESC";
})(SortOrderEnum || (exports.SortOrderEnum = SortOrderEnum = {}));
//# sourceMappingURL=customer-preferences.nats.js.map