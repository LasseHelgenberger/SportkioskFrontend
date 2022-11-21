import http from "../http-common";

class ScoreDataService {
    getAll() {
        return http.get("/score");
    }

    get(id) {
        return http.get(`/score/${id}`);
    }

    create(data) {
        console.log(data);
        return http.post("/score", data);
    }
}

export default new ScoreDataService();