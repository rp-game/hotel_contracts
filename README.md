# @hotel/contracts

Centralized TypeScript contracts repository for Hotel Management System microservices. This is the **single source of truth** for all service communication contracts, DTOs, types, and enums.

## Problem This Solves

- **36+ incompatible `NatsResponse` definitions** across services → **1 canonical definition**
- **351+ duplicate DTO files** → **Single reference implementation**
- **Frontend-backend type mismatches** → **Shared type system**
- **Manual copy-paste contract maintenance** → **Version-controlled, audited contracts**

## Installation

### In package.json

```json
{
  "dependencies": {
    "@hotel/contracts": "github:your-org/hotel-contracts#v1.0.0"
  }
}
```

### Then install

```bash
npm install
```

## Usage

### Common Contracts (All Services)

```typescript
import { NatsResponse, NatsPaginatedResponse } from '@hotel/contracts/common';
import { PaginationQuery, ErrorInfo } from '@hotel/contracts/common';

// Use in NATS handlers
const response: NatsResponse<BookingData> = {
  success: true,
  data: bookingData,
};

// Use in paginated responses
const listResponse: NatsPaginatedResponse<Booking[]> = {
  success: true,
  data: bookings,
  pagination: {
    total: 100,
    page: 1,
    limit: 10,
    totalPages: 10,
  },
};
```

### Booking Service

```typescript
// NATS message contracts
import {
  CreateBookingRequest,
  CreateBookingResponse,
  CreateBookingNatsResponse
} from '@hotel/contracts/booking/nats';

// Domain enums
import { BookingStatus, BookingType } from '@hotel/contracts/booking';

// Domain types
import { Booking, BookingRoomAssignment } from '@hotel/contracts/booking/types';

// Handle NATS message
const handler = async (msg: CreateBookingRequest): Promise<CreateBookingNatsResponse> => {
  // Implementation
  return {
    success: true,
    data: {
      bookingId: '...',
      bookingCode: '...',
      // ...
    },
  };
};
```

### Wildcard Imports

```typescript
// Import entire domain
import * as BookingContracts from '@hotel/contracts/booking';

// Access all exported symbols
const status: BookingContracts.BookingStatus = BookingContracts.BookingStatus.CONFIRMED;
const booking: BookingContracts.Booking = { /* ... */ };
```

## Domain Organization

```
src/
├── common/                 # Shared across all services
│   ├── nats-response.interface.ts
│   ├── pagination.interface.ts
│   └── error.interface.ts
├── booking/                # Booking service contracts
│   ├── nats/
│   ├── rest/
│   ├── types/
│   └── enums/
├── pricing/                # Pricing service contracts
├── inventory/              # Inventory service contracts
├── housekeeping/           # Housekeeping service contracts
├── user/                   # User service contracts
├── payment/                # Payment service contracts
├── crm/                    # CRM service contracts
├── financial/              # Financial service contracts
├── channel/                # Channel integration contracts
├── notification/           # Notification service contracts
├── report/                 # Report service contracts
└── platform/               # Platform management contracts
```

## Contract Standards

### 1. NATS Message Contracts

File: `src/{domain}/nats/{action}-{entity}.nats.ts`

```typescript
/**
 * NATS Request: booking.create
 * Handler: booking-service
 */
export interface CreateBookingRequest {
  tenantId: string;
  hotelId: string;
  guestInfo: { /* ... */ };
  bookingDetails: { /* ... */ };
}

export interface CreateBookingResponse {
  bookingId: string;
  bookingCode: string;
  status: string;
}

// Always wrap response in NatsResponse generic
export type CreateBookingNatsResponse = NatsResponse<CreateBookingResponse>;
```

### 2. REST DTOs

File: `src/{domain}/rest/{entity}.dto.ts`

Can either:
- Re-export NATS contracts if they're compatible
- Define custom DTOs for REST-specific needs

```typescript
export * from '../nats';
// or
export class CreateBookingDto { /* ... */ }
```

### 3. Domain Enums

File: `src/{domain}/enums/{enum-name}.enum.ts`

```typescript
export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CHECKED_IN = 'CHECKED_IN',
  CHECKED_OUT = 'CHECKED_OUT',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
  NO_SHOW = 'NO_SHOW',
  ON_HOLD = 'ON_HOLD',
}
```

### 4. Domain Types

File: `src/{domain}/types/{entity}.types.ts`

```typescript
export interface Booking {
  id: string;
  code: string;
  status: string;
  tenantId: string;
  hotelId: string;
  // ... other fields
}
```

### 5. Barrel Exports

