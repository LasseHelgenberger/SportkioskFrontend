import http from "../http-common";

class SportDataService {
    getAll() {
        return http.get("/sport");
    }

    get(id) {
        return http.get(`/sport/${id}`);
    }
}

export default new SportDataService();