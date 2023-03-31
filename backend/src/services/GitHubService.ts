import axios from 'axios';

export class GitHubService {
    static get BASE_URL() {
        return 'https://api.github.com';
    }

    static async get(resourceAndQuery) {
        return axios.get(`${this.BASE_URL}/${resourceAndQuery}`)
    }
}
