import http from "../http-common";

class RessortDataService {
    getAll() {
        return http.get("/ressort");
    }

    get(id) {
        return http.get(`/ressort/${id}`);
    }
}

export default new RessortDataService();