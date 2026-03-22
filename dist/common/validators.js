"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNullableUUID = IsNullableUUID;
const class_validator_1 = require("class-validator");
/**
 * Validates that value is either a valid UUID or the string "null".
 * Used for hotelId fields that support chain-level (null) context.
 *
 * - Valid UUID → pass
 * - "null" string → pass (chain-level)
 * - anything else → fail
 */
function IsNullableUUID(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isNullableUUID',
            target: object.constructor,
            propertyName,
            options: {
                message: `${propertyName} must be a valid UUID or "null"`,
                ...validationOptions,
            },
            validator: {
                validate(value) {
                    if (value === undefined || value === null || value === '')
                        return true;
                    if (value === 'null')
                        return true;
                    return (0, class_validator_1.isUUID)(value);
                },
            },
        });
    };
}
//# sourceMappingURL=validators.js.map