"use strict";
/**
 * Booking Domain Enums
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdType = exports.BookingPaymentStatus = exports.BookingSource = exports.BookingType = exports.BookingStatus = void 0;
var booking_status_enum_1 = require("./booking-status.enum");
Object.defineProperty(exports, "BookingStatus", { enumerable: true, get: function () { return booking_status_enum_1.BookingStatus; } });
var booking_type_enum_1 = require("./booking-type.enum");
Object.defineProperty(exports, "BookingType", { enumerable: true, get: function () { return booking_type_enum_1.BookingType; } });
var booking_source_enum_1 = require("./booking-source.enum");
Object.defineProperty(exports, "BookingSource", { enumerable: true, get: function () { return booking_source_enum_1.BookingSource; } });
var payment_status_enum_1 = require("./payment-status.enum");
Object.defineProperty(exports, "BookingPaymentStatus", { enumerable: true, get: function () { return payment_status_enum_1.BookingPaymentStatus; } });
var id_type_enum_1 = require("./id-type.enum");
Object.defineProperty(exports, "IdType", { enumerable: true, get: function () { return id_type_enum_1.IdType; } });
//# sourceMappingURL=index.js.map