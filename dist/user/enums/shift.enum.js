"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftStatus = exports.ShiftType = void 0;
var ShiftType;
(function (ShiftType) {
    ShiftType["MORNING"] = "MORNING";
    ShiftType["AFTERNOON"] = "AFTERNOON";
    ShiftType["NIGHT"] = "NIGHT";
    ShiftType["FULL_DAY"] = "FULL_DAY";
})(ShiftType || (exports.ShiftType = ShiftType = {}));
var ShiftStatus;
(function (ShiftStatus) {
    ShiftStatus["SCHEDULED"] = "SCHEDULED";
    ShiftStatus["CONFIRMED"] = "CONFIRMED";
    ShiftStatus["COMPLETED"] = "COMPLETED";
    ShiftStatus["CANCELLED"] = "CANCELLED";
})(ShiftStatus || (exports.ShiftStatus = ShiftStatus = {}));
//# sourceMappingURL=shift.enum.js.map