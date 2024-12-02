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
  getDetails() {
    return Repository.get(`${resources}/details`);
  },
  setWifi(payload: ISetWifi) {
    return Repository.post(`${resources}/set`, payload);
  },
};

export default wifi
