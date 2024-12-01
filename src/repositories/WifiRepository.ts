import Repository from "./Repository";

const resources = "wifi";

const wifi = {
  get() {
    return Repository.get(`${resources}`);
  },
  save(payload = {}) {
    return Repository.post(`${resources}`, payload);
  },
};

export default wifi
