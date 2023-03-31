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
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const mainPageConfigs_js_1 = __importDefault(require("../configs/main/mainPageConfigs.js"));
const assessmentConfigs_js_1 = __importDefault(require("../configs/main/assessmentConfigs.js"));
router.get("/config/list", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            data: [mainPageConfigs_js_1.default, assessmentConfigs_js_1.default]
        });
    }
    catch (err) {
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }
}));
router.get("/config/:name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.params;
    let config = null;
    if (name === 'project') {
        config = mainPageConfigs_js_1.default;
    }
    else if (name === 'assessment') {
        config = assessmentConfigs_js_1.default;
    }
    try {
        const pageConfig = config.find(config => config.name === name);
        res.status(200).json({
            data: pageConfig
        });
    }
    catch (err) {
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }
}));
exports.default = router;
//# sourceMappingURL=main.js.map