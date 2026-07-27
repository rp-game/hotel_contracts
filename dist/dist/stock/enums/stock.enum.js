"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockAdjustmentType = exports.ProcurementMode = exports.TransferType = exports.InterHotelTransferStatus = exports.WarehouseScope = exports.StockIssueType = exports.ItemUnit = exports.ItemCategory = void 0;
var ItemCategory;
(function (ItemCategory) {
    ItemCategory["AMENITY"] = "AMENITY";
    ItemCategory["F_AND_B"] = "F_AND_B";
    ItemCategory["HOUSEKEEPING"] = "HOUSEKEEPING";
    ItemCategory["MAINTENANCE"] = "MAINTENANCE";
    ItemCategory["LINEN"] = "LINEN";
    ItemCategory["OTHER"] = "OTHER";
})(ItemCategory || (exports.ItemCategory = ItemCategory = {}));
var ItemUnit;
(function (ItemUnit) {
    ItemUnit["PIECE"] = "piece";
    ItemUnit["BOTTLE"] = "bottle";
    ItemUnit["KG"] = "kg";
    ItemUnit["LITER"] = "liter";
    ItemUnit["PACK"] = "pack";
    ItemUnit["ROLL"] = "roll";
    ItemUnit["SET"] = "set";
})(ItemUnit || (exports.ItemUnit = ItemUnit = {}));
var StockIssueType;
(function (StockIssueType) {
    StockIssueType["ROOM_AMENITY"] = "ROOM_AMENITY";
    StockIssueType["MINIBAR_CONSUMPTION"] = "MINIBAR_CONSUMPTION";
    StockIssueType["HOUSEKEEPING"] = "HOUSEKEEPING";
    StockIssueType["MAINTENANCE"] = "MAINTENANCE";
    StockIssueType["F_AND_B"] = "F_AND_B";
    StockIssueType["SUPPLY_KIT"] = "SUPPLY_KIT";
    StockIssueType["MINIBAR_RESTOCK"] = "MINIBAR_RESTOCK";
    StockIssueType["INTER_HOTEL_TRANSFER"] = "INTER_HOTEL_TRANSFER";
    StockIssueType["OTHER"] = "OTHER";
})(StockIssueType || (exports.StockIssueType = StockIssueType = {}));
var WarehouseScope;
(function (WarehouseScope) {
    WarehouseScope["HOTEL"] = "HOTEL";
    WarehouseScope["CHAIN"] = "CHAIN";
})(WarehouseScope || (exports.WarehouseScope = WarehouseScope = {}));
var InterHotelTransferStatus;
(function (InterHotelTransferStatus) {
    InterHotelTransferStatus["REQUESTED"] = "REQUESTED";
    InterHotelTransferStatus["APPROVED"] = "APPROVED";
    InterHotelTransferStatus["IN_TRANSIT"] = "IN_TRANSIT";
    InterHotelTransferStatus["RECEIVED"] = "RECEIVED";
    InterHotelTransferStatus["REJECTED"] = "REJECTED";
})(InterHotelTransferStatus || (exports.InterHotelTransferStatus = InterHotelTransferStatus = {}));
var TransferType;
(function (TransferType) {
    TransferType["INTERNAL_TRANSFER"] = "INTERNAL_TRANSFER";
    TransferType["INTER_COMPANY_SALE"] = "INTER_COMPANY_SALE";
})(TransferType || (exports.TransferType = TransferType = {}));
var ProcurementMode;
(function (ProcurementMode) {
    ProcurementMode["SELF"] = "SELF";
    ProcurementMode["CHAIN_ONLY"] = "CHAIN_ONLY";
    ProcurementMode["BOTH"] = "BOTH";
})(ProcurementMode || (exports.ProcurementMode = ProcurementMode = {}));
var StockAdjustmentType;
(function (StockAdjustmentType) {
    StockAdjustmentType["STOCK_TAKE"] = "STOCK_TAKE";
    StockAdjustmentType["DAMAGE"] = "DAMAGE";
    StockAdjustmentType["EXPIRED"] = "EXPIRED";
    StockAdjustmentType["WRITE_OFF"] = "WRITE_OFF";
    StockAdjustmentType["RETURN_TO_STOCK"] = "RETURN_TO_STOCK";
    StockAdjustmentType["RETURN_TO_SUPPLIER"] = "RETURN_TO_SUPPLIER";
})(StockAdjustmentType || (exports.StockAdjustmentType = StockAdjustmentType = {}));
//# sourceMappingURL=stock.enum.js.map