Each subdirectory and domain must export all public symbols:

```typescript
// src/booking/nats/index.ts
export * from './create-booking.nats';
export * from './get-booking.nats';
// ...

// src/booking/index.ts
export * from './nats';
export * from './rest';
export * from './types';
export * from './enums';
```

## Versioning

Uses **Semantic Versioning** with **Git tags**.

### Version Format

- **MAJOR.MINOR.PATCH** (e.g., `v1.2.3`)
- Major: Breaking changes (removed fields, renamed types)
- Minor: Backward-compatible additions (new optional fields)
- Patch: Bug fixes, documentation

### Creating a Release

```bash
# 1. Commit your changes
git add .
git commit -m "feat: Add loyalty contracts"

# 2. Tag the version
git tag -a v1.3.0 -m "Release v1.3.0: Add loyalty domain"

# 3. Push to GitHub
git push origin main
git push origin v1.3.0

# 4. CI/CD automatically publishes to npm
```

## Service Integration Guide

### 1. Install in Service

```bash
npm install @hotel/contracts@github:your-org/hotel-contracts#v1.0.0
```

### 2. Update package.json

```json
{
  "dependencies": {
    "@hotel/contracts": "github:your-org/hotel-contracts#v1.0.0"
  }
}
```

### 3. Use Contracts

```typescript
// booking-service/src/booking.handler.ts
import { CreateBookingRequest } from '@hotel/contracts/booking/nats';
import { NatsResponse } from '@hotel/contracts/common';

@MessagePattern('booking.create')
async handleCreateBooking(msg: CreateBookingRequest): Promise<NatsResponse> {
  // Implementation
}
```

### 4. Update to New Version

```bash
# Update package.json version
npm install @hotel/contracts@github:your-org/hotel-contracts#v1.2.0

# Test
npm test

# Commit
git commit -m "chore: Upgrade @hotel/contracts to v1.2.0"
```

## Local Development

### Develop Contracts Locally

```bash
# In contracts repo
npm run watch

# In service repo, link the contracts package
npm link ../hotel-contracts
```

### Verify Build

```bash
npm run build
npm list @hotel/contracts
```

## Testing Contracts

Run type checking and unit tests:

```bash
npm run build   # Compile TypeScript
npm test        # Run contract tests
npm run lint    # Check code style
```

## Breaking Changes

### Announcing a Breaking Change

1. Create issue: `[BREAKING] Remove deprecated field from Booking`
2. Post in team chat with migration guide
3. Update CHANGELOG.md
4. Create v2.0.0 release with migration guide

### Migration Guide Template

```markdown
## v2.0.0 Migration Guide

### Breaking Changes

#### Removed: `BookingRequest.guestId` field

**Old**:
```typescript
const req: CreateBookingRequest = {
  guestId: '...',
  // ...
};
```

**New**:
```typescript
const req: CreateBookingRequest = {
  guestInfo: { firstName: '...', lastName: '...', /* ... */ },
  // ...
};
```

### Timeline

- v1.x: Old and new formats accepted (deprecated)
- v2.0.0: Only new format accepted
```

## Contributing

### Adding New Contracts

1. Create feature branch: `git checkout -b feature/add-loyalty-contracts`
2. Add contracts following standards above
3. Update barrel exports
4. Build and test: `npm run build && npm test`
5. Create PR for review
6. Merge to main
7. Tag version: `git tag v1.3.0`

### Code Style

- Use TypeScript strict mode
- Add JSDoc comments to all public symbols
- Follow naming conventions:
  - Interfaces: `PascalCase` (e.g., `CreateBookingRequest`)
  - Enums: `PascalCase` (e.g., `BookingStatus`)
  - Files: `kebab-case` (e.g., `create-booking.nats.ts`)

## Troubleshooting

### Installation Issues

```bash
# Clear npm cache
npm cache clean --force

# Reinstall
npm install @hotel/contracts@github:your-org/hotel-contracts#v1.0.0
```

### Type Errors

Ensure you're importing from the correct path:

```typescript
// ✅ Correct
import { BookingStatus } from '@hotel/contracts/booking';

// ❌ Wrong
import { BookingStatus } from '@hotel/contracts/booking/enums';
```

### GitHub Access

Ensure your GitHub token has access to the repository:

```bash
npm config set @:registry=https://npm.pkg.github.com
npm config set //npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

## Support

For questions or issues:
- Create an issue: [GitHub Issues](https://github.com/your-org/hotel-contracts/issues)
- Team chat: #contracts-support
- Documentation: See CHANGELOG.md for version history

## License

MIT
