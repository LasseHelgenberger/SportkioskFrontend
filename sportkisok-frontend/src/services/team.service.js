import http from "../http-common";

class TeamDataService {
    getAll() {
        return http.get("/team");
    }

    get(id) {
        return http.get(`/team/${id}`);
    }
}

export default new TeamDataService();