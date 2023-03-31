"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const issues_1 = __importDefault(require("./routes/issues"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5001;
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use("/repos/", issues_1.default);
app.get('/', (req, res) => {
    res.send('Nothing here');
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
exports = app;
//# sourceMappingURL=app.js.map