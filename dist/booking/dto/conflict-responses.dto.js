"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictStatsResponseDto = exports.ConflictListResponseDto = exports.ConflictResponseDto = void 0;
/**
 * Conflict REST/NATS Response DTOs
 * Re-exported from nats contracts to avoid duplication
 */
var get_conflicts_nats_1 = require("../nats/get-conflicts.nats");
Object.defineProperty(exports, "ConflictResponseDto", { enumerable: true, get: function () { return get_conflicts_nats_1.ConflictNatsData; } });
var get_conflicts_nats_2 = require("../nats/get-conflicts.nats");
Object.defineProperty(exports, "ConflictListResponseDto", { enumerable: true, get: function () { return get_conflicts_nats_2.ConflictListResponseDto; } });
var get_conflict_stats_nats_1 = require("../nats/get-conflict-stats.nats");
Object.defineProperty(exports, "ConflictStatsResponseDto", { enumerable: true, get: function () { return get_conflict_stats_nats_1.ConflictStatsNatsData; } });
//# sourceMappingURL=conflict-responses.dto.js.map