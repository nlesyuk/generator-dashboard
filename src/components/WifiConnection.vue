<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RepositoryFactory } from "@/repositories";
import { ISetWifi } from "@/repositories/WifiRepository";
import Loader from '@/components/core/Loader.vue';

const WifiRepository = RepositoryFactory.get("wifi");

const password = ref("");
const wifiEndpoint = ref(undefined);
const list = ref([]);
const isLoading = ref<boolean>(false);




onMounted(async () => {
  try {
    isLoading.value = true
    const wifiList = await getWifi();
    list.value = wifiList;
    wifiEndpoint.value = wifiList[0].ssid;
  } catch(error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
});

function onSubmit() {
  console.log("submit", wifiEndpoint.value, password.value);
  setWifi({
    ssid: wifiEndpoint.value,
    password: password.value
  })
}
async function getWifi() {
  try {
    const { data } = await WifiRepository.getScannedList();
    return data?.result;
  } catch (e) {
    console.error(e);
  }
}
async function setWifi({ ssid, password }: ISetWifi) {
  try {
    isLoading.value = true
    const { data } = await WifiRepository.setWifi({ ssid, password });
    return data;
  } catch (e) {
    console.error(e);
  } finally {
    isLoading.value = false
  }
}

</script>
<template>
  <form>
    <Loader  v-if="isLoading"/>
    <select v-model="wifiEndpoint">
      <option v-for="item in list" :key="item.ssid" :value="item.ssid">
        {{ item.ssid }}
      </option>
    </select>
    <input type="text" v-model="password" placeholder="password" />
    <button type="button" @click="onSubmit">Save</button>
  </form>
</template>

<style scoped lang="scss">
form {
  width: 400px;
  padding: 16px;
  border-radius: 16px;
  background: grey;
  select,
  input,
  button {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 4px;
    outline: none;
    border: none;
    &:last-child {
      margin-bottom: 0;
    }
  }

  button {
    background: #e1e1e1;
    cursor: pointer;
  }
}
</style>
