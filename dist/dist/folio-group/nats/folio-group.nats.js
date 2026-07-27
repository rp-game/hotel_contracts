"use strict";
/**
 * Folio Group NATS Contracts
 *
 * A Folio Group links several independent bookings so a receptionist can settle
 * them with ONE combined collection. Model = ALLOCATE: a combined payment is
 * split (fill-order) into per-booking BookingPayments — member.paidAmount stays
 * real, so checkout / revenue / per-booking folio keep working unchanged.
 *
 * NATS Patterns (handler: booking-service, called by: api-gateway):
 *   folio-group.create          — link bookings into a new group, return folio
 *   folio-group.add_booking     — link one more booking, return folio
 *   folio-group.remove_booking  — unlink one booking (empty group is deleted)
 *   folio-group.get_folio       — combined folio (members + summary)
 *   folio-group.list            — list groups (aggregated, no N+1)
 *   folio-group.find_one        — basic group record
 *   folio-group.collect         — collect a combined amount, allocate to members
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=folio-group.nats.js.map