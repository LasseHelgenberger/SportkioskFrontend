import http from "../http-common";

class UserDataService {
    getAll() {
        return http.get("/user");
    }

    get(id) {
        return http.get(`/user/${id}`);
    }

    create(data) {
        console.log(data);
        return http.post("/user", data);
    }
}

export default new UserDataService();