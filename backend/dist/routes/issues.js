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
const GitHubIssuesController_1 = require("../controller/GitHubIssuesController");
const router = express_1.default.Router();
const REPOS = 'repos';
const ISSUES = 'issues';
router.get("/:org/:repository/issues/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resources = `${REPOS}/${req.params.org}/${req.params.repository}/${ISSUES}`;
    const query = !!req.query ? Object.entries(req.query).reduce((pre, cur) => `${pre}&${cur[0]}=${cur[1]}`, '?') : '';
    const url = resources + query;
    try {
        const controllerRes = yield GitHubIssuesController_1.GitHubIssuesController.getIssues(url);
        res.status(controllerRes.status).json(controllerRes.data);
    }
    catch (err) {
        console.error('issues router', `ERROR`, err.code, err.response.data);
        res.status(err.response.status).json({
            devMessage: err.response.data,
            message: err.message,
        });
    }
    ;
}));
exports.default = router;
//# sourceMappingURL=issues.js.map