import Repository from "./Repository";

const resources = "wifi";

const wifi = {
  getScannedList() {
    return Repository.get(`${resources}/scan`);
  },
  getDetails(payload = {}) {
    return Repository.post(`${resources}/details`, payload);
  },
};

export default wifi
