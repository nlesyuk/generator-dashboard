import Repository from "./Repository";

const resources = "wifi";
export interface ISetWifi {
  ssid: string;
  password: string;
}

const wifi = {
  getScannedList() {
    return Repository.get(`${resources}/scan`);
  },
  getDetails(payload = {}) {
    return Repository.post(`${resources}/details`, payload);
  },
  setWifi(payload: ISetWifi) {
    return Repository.post(`${resources}/set`, payload);
  },
};

export default wifi
