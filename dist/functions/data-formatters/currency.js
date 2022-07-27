"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currency = void 0;
const numbro_1 = __importDefault(require("numbro"));
const currency = (value, noDecimals = false) => {
    const decimalPlaces = noDecimals ? 0 : 2;
    return (0, numbro_1.default)(value).format({
        thousandSeparated: true,
        mantissa: decimalPlaces,
    });
};
exports.currency = currency;
