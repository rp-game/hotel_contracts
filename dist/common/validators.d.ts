import { ValidationOptions } from 'class-validator';
/**
 * Validates that value is either a valid UUID or the string "null".
 * Used for hotelId fields that support chain-level (null) context.
 *
 * - Valid UUID → pass
 * - "null" string → pass (chain-level)
 * - anything else → fail
 */
export declare function IsNullableUUID(validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
//# sourceMappingURL=validators.d.ts.map