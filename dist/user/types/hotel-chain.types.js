"use strict";
/**
 * Hotel Chain Types
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelChainStatus = exports.ChainType = void 0;
/**
 * Hotel Chain Type Enum
 */
var ChainType;
(function (ChainType) {
    ChainType["LUXURY"] = "LUXURY";
    ChainType["MIDSCALE"] = "MIDSCALE";
    ChainType["ECONOMY"] = "ECONOMY";
    ChainType["BOUTIQUE"] = "BOUTIQUE";
    ChainType["EXTENDED_STAY"] = "EXTENDED_STAY";
    ChainType["RESORT"] = "RESORT";
})(ChainType || (exports.ChainType = ChainType = {}));
/**
 * Hotel Chain Status Enum
 */
var HotelChainStatus;
(function (HotelChainStatus) {
    HotelChainStatus["ACTIVE"] = "ACTIVE";
    HotelChainStatus["INACTIVE"] = "INACTIVE";
    HotelChainStatus["PENDING"] = "PENDING";
    HotelChainStatus["SUSPENDED"] = "SUSPENDED";
})(HotelChainStatus || (exports.HotelChainStatus = HotelChainStatus = {}));
//# sourceMappingURL=hotel-chain.types.js.map