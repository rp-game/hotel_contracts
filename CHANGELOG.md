# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0-alpha.1] - 2024-01-XX

### Added
- Initial repository setup with 12 domain folders
- **Common contracts** (core shared interfaces):
  - `NatsResponse<T>` - THE canonical NATS response format (eliminates 36+ duplicates)
  - `NatsPaginatedResponse<T>` - Paginated list responses
  - `PaginationQuery` - Standard pagination request parameters
  - `PaginationMeta` - Pagination metadata for responses
  - `ErrorInfo` - Bilingual error definitions
  - `ValidationError` - Field-level validation errors
- **Booking domain** (complete example):
  - `CreateBookingRequest` / `CreateBookingResponse` NATS contracts
  - `BookingStatus` enum (PENDING, CONFIRMED, CHECKED_IN, CHECKED_OUT, CANCELLED, COMPLETED, NO_SHOW, ON_HOLD)
  - `BookingType` enum (ROOM_NIGHT, HOURLY, EVENT_SPACE, DAY_USE, LONG_TERM, BLOCK)
  - `Booking` domain type
  - `BookingRoomAssignment` domain type
- **Placeholder domains** (ready for content):
  - Pricing, Inventory, Housekeeping (ready for full implementation)
  - User, Payment, CRM, Financial, Channel, Notification, Report, Platform (basic structure)
- **Build configuration**:
  - `package.json` with multi-domain export paths
  - `tsconfig.json` with strict TypeScript settings
  - Domain-specific export paths for granular imports
- **Documentation**:
  - Comprehensive README.md with usage examples
  - This CHANGELOG for version tracking
  - GitHub Actions CI/CD workflow setup

### Status
- **Alpha Release**: Core infrastructure ready, booking domain complete as template
- **Ready for**: Testing and initial integration with booking-service and pricing-service

### Next Steps (v0.2.0)
- Implement Pricing domain contracts (RatePlan, HourlyPricing, DateRate)
- Implement Inventory domain contracts
- Implement Housekeeping domain contracts (based on /shared-types/housekeeping.ts)
- Implement User domain contracts
- Implement Payment domain contracts
- Implement CRM domain contracts
- Implement Financial domain contracts
- Implement Channel domain contracts
- Complete remaining domains

## [0.1.0] - TBD (Target: End of Week 1, Day 3)

### Expected
- All critical domains (Booking, Pricing, Inventory, Housekeeping) with full contracts
- Common contracts finalized
- CI/CD pipeline ready
- Initial README and documentation complete
- First stable release for service integration testing

## [0.2.0] - TBD (Target: End of Week 1, Day 5)

### Expected
- All 12 domains with complete contracts
- Complete NATS message definitions for all services
- REST DTO definitions aligned with NATS contracts
- Full type and enum definitions per domain
- Updated documentation with all domain examples
- Comprehensive CHANGELOG documenting all contracts

## Migration Strategy

### Services Planned for Integration in Week 2

**Priority Order** (based on criticality):
1. **booking-service** + **pricing-service** (Day 1)
   - These are the core domains being heavily used
   - Demonstrate the pattern for other services
2. **inventory-service** + **housekeeping-service** (Day 2)
3. **api-gateway** (Days 3-4) - Most complex
   - REST endpoint contracts
   - OpenAPI schema alignment
4. **frontend** (Day 4) + remaining 7 services (Day 5)

### Integration Checklist per Service

- [ ] Add `@hotel/contracts` to package.json
- [ ] Run `npm install` to pull contracts
- [ ] Replace local NatsResponse definitions with imported version
- [ ] Replace local DTO files with contract imports
- [ ] Update NATS handlers to use contract interfaces
- [ ] Run TypeScript build: `npm run build`
- [ ] Run tests: `npm test`
- [ ] Verify NATS communication works end-to-end
- [ ] Commit: `chore: Integrate @hotel/contracts vX.Y.Z`

## Known Issues / Blockers

None at this time. Repository structure is complete.

## Technical Notes

### Package Exports Structure

The `package.json` provides multiple entry points for granular imports:

```json
{
  "exports": {
    ".": "./dist/index.js",
    "./common": "./dist/common/index.js",
    "./booking": "./dist/booking/index.js",
    "./booking/nats": "./dist/booking/nats/index.js",
    "./pricing": "./dist/pricing/index.js",
    // ... per domain
  }
}
```

This allows both:
```typescript
// Full domain import
import * as BookingContracts from '@hotel/contracts/booking';

// Granular NATS-only import
import { CreateBookingRequest } from '@hotel/contracts/booking/nats';

// Common contracts
import { NatsResponse } from '@hotel/contracts/common';
```

### Breaking Change Protocol

When introducing BREAKING CHANGES:
1. Announce 1 week in advance in team chat
2. Provide migration guide (see README.md example)
3. Support old version for 1-2 sprints before deprecation
4. Bump MAJOR version (e.g., v1.0.0 → v2.0.0)
5. Update CHANGELOG with migration instructions

---

## Unreleased

### Added
(Add new items here when in development, move to version headers when releasing)

### Changed

### Deprecated

### Removed

### Fixed

### Security
