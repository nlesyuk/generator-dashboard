<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RepositoryFactory } from "@/repositories";
import { ISetWifi } from "@/repositories/WifiRepository";
import Loader from '@/components/core/Loader.vue';

const WifiRepository = RepositoryFactory.get("wifi");

const password = ref("");
const wifiEndpoint = ref(undefined);

interface WifiItem {
  stored_ssid: string;
  stored_password: string;
  current_ssid: string;
  ip_address: string;
  mac_address: string;
  rssi: number;
  wifi_status: string;
  ap_ssid: string;
  ap_password: string;
  ap_ip_address: string;
  ap_mac_address: string;
  ap_active: boolean;
  domain_name: string;
}

const wifi = ref<WifiItem | null>(null);
const isLoading = ref<boolean>(false);




onMounted(async () => {
  try {
    isLoading.value = true
    const wifiList = await getWifi();
    wifi.value = wifiList;
  } catch(error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
});


async function getWifi() {
  try {
    const { data } = await WifiRepository.getDetails();
    return data?.result;
  } catch (e) {
    console.error(e);
  }
}


</script>
<template>
  <div class="infoWifi">
    <h1>Wi-Fi Information</h1>
    <div v-if="wifi">
     <!-- for -->
      <p>SSID: {{ wifi.stored_ssid }}</p>
      <p>Password: {{ wifi.stored_password }}</p>
      <p>Current SSID: {{ wifi.current_ssid }}</p>
      <p>IP Address: {{ wifi.ip_address }}</p>
      <p>MAC Address: {{ wifi.mac_address }}</p>
      <p>RSSI: {{ wifi.rssi }}</p>
      <p>Wi-Fi Status: {{ wifi.wifi_status }}</p>
      <p>AP SSID: {{ wifi.ap_ssid }}</p>
      <p>AP Password: {{ wifi.ap_password }}</p>
      <p>AP IP Address: {{ wifi.ap_ip_address }}</p>
      <p>AP MAC Address: {{ wifi.ap_mac_address }}</p>
      <p>AP Active: {{ wifi.ap_active }}</p>
      <p>Domain Name: {{ wifi.domain_name }}</p>
    </div>
    <div v-else>
      <p>Loading Wi-Fi details...</p>
    </div>
  </div>

</template>

<style scoped lang="scss">
  .infoWifi {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #403f3f;
    color: white;
    padding: 1rem;
    border-radius: 1rem;
    width: 100%;
  }
  h1 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
    margin: 0.5rem 0;
  }



</style>
