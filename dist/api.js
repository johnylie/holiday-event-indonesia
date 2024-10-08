"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHolidays = void 0;
const axios_1 = __importDefault(require("axios"));
const API_BASE_URL = 'https://dayoffapi.vercel.app/api';
const getHolidays = (year, month) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    let url = API_BASE_URL;
    if (year) {
        url += `?year=${year}`;
    }
    if (month) {
        url += year ? `&month=${month}` : `?month=${month}`;
    }
    try {
        const response = yield axios_1.default.get(url);
        return response.data;
    }
    catch (error) {
        throw new Error(`Failed to fetch holidays: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || error.message}`);
    }
});
exports.getHolidays = getHolidays;
