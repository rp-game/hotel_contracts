import { registerDecorator, ValidationOptions, isUUID } from 'class-validator';

/**
 * Validates that value is either a valid UUID or the string "null".
 * Used for hotelId fields that support chain-level (null) context.
 *
 * - Valid UUID → pass
 * - "null" string → pass (chain-level)
 * - anything else → fail
 */
export function IsNullableUUID(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isNullableUUID',
      target: object.constructor,
      propertyName,
      options: {
        message: `${propertyName} must be a valid UUID or "null"`,
        ...validationOptions,
      },
      validator: {
        validate(value: any) {
          if (value === undefined || value === null || value === '') return true;
          if (value === 'null') return true;
          return isUUID(value);
        },
      },
    });
  };
}
