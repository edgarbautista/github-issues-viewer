import {GitHubService} from "../services/GitHubService";

export class GitHubIssuesController {
    static async getIssues(url) {
        console.info(`${new Date().toISOString()} issues controller`, `FETCHING`, url);
        const serviceRes= await GitHubService.get(url)
        console.info(`${new Date().toISOString()} issues controller`, 'RESPONSE_STATUS', serviceRes.status);
        return serviceRes;
    }
}
