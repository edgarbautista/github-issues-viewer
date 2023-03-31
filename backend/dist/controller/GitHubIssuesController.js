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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubIssuesController = void 0;
const GitHubService_1 = require("../services/GitHubService");
class GitHubIssuesController {
    static getIssues(url) {
        return __awaiter(this, void 0, void 0, function* () {
            console.info(`${new Date().toISOString()} issues controller`, `FETCHING`, url);
            const serviceRes = yield GitHubService_1.GitHubService.get(url);
            console.info(`${new Date().toISOString()} issues controller`, 'RESPONSE_STATUS', serviceRes.status);
            return serviceRes;
        });
    }
}
exports.GitHubIssuesController = GitHubIssuesController;
//# sourceMappingURL=GitHubIssuesController.js.map