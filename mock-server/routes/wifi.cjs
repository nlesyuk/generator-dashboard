const express = require('express');
const router = express.Router();

const delay = (ms = 1000) => new Promise((res) => {
  setTimeout(res, ms);
});

const wifi = '/wifi';

router.get(`${wifi}/scan`, async (req, res) => {
  await delay()
  res.status(200).send(
    {
      status: "done",
      result: [
        {
          ssid: "Programming",
          "rssi": -37,
          "channel": 2,
          "encryption": "wpa2"
        },
        {
          ssid: "TOTOLINK N300RT",
          "rssi": -56,
          "channel": 11,
          "encryption": "wpa2"
        },
      ]
    });
});

router.get(`${wifi}/details`, async (req, res) => {
  await delay()
  res.status(200).send(
    {
      status: "done",
      result: {
        "stored_ssid": "Programming",
        "stored_password": "Panda1234",
        "current_ssid": "Programming",
        "ip_address": "192.168.0.136",
        "mac_address": "DC:DA:0C:2A:16:40",
        "rssi": -36,
        "wifi_status": "Connected",
        "ap_ssid": "ESP32-AP",
        "ap_password": "password1234",
        "ap_ip_address": "192.168.4.1",
        "ap_mac_address": "DE:DA:0C:2A:16:40",
        "ap_active": false,
        "domain_name": "eg.local"
      }
    });
});

router.post(`${wifi}/set`, async (req, res) => {
  // awaiting from a client
  // {
  // "ssid": "your_wifi_ssid",
  // "password": "your_wifi_password"
  // }
  // TODO:
  await delay()
  res.status(200).send(
    {
      status: "done",
      result: {
        "stored_ssid": "Programming",
        "stored_password": "Panda1234",
        "current_ssid": "Programming",
        "ip_address": "192.168.0.136",
        "mac_address": "DC:DA:0C:2A:16:40",
        "rssi": -36,
        "wifi_status": "Connected",
        "ap_ssid": "ESP32-AP",
        "ap_password": "password1234",
        "ap_ip_address": "192.168.4.1",
        "ap_mac_address": "DE:DA:0C:2A:16:40",
        "ap_active": false,
        "domain_name": "eg.local"
      }
    });
});


module.exports = router;