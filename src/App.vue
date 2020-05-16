<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import store from 'boot/composition-api'
import { onMounted } from '@vue/composition-api'

export default {
  name: 'App',
  setup () {
    // 保持データのストアを供給する。
    store.provideStore(store)
    // 初期データを取得する。
    onMounted(() => store.listItems())
  }
}
</script>
