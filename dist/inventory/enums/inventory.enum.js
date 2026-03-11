"use strict";
/**
 * Room Status Enum
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomTypeAmenity = exports.RoomStatus = void 0;
var RoomStatus;
(function (RoomStatus) {
    RoomStatus["AVAILABLE"] = "AVAILABLE";
    RoomStatus["OCCUPIED"] = "OCCUPIED";
    RoomStatus["MAINTENANCE"] = "MAINTENANCE";
    RoomStatus["BLOCKED"] = "BLOCKED";
    RoomStatus["DIRTY"] = "DIRTY";
    RoomStatus["OUT_OF_SERVICE"] = "OUT_OF_SERVICE";
    RoomStatus["OUT_OF_ORDER"] = "OUT_OF_ORDER";
    RoomStatus["CLEANING"] = "CLEANING";
    RoomStatus["INACTIVE"] = "INACTIVE";
})(RoomStatus || (exports.RoomStatus = RoomStatus = {}));
/**
 * Room Type Amenity Enum
 */
var RoomTypeAmenity;
(function (RoomTypeAmenity) {
    RoomTypeAmenity["WIFI"] = "WIFI";
    RoomTypeAmenity["TV"] = "TV";
    RoomTypeAmenity["AC"] = "AC";
    RoomTypeAmenity["MINIBAR"] = "MINIBAR";
    RoomTypeAmenity["SAFE"] = "SAFE";
    RoomTypeAmenity["BATHTUB"] = "BATHTUB";
    RoomTypeAmenity["SHOWER"] = "SHOWER";
    RoomTypeAmenity["BALCONY"] = "BALCONY";
    RoomTypeAmenity["KITCHEN"] = "KITCHEN";
    RoomTypeAmenity["WASHER"] = "WASHER";
    RoomTypeAmenity["HAIRDRYER"] = "HAIRDRYER";
    RoomTypeAmenity["IRON"] = "IRON";
    RoomTypeAmenity["WORKSPACE"] = "WORKSPACE";
})(RoomTypeAmenity || (exports.RoomTypeAmenity = RoomTypeAmenity = {}));
//# sourceMappingURL=inventory.enum.js.map