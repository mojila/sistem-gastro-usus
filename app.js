"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const diseaseRouter_1 = __importDefault(require("./api/routes/diseaseRouter"));
const symptomsRouter_1 = __importDefault(require("./api/routes/symptomsRouter"));
const subSymptomsRouter_1 = __importDefault(require("./api/routes/subSymptomsRouter"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = process.env.PORT || 3000;
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect('mongodb://localhost/SistemGastroUsus');
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
diseaseRouter_1.default(app);
symptomsRouter_1.default(app);
subSymptomsRouter_1.default(app);
app.listen(port, () => {
    console.log(`Sistem Gastro Usus berjalan pada: http://localhost:${port}/`);
});
//# sourceMappingURL=app.js.map