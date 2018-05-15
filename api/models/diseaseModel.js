"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
const schema = new Schema({
    name: String,
    threshold: {
        type: Number,
        default: 0
    },
    symptoms: {
        type: Array,
        default: []
    }
});
exports.default = mongoose_1.default.model('Disease', schema);
//# sourceMappingURL=diseaseModel.js.map